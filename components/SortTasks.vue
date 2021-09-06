<template>
  <div>
    <label for="sort">Sort your tasks by</label>
    <select id="sort" v-model="selectedPriority" @change="onChange">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>

export default {

  data() {
    return {
      options: ["All", "High", "Low"],
      selectedPriority: "All",
    };
  },

  methods: {
    onChange() {
      this.$store.commit('CHANGE_PRIORITY', this.selectedPriority)
    },
  },
  computed: {
  },
};
</script>

<style scoped>
div {
  font-size: 25px;
}

label {
  font-weight: bold;
  margin-right: 20px;
}

select {
  font-size: 20px;
  width: 70px;
  height: 40px;
  border-color: rgba(20, 153, 2, 0.1);
  border-radius: 10px;
  box-shadow: -2px 2px 5px 2px rgba(202, 202, 202, 0.075),2px -2px 8px 1px rgba(112, 112, 112, 0.075);
  color: #6a7d91;
}

option {
  font-size: 15px;
}
</style>
