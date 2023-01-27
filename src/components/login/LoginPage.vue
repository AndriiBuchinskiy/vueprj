<template>
  <div class="text-center">
    <div class="form-signin">
      <form @submit.prevent="sendCredentials">
        <h1 class="h3 mb-3 fw-normal">Please Log in</h1>

        <div class="form-floating">
          <input type="text" v-model="username" class="form-control" id="floatingName" placeholder="name@example.com">
          <label for="floatingName">User Name</label>
          <small v-if="v$.username.$error">{{ v$.username.$errors[0].$message }}</small>
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
          <small v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</small>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit"> Login </button>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import {useAuthStore} from "/src/router/stores/auth.js";
import {mapState, mapActions} from "pinia";
import { required, minLength } from '@vuelidate/validators';
export default {
  name: "LoginPage",
  data() {
    return {
      v$: useValidate(),

        username: "johnd",
        password: "m38rmF$",

    };
  },
  computed: {
    ...mapState(useAuthStore, ["users"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["getUsers", "loginUser"]),
    sendCredentials() {
      this.v$.$validate();
      if (this.v$.$error) {
        alert('Login data incorrect');
        return;
      }
      const userData = {
        'username': this.username,
        'password': this.password,
      };
      if (this.username.length !== 0 && this.password.length !== 0) {
        this.loginUser(userData);
      }
      if (this.users === false) {
        alert('You are not a registered user');
        this.$router.push({ name: 'home' });
      }
      else
      {
        this.$router.push({name: 'products'});
      }
    }
  },
  mounted() {
    this.getUsers();
  },
  validations() {
    return {
      username: { required, minLength: minLength(3) },
      password: { required, minLength: minLength(3) }
    }
  }
}
</script>

<style scoped>
</style>