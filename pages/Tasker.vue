<template>
  <div id="tasker">
    <h1>Tasker</h1>
    <hr />
    <addTask />
    <sortTasks />
    <taskList />
    <router-link to="/form">Go to form</router-link>
  </div>
  
</template>

<script>
import TaskList from "../components/TaskList";
import addTask from "../components/AddTask";
import sortTasks from "../components/SortTasks";

export default {
  name: "Tasker",
  computed: {
  },
  methods: {
  },

components: {
    TaskList,
    addTask,
    sortTasks,
  }
}
</script>

<style scoped>
#tasker {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  margin: 20px auto;
  border: 1px solid brown;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px 5px brown;
}

hr {
  background-color: brown;
}
</style>