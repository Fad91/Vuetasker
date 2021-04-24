<template>
  <div id="tasker">
    <h1>Tasker</h1>
    <hr />
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
  color: #2c3e50;
  width: 800px;
  margin: 0 auto;
  border: 1px solid brown;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px 5px brown;
}

hr {
  background-color: brown;
}

.link {
  color: #2c3e50;
  font-size: 25px;
  text-decoration: none;
  border: 1px solid brown;
  padding: 2px;
  margin: 10px;
  display: inline-block;
}
</style>
