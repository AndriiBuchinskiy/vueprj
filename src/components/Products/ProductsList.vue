<template>
  <h1 class="center">Products</h1>
  <ModalCard v-model:show="dialogVisible"/>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <button class="nav-link active" @click="showDialog " aria-current="page" data-toggle="modal" data-target="#create-modal">Create card</button>
        </div>
      </div>
    </div>
  </nav>
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
        <product
            :product="product"
            cols="4"
        />
      </v-col>
    </v-row>
  </v-container>
  <span>Total: {{ productsCount }}</span>
</template>

<script>
import Product from "@/components/Products/ProductCard.vue";
import ModalCard from "@/components/Products/ModalCard.vue";
import axios from "../../../services/axios";
export default {
  name: "ProductsList",
  components: {
    Product,
    ModalCard,
  },
  computed: {
    productsCount() {
      return this.products.length;
    }
  },
  data() {
    return {
      products: [],
      dialogVisible:false
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts(params = {}) {
      axios.get('/products', {
        params: {
          limit: 50,
          ...params
        }
      })
          .then(response => {
            localStorage.setItem("products",JSON.stringify(response.data.products));
            this.products = JSON.parse(localStorage.getItem('products')) || [];
          })
    },
    showDialog(){
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
</style>