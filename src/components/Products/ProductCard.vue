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

      <v-spacer>

      </v-spacer>
      <v-btn @click="showModal = true">Open Modal</v-btn>
      <slot name="delete-button" :item="product.id"></slot>
       </v-card-actions>

        <v-divider>
        </v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
        <v-card-text>
          {{ product.price }}$
        </v-card-text>
  </v-card>

  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">

    <span class="modal__title">Update card</span>
    <div class="modal__content">
      <form @submit.prevent="handleSubmit" class="checkout-form">
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
         <multiselect v-model="value" :options="category"  placeholder="Pick a value"></multiselect>
        </div>

        <div class="address__field">
          <label for="price">Price </label>
          <input type="number" id="price" v-model="product.price" required />
        </div>
     </form>
    </div>
    <div class="modal__action">
      <v-btn @click="showModal = false">confirm</v-btn>
      <v-btn @click="showModal = false">cancel</v-btn>
    </div>
  </vue-final-modal>
</template>

<script>

import Multiselect from '@vueform/multiselect';
import {mapActions, mapState} from "pinia";
import {useProductsStore} from "@/router/stores/products";
import {useCategoriesStore} from "@/router/stores/categories";
import {id} from "vuetify/locale";

export default {
  name: "ProductCard",
  components: Multiselect,
  props: {
    product: Object,
  },
  data() {
    return {
      value:'',
      showModal: false,
        category: [],
    }
  },
  computed: {
    id() {
      return id
    },
    ...mapState(useProductsStore, ['products']),
    ...mapState(useCategoriesStore, ['categories']),
  },
  methods: {
    ...mapActions(useProductsStore, ['saveProducts']),
    ...mapActions(useCategoriesStore, ['getCategories']),
    handleSubmit() {
      this.saveProducts(this.product)
    }
  }
}
</script>

<style scoped>
.update-form {
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

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>

