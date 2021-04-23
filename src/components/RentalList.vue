<template>
  <div class="list">
    <table>
      <rental-item />
      <tr class="rentals" v-for="(rental, pos) in rentals" :key="pos">
        <rental-item
          :image="rental.image"
          :type="rental.type"
          :tailNumber="rental.tailNumber"
        />
        <td><button v-on:click="selected(rental.tailNumber)">>>></button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import RentalItem from "./RentalItem.vue";

export default {
  components: { RentalItem },
  name: "RentalList",
  props: {
    rentals: Array,
    selected: Function,
  },
  component: {
    RentalItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #list {
  
} */

table {
  border: 4px solid whitesmoke;
  background-color: lightgray;
  border-radius: 6px;
}

button {
  height: 4rem;
}
</style>
