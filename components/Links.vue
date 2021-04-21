<template>
  <div class="nav">
    <router-link to="/tasker">Go to tasker</router-link>
    <router-link to="/form">Go to form</router-link>
    <router-link to="/cherry">Special for Cherry</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.nav {
  width: 1000px;
  margin: 0 auto;
  height: 200px;
}
</style>
