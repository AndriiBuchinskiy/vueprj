<template>
  <v-app>
    <v-main>
      <HeaderApp/>
      <router-view v-slot="{Component} ">
        <keep-alive include="Products,Home,CheckoutForm">
          <component :is="Component" />
        </keep-alive>
      </router-view>
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
