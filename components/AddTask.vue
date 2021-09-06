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
        <b-radio
        type="is-success"
          name="priority"
          id="High"
          native-value="High"
          size="is-small"
          v-model="priority"
        />
      </label>
      <label for="low">Low
        <b-radio
        type="is-success"
          name="priority"
          id="Low"
          native-value="Low"
          size="is-small"
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
  border: 2px solid rgba(20, 153, 2, 0.2);
  border-radius: 10px;
  box-shadow: 1px 3px 6px -1px rgb(219, 218, 218);
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
  background-color: rgba(255, 255, 255, 0.205);
  color: #6a7d91;
  border-color: rgba(20, 153, 2, 0.2);
  box-shadow: 11px 11px 8px -10px rgb(221, 220, 220),
  -2px -2px 3px -1px rgb(230, 230, 230);
}

button:active {
  box-shadow: none;
  border: 1px solid rgba(110, 110, 110, 0.3);
}
</style>
