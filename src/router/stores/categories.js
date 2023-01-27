import { defineStore } from 'pinia'
import axiosInstance from '../../../services/axios.js'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categoriesState: {},
    }),
    getters: {
        categories: (state) => state.categoriesState,
    },
    actions: {
        getCategories(params = {}, url = '/products/categories/') {
            axiosInstance.get(url, {
                params: {
                    limit: 10,
                    ...params
                }
            })
                .then(response => {
                    this.categoriesState = response.data;
                })
        }
    },
})

