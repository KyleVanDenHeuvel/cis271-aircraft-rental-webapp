<template>
  <div id="login">
    <h1>Create</h1>
    <div id="fields">
      E-Mail Address: <input v-model="email" /><br />
      Password: <input v-model="password" type="password" /><br />
      Retype Password: <input v-model="retyped" type="password" /><br />
      <button v-on:click="createAcount()">Create!</button>
    </div>
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
      email: "",
      password: "",
      retyped: "",
    };
  },
  methods: {
    createAcount: function() {
      if (this.password === this.retyped) {
        this.$appAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ path: "/weekly" });
          })
          .catch((err) => {
            alert(`Unable to create account, ${err}`);
          });
      } else {
        alert("Passwords do not match!");
      }
    },
  },
};
</script>

<style></style>
