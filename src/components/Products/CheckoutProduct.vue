<template>
  <div>
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <h1>Create Product</h1>
      <div class="address__field">
        <label for="title">Title </label>
        <input type="text" id="title" v-model="product.title" required />
      </div>
      <div class="address__field">
        <label for="description">Description </label>
        <input type="text" id="description" v-model="product.description" required />
      </div>
      <div class="address__field">
        <label for="category">Category </label>
        <input type="text" id="category" v-model="product.category" required />
      </div>
      <div class="address__field">
        <label for="price">Price </label>
        <input type="text" id="price" v-model="product.price" required />
      </div>
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>




import {useProductsStore} from "@/router/stores/products";
import { mapActions,mapState} from 'pinia'

export default {
  name: "CheckoutForm",
  data() {
    return {
      product: {
        title: "",
        description: "",
        category: "",
        price: "",
      }
    }
  },
  computed: {
    ...mapState(useProductsStore, ['products']),
  },
  methods: {
    ...mapActions(useProductsStore, ['saveProducts']),
    handleSubmit() {
      this.saveProducts(this.product)
      console.log(this.products)
    },
  },
}
</script>

<style scoped >
.app {
  font-family: Arial, Helvetica, sans-serif;
  color: #434141;
  text-align: center;
}
.checkout-form {
  margin: 5px auto;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.address__field {
  padding-bottom: 10px;
  width: 250px;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
}

input {
  padding: 10px;
  width: 230px;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #f8edcf;
}

button {
  margin-top: 30px;
  padding: 10px;
  width: 250px;
  color: #f8edcf;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #434141;
}
</style>