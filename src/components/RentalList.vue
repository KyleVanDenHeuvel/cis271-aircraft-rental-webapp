<template>
  <div class="list">
    <table>
      <tr>
        <td>[IMG]</td>
        <td>Aircraft</td>
        <td>Tail #</td>
        <button>>>></button>
      </tr>
      <tr>
        <td>[IMG]</td>
        <td>Aircraft</td>
        <td>Tail #</td>
        <button>>>></button>
      </tr>
      <!-- <tr class="rentals" v-for="(rental,pos) in rentals" :key="pos">
        <td>{{rental}}</td> -->
    </table>
  </div>
</template>

<script>
export default {
  name: "RentalList",
  props: {
    rentals: Array,
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
