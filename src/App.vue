<template>
  <header-app/>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>

import HeaderApp from "./HeaderApp.vue";


export default {
  name: 'App',
  components: {
    HeaderApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
