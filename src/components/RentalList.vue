<template>
  <div class="list">
    <table>
        <tr class="rentals" v-for="(rental,pos) in rentals" :key="pos">
        <td>{{rental}}</td>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RentalList',
  props: {
      rentals: Array,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
