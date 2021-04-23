<template>
  <div id="weekly">
    <button v-on:click="logout()">Log Out</button>
    <br />
    <div id="week-container">
      <rental-list :rentals="aircraft" :selected="onAircraftSelect" />
      <table id="calendar">
        <thead>
          <tr>
            <th v-for="day in week" v-bind:key="day.date">{{ day.date }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="day in week" v-bind:key="day.date">
              <p class="metar-data">{{ day.weather }}</p>
            </td>
          </tr>
          <tr>
            <td v-for="day in week" v-bind:key="day.date">
              <ul>
                <li v-for="r in day.rentals" v-bind:key="r.time">
                  <div class="rental-block">
                    {{ r.empty ? "free" : "reserved" }}
                  </div>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RentalList from "./RentalList.vue";

export default {
  name: "Weekly",
  components: {
    RentalList,
  },
  data: function () {
    return {
      selected: null,
      aircraft: [],
      week: [],
    };
  },
  mounted: function () {
    this.updateAircrafts();
    this.updateWeather();
  },
  methods: {
    logout: function () {
      this.$appAuth.signOut();
      this.$router.back();
    },

    // Fills out the weeks and updates it with weather data.
    updateWeather: function () {
      let currentDate = new Date();
      this.week = [];
      // Build a list of the next seven days.
      for (let i = 0; i < 7; i++) {
        this.week.push({
          date: currentDate.toLocaleDateString(),
          weather: "",
          rentals: [],
        });
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      }

      const metarRequest = new XMLHttpRequest();

      // Get today's most up-to-date weather conditions.
      metarRequest.open("GET", "https://avwx.rest/api/metar/KGRR");
      metarRequest.setRequestHeader(
        "Authorization",
        "Token fx4OxXj5kJNptfawyQMCjyhyXGJLukoV4qljp9stCjI"
      );

      metarRequest.onreadystatechange = () => {
        if (metarRequest.readyState === 4) {
          let metar = JSON.parse(metarRequest.responseText).raw;
          // For the first day of the week, we will use the METAR instead
          // of the TAF since we need to display real world conditions. We
          // will also remove the remarks section because that takes
          // up alot of space and it is not needed for a rental service.
          this.week[0].weather = metar.split("RMK")[0];
        }
      };
      metarRequest.send();
      const tafRequest = new XMLHttpRequest();

      // Get the weather forecasts.
      tafRequest.open("GET", "https://avwx.rest/api/taf/KGRR");
      tafRequest.setRequestHeader(
        "Authorization",
        "Token fx4OxXj5kJNptfawyQMCjyhyXGJLukoV4qljp9stCjI"
      );

      tafRequest.onreadystatechange = () => {
        if (tafRequest.readyState === 4) {
          let data = JSON.parse(tafRequest.responseText);
          for (let i = 0; i < data.forecast.length; i++) {
            // Look at the time for the forecast and see if
            // it is on the next day, if it is, then we will
            // put it in the next day column.
            let forecast = data.forecast[i];
            let startTime = new Date(forecast.start_time.dt);
            this.week.forEach((day) => {
              // Check to see if the days match and then insert in
              // the weather data for that day. We also need to make
              // sure that we skip everything from the first day since
              // that will have the metar.
              if (
                day.date === startTime.toLocaleDateString() &&
                day !== this.week[0]
              )
                day.weather = forecast.raw;
            });
          }
        }
      };

      tafRequest.send();
    },

    updateAircrafts: function () {
      this.aircraft = [];

      this.$appDB
        .collection("aircrafts")
        .orderBy("type")
        .onSnapshot((qs) => {
          this.aircraft = [];
          qs.forEach((qds) => {
            if (qds.exists) this.aircraft.push(qds.data());
          });
        });
      return this.aircraft;
    },

    getRentals: function () {
      // Query all the rental times from this specific aircraft.
      this.$appDB
        .collection("rentals")
        .orderBy("time")
        // Fill in the week with rental data but only for the selected
        // aircraft so filter out anything else.
        .where("tailNumber", "==", this.selected.tailNumber)
        .onSnapshot((qs) => {
          // Clear out any existing data.
          this.week.forEach((day) => {
            day.rentals = [];
            // Create 12 empty slots for the 2 hour flights.
            for (let i = 0; i < 12; i++)
              day.rentals.push({ empty: true, owned: false });
          });

          // Add the rental times.
          qs.forEach((qds) => {
            if (qds.exists) {
              let data = qds.data();
              // Look at each day and insert that day's rentals.
              this.week.forEach((day) => {
                if (day.date.toLocaleDateString() === data.date) {
                  // Find the right time slot.
                  day.rentals[data.time / 2] = {
                    empty: false,
                    owned:
                      this.$appAuth.currentUser.uid === data.pilot
                        ? true
                        : false,
                  };
                }
              });
            }
          });
        });
    },

    onAircraftSelect: function (tailNumber) {
      this.aircraft.forEach((ac) => {
        if (ac.tailNumber === tailNumber) {
          this.selected = ac;
          this.getRentals();
        }
      });
    },
  },
};
</script>

<style>
.metar-data {
  min-width: 120pt;
  max-width: 120pt;
  font-size: 8pt;
}

.rental-block {
  background-color: blue;
}

#weekly {
  justify-content: left;
  text-align: left;
  margin: 2rem;
  background-color: lightblue;
}

#calendar {
  border: 4px solid whitesmoke;
  border-radius: 6px;
  margin-left: 1rem;
}

.today {
  background-color: lightgreen;
}

#week-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
}

select {
  min-width: 200px;
}
</style>
