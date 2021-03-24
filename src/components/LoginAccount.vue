<template>
  <div id="login">
    <h1>Login</h1>
    Pilot Certificate Number: <input v-model="certificate" /><br />
    Password: <input v-model="password" type="password" /><br />
    <button>Login!</button>
  </div>
</template>

<script>
export default {
  name: "LoginAccount",
  components: {},
  methods: {
    login: function () {},
  },
};
</script>

<style>
#login {
  justify-content: left;
  text-align: left;
}
</style>