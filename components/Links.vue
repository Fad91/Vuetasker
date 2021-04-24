<template>
  <div class="nav">
    <nav class="nav-list">
      <router-link to="/tasker">Go to tasker</router-link>
      <router-link to="/form">Go to form</router-link>
      <router-link to="/cherry">Special for Cherry</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.nav {
  width: 100%;
}

.nav-list {
  width: 1000px;
  margin: 0 auto;
  border: 1px solid brown;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px 5px brown;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.nav-list a {
  font-size: 25px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #2c3e50;
  margin-right: 20px;
  font-weight: bold;
}
</style>
