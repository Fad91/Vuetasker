import Vue from "vue";
import Router from "vue-router";
import Form from "/pages/Form";
import Tasker from "/pages/Tasker";
import MainPage from "/pages/MainPage";
import Cherry from "/pages/Cherry"

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/tasker",
    component: Tasker,
  },
  {
    path: "/form",
    component: Form,
  },
  {
path: "/cherry",
component: Cherry
  }
];

export default new Router({
  mode: "history",
  routes,
});
