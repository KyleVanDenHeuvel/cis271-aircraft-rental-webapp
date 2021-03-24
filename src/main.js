import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import LoginAccount from "./components/LoginAccount";
import CreateAccount from "./components/CreateAccount";
import Weekly from "./components/Weekly";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginAccount },
  { path: "/create", component: CreateAccount },
  { path: "/weekly", component: Weekly }
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
