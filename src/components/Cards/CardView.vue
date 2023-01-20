<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-card-title>
      {{ CardView.title }}
    </v-card-title>

    <v-card-subtitle>
      Category: {{ CardView.category }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
      >
        Explore
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn
          :icon="show  = 'mdi-chevron-up'"
          @click="show"
      >More</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ CardView.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import CardsView from "@/components/Cards/CardsView.vue";

export default {
  name: "CardList",
  computed: {
    CardsView() {
      return CardsView
    }
  },
  props: {
    CardView:{
      type: Object,
    },
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