<template>
  <v-app>
    <v-main>
      <CardsView/>
    </v-main>
  </v-app>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--    <cards/>-->
</template>

<script>
import CardsView from "@/components/Cards/CardView.vue";


export default {
  name: 'App',
  components: {
    CardsView,
  },
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