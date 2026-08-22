import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import GetExpression from "../views/GetExpression.vue";

import Happy from "../views/Happy.vue";
import Angry from "../views/Angry.vue";
import Sad from "../views/Sad.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/get-expression",
    component: GetExpression,
  },
  {
    path: "/happy",
    component: Happy,
  },
  {
    path: "/angry",
    component: Angry,
  },
  {
    path: "/sad",
    component: Sad,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
