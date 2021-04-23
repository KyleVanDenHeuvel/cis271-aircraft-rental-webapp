<template>
  <div id="weekly">
    <button v-on:click="logout()">Log Out</button>
    Aircraft:
    <select></select>
    <br />
    <div id="week-container">
      <rental-list />
      <table id="calendar">
        <thead>
          <tr>
            <th>{{ week[0].date }}</th>
            <th>{{ week[1].date }}</th>
            <th>{{ week[2].date }}</th>
            <th>{{ week[3].date }}</th>
            <th>{{ week[4].date }}</th>
            <th>{{ week[5].date }}</th>
            <th>{{ week[6].date }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="metar-data">{{ metar.data }}</p>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
  data: () => {
    let currentDate = new Date();
    let week = [];
    // Build a list of the next seven days.
    for (let i = 0; i < 7; i++) {
      week.push({
        date: currentDate.toLocaleDateString(),
      });
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }

    let metar = { data: "" };
    const metarRequest = new XMLHttpRequest();

    metarRequest.open("GET", "https://avwx.rest/api/metar/KGRR");
    metarRequest.setRequestHeader(
      "Authorization",
      "Token fx4OxXj5kJNptfawyQMCjyhyXGJLukoV4qljp9stCjI"
    );

    metarRequest.onreadystatechange = () => {
      if (metarRequest.readyState === 4) {
        metar.data = JSON.parse(metarRequest.responseText).raw;
      }
    };
    metarRequest.send();

    return {
      week: week,
      metar: metar,
    };
  },
  methods: {
    logout: function () {
      this.$appAuth.signOut();
      this.$router.back();
    },
  },
};
</script>

<style>
.metar-data {
  max-width: 120pt;
  font-size: 8pt;
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
