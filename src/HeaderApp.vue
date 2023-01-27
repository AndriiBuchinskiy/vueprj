<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Navigation Bar</v-toolbar-title>
      <div v-if="user">
        <span>{{user.username}}</span>
      </div>
      <div>
        <router-link to="/home" @click="logout"  type="button" class="btn btn-success">Logout</router-link>
      </div>
      <template v-slot:extension>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/home"  >Home </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Login </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Products">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/create">Create Products</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
import {useAuthStore} from "@/router/stores/auth";
import {mapState, mapActions} from "pinia";
export default {
  name: 'HeaderApp',
  data () {
    return {
      tab: null,
      links: [
        {
          route: '/',
          label: 'Home',
        },
        {
          route: '/products',
          label: 'Products',

        },
        {
          route: '/some',
          label: 'Some Page',

        },
        {
          route: '/create',
          label: 'Create Product',

        },
        {
          route: '/login',
          label: 'Login',

        },
      ],
    }
  },
  computed: {
    ...mapState(useAuthStore, ["user"])
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    moveTo(name) {
      this.$router.push({
        name: name
      })
      console.log(this.$router);
    }
  },
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
.active {
  color: #42b983;
}
</style>