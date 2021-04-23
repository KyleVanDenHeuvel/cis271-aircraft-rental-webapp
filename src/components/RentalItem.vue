<template>
  <div class="list">
    <tr>
      <td><img v-bind:src="{ image }" alt="Aircraft Image" /></td>
      <td>{{ aircraftType }}</td>
      <td>{{ tailNumber }}</td>
      <button>>>></button>
    </tr>
  </div>
</template>

<script>
export default {
  name: "RentalItem",
  props: {
    aircraftType: String,
    tailNumber: Number,
    image: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
