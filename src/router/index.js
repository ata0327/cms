import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})