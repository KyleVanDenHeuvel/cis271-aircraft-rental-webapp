<template>
  <div id="rentals">
    <div className="rentals-container">
      <table>
        <th>
          <tr>
            <td>Rentals</td>
          </tr>
        </th>

        <tr v-for="(rental, pos) in userAircraft" :key="pos">
          <td>Date: {{ rental.date }}</td>
          <td>Time: {{ rental.time }}</td>
          <td>Tail Number: {{ rental.tailNumber }}</td>
          <td><button>X</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weekly",
  data: function() {
    return {
      userAircraft: [],
    };
  },

  mounted: function() {
    this.updateUserAircrafts();
  },
  methods: {
    updateUserAircrafts: function() {
      this.userAircraft = [];

      this.$appDB
        .collection("rentals")
        .orderBy("date")
        .where("pilot", "==", this.$appAuth.currentUser.uid)
        .onSnapshot((qs) => {
          this.userAircraft = [];
          qs.forEach((qds) => {
            if (qds.exists) {
              // let data = qds.data();
              // if (data.pilot == this.$appDB.currentUser.uid)
              this.userAircraft.push(qds.data());
            }
          });
        });
      return this.userAircraft;
    },
  },
};
</script>

<style>
#rentals {
  justify-content: left;
  text-align: left;
  margin: 2rem;
  padding: 2rem;
  background-color: lightblue;
}
#rentals-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
}
table {
  border: 4px solid whitesmoke;
  background-color: lightgray;
  border-radius: 6px;
}
</style>
