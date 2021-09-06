import Vue from "vue";
import Router from "vue-router";
import Form from "/pages/Form";
import Tasker from "/pages/Tasker";
import MainPage from "/pages/MainPage";
import Cherry from "/pages/Cherry";
import Tictactoe from "/pages/TicTacToe";
import AudioMessages from "/pages/AudioMessages";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: MainPage,
    meta: { layout: "tasker" },
  },
  {
    path: "/tasker",
    component: Tasker,
    meta: { layout: "tasker" },
  },
  {
    path: "/form",
    component: Form,
    meta: { layout: "form" },
  },
  {
    path: "/cherry",
    component: Cherry,
    meta: { layout: "form" }
  },
  {
    path: "/tictactoe",
    component: Tictactoe,
    meta: { layout: "form" }
  },
  {
    path: "/audio",
    component: AudioMessages,
    meta: { layout: "tasker" }
  }
];

export default new Router({
  mode: "history",
  routes,
});
