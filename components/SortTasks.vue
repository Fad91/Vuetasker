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
  props: ["tasks"],

  data() {
    return {
      options: ["All", "High", "Low"],
      selectedPriority: "All",
    };
  },

  methods: {
    onChange() {
      this.$store.commit('changePriority', this.selectedPriority)
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
  border-color: brown;
}

option {
  font-size: 15px;
}
</style>
