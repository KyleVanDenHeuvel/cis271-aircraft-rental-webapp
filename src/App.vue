<template>
  <div id="app">
    <p>Hello world!</p>
    <router-view></router-view>
  </div>
</template>

<script>
import RentalList from "./components/RentalList.vue"
import RentalItem from "./components/RentalItem.vue"

@Component({
  components: {
    RentalList, RentalItem
  },
})
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
