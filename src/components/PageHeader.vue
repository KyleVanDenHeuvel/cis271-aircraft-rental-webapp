<template>
  <div>
    <div id="header">
      <h1>Aircraft Rental</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  justify-content: left;
  text-align: left;
  height: 8rem;
  margin: 2rem;
  padding-top: 1rem;
  background-color: lightblue;
}

h1 {
  text-align: center;
  color: darkslategrey;
}
</style>
