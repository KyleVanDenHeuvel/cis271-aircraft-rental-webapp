<template>
  <div id="rentals">
    <button v-on:click="logout()">Log Out</button>
    <br />
    <div>
      <rental-list />
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
  methods: {
    logout: function() {
      this.$appAuth.signOut();
      this.$router.back();
    },
  },
};
</script>

<style>
#rentals {
  justify-content: left;
  text-align: left;
  margin: 2rem;
  background-color: lightblue;
}
</style>
