<template>
  <li>
    <p class="text-content">
      <strong>{{ index }}</strong>
      <span class="priority priority-high" v-if="task.priority === 'High'">{{
        task.priority
      }}</span>
      <span class="priority priority-low" v-else>{{ task.priority }}</span>
      <span class="hint visually-hidden"
        >Кликните на задачу для ее описания</span
      >
      <span :class="{ done: task.done }" @click="show = !show" :title="hint"
        >{{ task.title }}
      </span>
    </p>
    <div class="buttons">
      <button @click="setTaskDone">Done</button>
      <button @click="setTaskUndone">Undone</button>
      <button @click="removeTask">Delete</button>
    </div>
    <transition name="show">
      <div class="show-description" v-if="show">
        <textarea rows="10" placeholder="Опишите поподробнее вашу задачу">
        </textarea>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      hint: "Кликните для подробного описания вашей задачи",
    };
  },
  props: {
    task: {
      type: Object,
    },
    index: Number,
  },

  methods: {
    setTaskDone() {
      this.task.done = true;
    },

    setTaskUndone() {
      this.task.done = false;
    },

    removeTask() {
      this.$store.dispatch("removeTask", this.task.id);
    },

    showHint() {
      const hint = document.querySelector(".hint");
      hint.classList.toggle("visually-hidden");
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
}

.priority-high {
  color: brown;
}

.priority-low {
  color: green;
}

.buttons {
  display: flex;
}

button {
  background-color: brown;
  color: white;
  margin-right: 5px;
}

button:last-child {
  margin-right: 0;
}

.done {
  text-decoration: line-through;
}

.text-content {
  display: flex;
  flex-grow: 1;
  margin: 20px 20px;
}

strong,
span {
  margin-right: 20px;
}

.show-description {
  width: 100%;
  text-align: left;
  margin: 20px 50px;
  font-size: 25px;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.3s;
}

.show-enter, 
.show-leave-to {
  opacity: 0;
}

textarea {
  border-color: brown;
  font-size: 15px;
  width: 100%;
}
</style>
