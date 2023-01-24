<template>
  <header-app/>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
//import Products from "@/components/Products/ProductsList.vue";
import HeaderApp from "./HeaderApp.vue";
//import ModalCard from "@/components/Products/ModalCard.vue";

export default {
  name: 'App',
  components: {
   // Products,
    HeaderApp,
    //ModalCard,
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
