import {defineStore} from "pinia";
import {users} from "@/assets/users";

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
          this.usersState = users;
            //console.log(users);
        },
        loginUser(data) {
            this.usersState.forEach(element => {
                if (data.username === element.username && data.password === element.password) {
                    this.user = element

                    localStorage.setItem('user', JSON.stringify(element))
                }
            });
        },
        logout() {
            this.user = {};
            localStorage.removeItem('user')
        }
    }
})