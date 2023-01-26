import {defineStore} from "pinia";
import axiosInstance from '/services/axios.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        usersState: {},
        user: {},
    }),
    getters: {
        users: (state) => state.usersState,
    },
    actions: {
        getUsers() {
            axiosInstance.get('/users')
                .then((respopnse) => {
                    this.usersState = respopnse.data
                })
        },
        loginUser() {
            // axiosInstance.post('/auth/login', {
            //     body: data
            // }).then((respons) => {
            //     console.log(respons);
            // })
            console.log(this.usersState);
            this.user = this.usersState.users.find(user => user.id === 5);
        },
        logout() {
            this.user = {};
        }
    }
})