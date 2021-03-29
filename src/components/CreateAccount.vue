<template>
  <div id="login">
    <h1>Create</h1>
    Pilot Certificate Number: <input v-model="certificate" /><br />
    Password: <input v-model="password" type="password" /><br />
    Retype Password: <input v-model="password" type="password" /><br />
    <button v-on:click="login()">Create!</button>
    <p>
      Already have an account? Click
      <router-link to="/">here</router-link> to login.
    </p>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  components: {},
  data: () => {
    return {
      certificate: "",
      password: "",
    };
  },
  methods: {
    login: function () {},
  },
};
</script>

<style>
</style>