import { defineStore } from 'pinia'
import axiosInstance from '/services/axios.js'

export const useProductsStore = defineStore('products', {
    state: () => ({
        productsState: {},
        productState: {},
    }),
    getters: {
        products: (state) => state.productsState,
        product: (state) => state.productState,
    },
    actions: {
        getProducts(params = {},query = 'products') {
            axiosInstance.get(query, {
                params: {
                    limit: 10,
                    ...params
                }
            })
                .then(response => {
                    this.productsState = response.data.products;
                })
        },
        saveProducts(product) {
            this.productsState.push(product);
        }

    },
})