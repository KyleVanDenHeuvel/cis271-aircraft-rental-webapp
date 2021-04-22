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
            <th>{{ week[0] }}</th>
            <th>{{ week[1] }}</th>
            <th>{{ week[2] }}</th>
            <th>{{ week[3] }}</th>
            <th>{{ week[4] }}</th>
            <th>{{ week[5] }}</th>
            <th>{{ week[6] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
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
      week.push(currentDate.toLocaleDateString());
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }
    return {
      week: week,
    };
  },
  methods: {
    logout: function() {
      this.$appAuth.signOut();
      this.$router.back();
    },
  },
};
</script>

<style>
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
