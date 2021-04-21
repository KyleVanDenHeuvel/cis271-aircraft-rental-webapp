import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import LoginAccount from "./components/LoginAccount";
import CreateAccount from "./components/CreateAccount";
import Weekly from "./components/Weekly";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJq0ueVxCKc6y3zBbzd9-bJhxuTSntBAs',
  authDomain: 'cis371-aircraft-rental-webapp.firebaseapp.com',
  projectId: 'cis371-aircraft-rental-webapp',
  storageBucket: 'cis371-aircraft-rental-webapp.appspot.com',
  messagingSenderId: '759581800618',
  appId: '1:759581800618:web:749a7882ff731ad23cf8d3'
};

const app = firebase.initializeApp(firebaseConfig);

Vue.prototype.$appDB = firebase.firestore(app);
Vue.prototype.$appAuth = firebase.auth(app);

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
