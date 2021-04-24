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
  background-image: linear-gradient(to bottom,white 10%,rgb(192, 175, 175) 30%, rgb(134, 106, 106) 55%, rgb(56, 30, 30) 90%);
  padding: 30px 0;
}

</style>