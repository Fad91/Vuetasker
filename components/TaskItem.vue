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
    <div class="task-buttons">
      <button @click="setTaskDone">Done</button>
      <button @click="setTaskUndone">Undone</button>
      <button @click="removeTask">Delete</button>
    </div>
    <transition name="show">
      <div class="show-description" v-if="show">
        <textarea rows="10" placeholder="Опишите поподробнее вашу задачу" v-model="description">
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
      description: ''
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
  box-shadow: 2px 2px 5px 3px rgba(20, 153, 2, 0.096);;
  border-radius: 32px;
}

.priority-high {
  color: #6a7d91;
 text-shadow:2px 1px 1px rgba(85, 85, 85, 0.253);
}

.priority-low {
  color:  #999a9b;
}

.task-buttons {
  display: flex;
  margin: 0;
}

button {
  font-weight: bold;
  background-color: rgba(235, 252, 233, 0.3);
  border: none;
  color: #6a7d91;
  margin-right: 10px;
  box-shadow: 2px 2px 5px 1px rgba(143, 142, 142, 0.212),
  -1px 0 1px 2px rgba(143, 142, 142, 0.1);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 0;
}

button:active {
  box-shadow: none;
  border: 1px solid rgba(158, 158, 158, 0.3);
}

button:last-child {
  margin-right: 0;
  margin-bottom:0;
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
