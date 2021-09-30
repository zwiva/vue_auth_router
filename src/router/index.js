import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requirelogin: false,
    },
  },
  {
    path: "/",
    meta: {
      requirelogin: false,
    },
    redirect: "/home"
  },
  {
    path: "/protected",
    name: "Protected",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Protected.vue"),
    meta: {
      requirelogin: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      requirelogin: false,
    },
  },
  {
    path: "*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
    meta: {
      requirelogin: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requirelogin)
    if (Store.state.currentUser) {
      next(); //siguiente
    } else {
      next("/login"); //arg opcional para que lleve para el login
    }
  else {
    next();
  }
});

export default router;
