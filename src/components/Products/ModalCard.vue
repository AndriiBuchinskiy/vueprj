<template>
  <div class="dialog" v-if="show" >
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>

  <form @submit.prevent>
    <h4>Create post</h4>
    <input
        v-bind:value="product.title"
        @input="product.title = $event.target.value"
        class ="input"
        type="text"
        placeholder="Title"
    >
    <input
        v-bind:value="product.description"
        @input="product.description = $event.target.value"
        class ="input"
        type="text"
        placeholder="Description"
    >
    <button
      class="btn"
      @click="createCard "
      >Create
    </button>
  </form>

</template>

<script>
import Product from "@/components/Products/ProductCard.vue";

export default {
  name: "ModalCard",
  props: {
    Product,
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      product:{
        id:'',
       title:'',
       description:''
      }
    }
  },
  methods: {
    /*CreateCard() {
      const newCard = {
        id: this.product.id,
        title: this.product.title,
        description: this.product.description,
      }
      this.product.push(newCard);
      localStorage.setItem("products", JSON.stringify(this.product));
    }

     */
  },

  UpdateCard() {

  }
}
</script>


<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>