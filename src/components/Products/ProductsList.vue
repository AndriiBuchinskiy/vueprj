<template>
  <div>
  <h1 class="center">Products</h1>
    <v-select
        v-model="category"
        label="Select"
        :items="categories"
    ></v-select>

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
        </product>
      </v-col>
    </v-row>
  </v-container>

  <span>Total: {{ productsCount }}</span>
  </div>
</template>

<script>
import Product from "@/components/Products/ProductCard.vue";
import { useProductsStore } from "@/router/stores/products";
import { mapActions, mapState ,mapWritableState} from 'pinia';
import {useCategoriesStore} from "@/router/stores/categories";


export default {
  name: "ProductsList",
  components: {
    Product,

  },
  data() {
    return {
      search: null,
      category: null,
      filters: {
        category: [],
      }
    }
  },
  computed: {
    ...mapState(useCategoriesStore, ['categories']),
    ...mapWritableState(useProductsStore, ['productsState']),
    ...mapState(useProductsStore, ['products']),
    productsCount() {
      return this.products.length;
    }
  },
  watch: {
    category(newValue) {
      this.getProducts({}, `/products/category/${newValue}`);
    },
  },

  methods: {
    ...mapActions(useCategoriesStore, ['getCategories']),
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
    this.getCategories();


  },
}
</script>

<style scoped>
</style>