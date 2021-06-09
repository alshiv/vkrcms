import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
