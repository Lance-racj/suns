import Vue from "vue";
import App from "./App.vue";
import Router from 'vue-router'
import routes from "./router";
import "@/tailwind.css";

Vue.config.productionTip = false;

const router = new Router({
  routes
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
