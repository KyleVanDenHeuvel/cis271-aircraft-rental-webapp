<template>
  <div id="weekly">
    <button v-on:click="logout()">Log Out</button>
    Aircraft:
    <select></select>
    <br />
    <table>
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
</template>

<script>
export default {
  name: "Weekly",
  components: {},
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
    logout: function () {
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

.today {
  background-color: lightgreen;
}
</style>