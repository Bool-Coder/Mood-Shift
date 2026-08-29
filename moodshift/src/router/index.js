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

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";

import { getCurrentUser } from "../services/auth";

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
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
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

  {
    path: "/login",
    component: Login,
    meta: {
      guestOnly: true,
    },
  },

  {
    path: "/register",
    component: Register,
    meta: {
      guestOnly: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const user = await getCurrentUser();

  if (to.meta.requiresAuth && !user) {
    return "/login";
  }

  if (to.meta.guestOnly && user) {
    return "/dashboard";
  }
});

export default router;
