<template>
  <div class="list">
    <td id="image"><img v-bind:src="image" width="100px" /></td>
    <td>{{ type }}</td>
    <td>{{ tailNumber }}</td>
  </div>
</template>

<script>
export default {
  name: "RentalItem",
  props: {
    type: String,
    tailNumber: Number,
    image: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#image {
  width: 200px;
}
</style>
