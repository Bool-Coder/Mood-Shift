import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import GetExpression from "../views/GetExpression.vue";

import Happy from "../views/Happy.vue";
import Angry from "../views/Angry.vue";
import Sad from "../views/Sad.vue";
import Neutral from "../views/Neutral.vue";
import About from "../views/About.vue";
import breathExercise from "../views/breathExercise.vue";
import ExpressInWords from "../views/ExpressInWords.vue";

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
  {
    path: "/neutral",
    component: Neutral,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/breath",
    component: breathExercise,
  },
  {
    path: "/express-in-words",
    component: ExpressInWords,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
