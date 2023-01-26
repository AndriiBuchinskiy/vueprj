<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      Category: {{ product.category }}
    </v-card-subtitle>

    <v-card-actions>

      <slot name="update-button" :item="product.id"></slot>
      <v-spacer></v-spacer>

      <v-btn
          :icon="show ='mdi-chevron-up' "
          @click="show "
             >More</v-btn>
      <slot name="delete-button" :item="product.id"></slot>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
     moveTo(id) {
       this.$router.push({
         name: 'single-products',
         params: {
           id: id,
         },
       })
     },
   },


}
</script>

<style scoped>
.red {
  color: red;
}
</style>