import Vue from "vue";
import Router from "vue-router";
import vueAutoRouting from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

const RouterLayout = createRouterLayout(layout => {
  return import(`@/layouts/${layout}.vue`);
});

Vue.use(Router);

const generateRoutes = [
  {
    path: '/',
    component: RouterLayout,
    children: vueAutoRouting
  }
];

export default generateRoutes;
