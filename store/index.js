import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, priority: "High", title: "Купить хлеб", done: true },
      { id: 2, priority: "Low", title: "Шлифануть кофейку", done: false },
      { id: 3, priority: "High", title: "Заточить пиццу", done: false },
    ],
    priority: "All",
  },

  actions: {
    addTask(context, payload) {
      context.commit('ADD_TASK', payload);
    },
    removeTask(context, payload) {
      context.commit('REMOVE_TASK', payload)
    }
  },

  mutations: {
    ADD_TASK(state, payload) {
      state.tasks.push(payload);
    },
    REMOVE_TASK(state, id) {
      state.tasks = state.tasks.filter(function(task) {
        return task.id !== id;
      });
    },
    CHANGE_PRIORITY(state, priority) {
      state.priority = priority;
    },
  },

  getters: {
    sortTasksByPriority: (state) => {
      if (state.priority === "All") {
        return state.tasks;
      }
      return state.tasks.filter((task) => task.priority === state.priority);
    },
  },
});
