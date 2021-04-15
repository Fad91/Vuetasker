<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      class="text-input"
      placeholder="Enter your task here"
      v-model="title"
    />
    <fieldset>
      <legend>Priority </legend>
      <label for="high">High
        <input
          type="radio"
          name="priority"
          id="High"
          value="High"
          v-model="priority"
        />
      </label>
      <label for="low">Low
        <input
          type="radio"
          name="priority"
          id="Low"
          value="Low"
          v-model="priority"
        />
      </label>
    </fieldset>
    <button type="submit">Add Task</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      title: "",
      priority: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          done: false,
          priority: this.priority,
        };
        this.$store.dispatch('addTask', newTask);
        (this.title = "");
      }
    },
  },
};
</script>

<style scoped>
.text-input {
  width: 500px;
  height: 40px;
  margin: 20px auto;
  font-size: inherit;
  border: 2px solid brown;
  border-radius: 10px;
}

fieldset {
  border: none;
}

legend {
  font-weight: bold;
  font-size: 25px;
}

label {
  margin-right: 20px;
  margin-left: 20px;
}

button {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  margin: 20px 0;
  font-size: inherit;
  background-color: brown;
  color: white;
  border: none;
}
</style>
