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
          <td><b>Date: </b>{{ rental.date }}</td>
          <td><b>Time: </b>{{ rental.time }}</td>
          <td><b>Tail Number: </b>{{ rental.tailNumber }}</td>
          <td><button v-on:click="rentalRemoved(rental)">X</button></td>
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
      // Searches for reservations with the user's ID number
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
    rentalRemoved: function(r) {
      let refs = [];
      // Searches for documents with the corresponding data
      this.$appDB
        .collection("rentals")
        .where("date", "==", r.date)
        .where("time", "==", r.time)
        .where("tailNumber", "==", r.tailNumber)
        .onSnapshot((qs) => {
          console.log(qs.docs);
          let data = qs.docs;
          // Add document ids to array
          for (let i = 0; i < data.length; i++) {
            refs.push(data[i].id);
          }
          // Searches for corresponding documents in the rentals collection and deletes them
          for (let i = 0; i < refs.length; i++) {
            console.log(this.$appDB.collection("rentals").doc(refs[i]));
            this.$appDB
              .collection("rentals")
              .doc(refs[i])
              .delete();
          }
        });
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
td {
  margin-left: 0.25rem;
}
</style>
