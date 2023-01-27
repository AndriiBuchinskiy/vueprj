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


      <v-spacer></v-spacer>
      <modals-container></modals-container>
        <v-btn
            :icon="show ='mdi-chevron-up' "
            @click="showModal"
        >Update</v-btn>

      <slot name="delete-button" :item="product.id"></slot>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
        <v-card-text>
          {{ product.price }}$
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

</template>

<script>

import { ModalsContainer } from 'vue-final-modal'
export default {
  name: "ProductCard",
  components:{
    ModalsContainer,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showModal() {
      this.show = true;
    },
  }


}
</script>

<style scoped>
.red {
  color: red;
}
</style>