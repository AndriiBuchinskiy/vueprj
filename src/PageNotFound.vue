<template>
  <div>
    Page Not Found / 404
    <div>
      <v-btn stacked @click="goTo">
        Back Home
      </v-btn>
    </div>
  </div>
</template>

<script>
//import Products from "@/components/Products/ProductsList.vue";
//import HeaderApp from "@/HeaderApp.vue";
export default {
  name: 'PageNotFound',
  methods: {
    goTo() {
      this.$router.push({
        name: 'products',
      })
    },
  }
}
</script>