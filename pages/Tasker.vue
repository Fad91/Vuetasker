<template>
  <div id="tasker">
    <h1 class="tasker-title">Tasker</h1>
    <hr class="decorate-stripe"/>
    <addTask />
    <sortTasks />
    <taskList />
    <router-link to="/form" class="link">
      <span>Go to form</span>
    </router-link>
  </div>
</template>

<script>
import TaskList from "../components/TaskList";
import addTask from "../components/AddTask";
import sortTasks from "../components/SortTasks";

export default {
  name: "Tasker",
  computed: {},
  methods: {},

  components: {
    TaskList,
    addTask,
    sortTasks,
  },
};
</script>

<style scoped>
#tasker {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6a7d91;
  width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(20, 153, 2, 0.3);
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px rgb(206, 205, 205);
}

@media (max-width: 1023px) {
  #tasker {
  width: 500px;
  };
}

@media (max-width: 767px) {
  #tasker {
  width: 320px;
  }
}

.tasker-title {
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
}

@media (max-width: 1023px) {
  .tasker-title {
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  }
}

.decorate-stripe {
  border-color: rgba(20, 153, 2, 0.2);
  margin: 20px 0;
}

.link {
  color: inherit;
  font-size: 25px;
  text-decoration: none;
  border: 1px solid rgba(20, 153, 2, 0.103);
  box-shadow: -3px -3px 6px -1px rgba(165, 165, 165, 0.164),
   5px 5px 5px -3px rgba(78, 78, 78, 0.164);
  padding: 10px;
  margin: 10px;
  display: inline-block;
  border-radius: 32px;
}
</style>
