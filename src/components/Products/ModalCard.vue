<template>
  <vue-final-modal v-model="showModal">
    <span class="modal__title">Hello, vue-final-modal</span>
  </vue-final-modal>
  <vue-final-modal v-model="showModal" >
    <span class="modal__title">Update Product</span>
    <v-btn class="modal__close" @click="showModal = false">Close
    </v-btn>
    <form class="modal-content" @submit.prevent="handleSubmit" >
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
        <v-select
            id="category"
            v-model="product.category"
            label="Select"
            :items="categories"
        ></v-select>
      </div>
      <div class="address__field">
        <label for="price">Price </label>
        <input type="number" id="price" v-model="product.price" required />
      </div>
      <button type="submit">Submit</button>
    </form>


  </vue-final-modal>
</template>


<script>
import { VueFinalModal } from 'vue-final-modal'
export default {
  components: {
    VueFinalModal,
  }
}
</script>

<style scoped>
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>



