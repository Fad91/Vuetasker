<template>
  <div id="layout">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgb(224, 224, 224) 0%,
    rgb(240, 230, 230) 25%,
    rgb(240, 223, 223) 45%,
    rgb(224, 215, 215) 65%,
    rgb(211, 211, 211) 90%
  );
  padding: 30px 0;
  min-height: 100vh;
}
</style>