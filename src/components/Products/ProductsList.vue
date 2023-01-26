<template>
  <h1 class="center">Products</h1>
  <v-container>
    <v-row justify="center">
      <v-progress-circular
          v-if="products.length === 0"
          indeterminate
          color="primary"
      ></v-progress-circular>
      <v-col
          v-for="product in products"
          :key="product.id"
          cols="4"
      >
        <product :product="product">
          <template v-slot:delete-button="slotProps">
            <v-btn
                color="red"
                variant="text"
                @click="deleteItem(slotProps.item)"
            >
              Delete
            </v-btn>
          </template>
          <template v-slot:update-button="slotProps">
            <v-btn
                color="black"
                variant="text"
                @click="updateItem(slotProps.item)"
            >
              Update
            </v-btn>
          </template>
        </product>
      </v-col>
    </v-row>
  </v-container>
  <span>Total: {{ productsCount }}</span>
</template>

<script>
import Product from "@/components/Products/ProductCard.vue";
import { useProductsStore } from "@/router/stores/products";
import { mapActions, mapState ,mapWritableState} from 'pinia'
export default {
  name: "ProductsList",
  components: {
    Product,
  },
  data() {
    return {
      search: null,
    }
  },
  computed: {
    ...mapWritableState(useProductsStore, ['productsState']),
    ...mapState(useProductsStore, ['products']),
    productsCount() {
      return this.products.length;
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['getProducts']),
    deleteItem(id) {
      this.productsState = this.products.filter(product => product.id !== id);
    },
   updateItem()
   {

   },

  },
  mounted(){
    if(!this.products.length){
      this.getProducts();
    }
  },
}
</script>

<style scoped>
</style>