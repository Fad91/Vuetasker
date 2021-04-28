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
  background-image: linear-gradient(to bottom, white 10%,rgb(192, 175, 175) 30%, grey 55%, black 90%);
  padding: 30px 0;
}

</style>