<template>
  <div>
    <h3>Task List</h3>
    <ul v-if="$store.getters.sortTasksByPriority.length > 0">
      <taskItem
        v-for="(task, index) in $store.getters.sortTasksByPriority"
        :key="task.id"
        v-bind:index="index + 1"
        v-bind:task="task"
        
      />
    </ul>
    <p class = "no-tasks-content" v-else>Задач нет, приятель, добавь новую.</p>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {

 name: "taskList",

  computed: {
  },

  components: {
    TaskItem,
  },
  methods: {
  },
};

</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}

h3 {
  font-size: 25px;
}

.no-tasks-content {
  font-size: 25px;
}
</style>
