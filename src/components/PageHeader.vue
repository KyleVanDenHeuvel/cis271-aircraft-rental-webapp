<template>
  <div>
    <div id="header">
      <h1>Aircraft Rental</h1>
      <div>
        <button v-on:click="logout()">Log Out</button>
        <button v-on:click="weeklyRentals()">Weekly Rentals</button>
        <button v-on:click="userRentals()">User Rentals</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String,
  },
  methods: {
    logout: function() {
      this.$appAuth.signOut();
      this.$router.push("/");
    },
    weeklyRentals: function() {
      this.$router.push("/weekly");
    },
    userRentals: function() {
      this.$router.push("/userrentals");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  justify-content: center;
  /* text-align: left; */
  height: 10rem;
  margin: 2rem;
  padding-top: 0.5rem;
  background-color: lightblue;
}

h1 {
  text-align: center;
  color: darkslategrey;
}
</style>
