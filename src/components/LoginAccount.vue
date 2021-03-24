<template>
  <div id="login">
    <h1>Login</h1>
    <p>Pilot Certificate Number: <input v-model="certificate" /></p>
    <p>Password: <input v-model="password" type="password" /></p>
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
  margin: 2rem;
  background-color: lightblue;
}
p {
  margin-left: 1rem;
}
h1 {
  padding: 1rem;
}
input {
  border: 1px solid black;
  border-radius: 3px;
}
button {
  margin: 1rem;
  font-size: 16px;
}
</style>