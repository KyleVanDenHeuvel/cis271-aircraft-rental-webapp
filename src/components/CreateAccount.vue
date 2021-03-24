<template>
  <div id="login">
    <h1>Create</h1>
    Pilot Certificate Number: <input v-model="certificate" /><br />
    Password: <input v-model="password" type="password" /><br />
    Retype Password: <input v-model="password" type="password" /><br />
    <button>Create!</button>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  components: {},
  methods: {
    login: function () {},
  },
};
</script>

<style>
</style>