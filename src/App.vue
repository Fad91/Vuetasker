<template>
  <div id="app">
    <component :is='layout'>
    <MainPage/>
    </component>
  </div>
</template>

<script>
import MainPage from "../pages/MainPage"
import Taskerlayout from "../layouts/Taskerlayout"
import Formlayout from "../layouts/Formlayout"

export default {
  name: "App",
  methods: {
  },

  components: {
    MainPage, Taskerlayout, Formlayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout + "layout";
    }
  } 
};
</script>

<style scoped>
  #app {
 
  width: 100%;
  height: 100%;
 
} 

/* hr {
  background-color: brown;
}  */
</style>
