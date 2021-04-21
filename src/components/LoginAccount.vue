<template>
  <div id="login">
    <h1>Login</h1>
    <div id="fields">
      <p>E-Mail Address: <input v-model="email" /></p>
      <p>Password: <input v-model="password" type="password" /></p>
      <button v-on:click="login()">Login!</button>
    </div>
    <p>
      Need an account? Click
      <router-link to="/create">here</router-link> to create an account.
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginAccount",
  components: {},
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      this.$appAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ path: "/weekly" });
        })
        .catch((err) => {
          alert(`Unable to login, ${err}`);
        });
    },
  },
};
</script>

<style>
#login {
  margin: 2rem;
  padding: 1rem;
  background-color: lightblue;
}
#fields {
  display: inline-block;
  justify-content: left;
  text-align: right;
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
