<template>
    <div id="formlayout">
      <router-view></router-view>  
    </div>
</template>


<style scoped>

#formlayout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom,rgb(53, 53, 53) 10%,rgb(34, 31, 31) 30%, rgb(46, 44, 44) 55%, rgb(17, 12, 12) 90%);
  padding: 30px 0;
}

</style>