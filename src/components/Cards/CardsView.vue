<template>
  <h1 class="center">Products</h1>
  <v-text-field
      v-model="search"
      label="Search...."
  ></v-text-field>
  {{ search }}
  <v-container>
    <v-row justify="center">
      <v-progress-circular
          v-if="CardsView.length === 0"
          indeterminate
          color="primary"
      ></v-progress-circular>
      <v-col
          v-for="CardView in CardsView"
          :key="CardView.id"

      >
        <CardView
            :CardView="CardView"
            cols="4"
        />
      </v-col>
    </v-row>
  </v-container>
  <span>Total: {{ CardsViewCount }}</span>
</template>

<script>
import axios from "../../../services/axios";
import CardView from "@/components/Cards/CardView.vue";
export default {
  name: "CardsView",
  components: {
    CardView,
  },
  computed: {
    CardsViewCount() {
      return this.CardsView.length;
    }
  },
  data() {
    return {
      CardsView: [],
      search: null,
    }
  },
  mounted() {
    this.getCardsView();
  },
  methods: {
    getCardsView(params = {}) {
      axios.get('/products', {
        params: {
          limit: 10,
          ...params
        }
      })
          .then(response => {
            console.log(response.data)

            this.CardsView = response.data;
          })
    }
  }
}
</script>

<style scoped>
</style>