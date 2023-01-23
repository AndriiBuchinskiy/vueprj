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

      <v-btn onclick="" class="btn btn-primary" aria-current="page" data-toggle="modal" data-target="#update-modal">Update
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn
          :icon="show ='mdi-chevron-up' "
          @click="show "
      >More</v-btn>
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
    product: [],
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>