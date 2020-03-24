<template>
  <div class="container h-100 d-flex flex-column justify-content-center align-items-center w-25 text-center" id="app">
    <img src="./assets/logo.png">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input v-model="user.username" type="username" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button @click="login" class="btn ">Submit</button>
</form>
  <span class="error">{{this.$store.state.error.message}}</span>
  <p class="tip">Username is <strong>admin</strong> and password is <strong>123123</strong></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('login', {username: this.$data.user.username, password: this.$data.user.password})
      if (this.$store.state.isLogged) {
        this.$router.push('/secret')
      }
    }
  }
}
</script>

<style>
.error{
  color: #f34040;
}
.tip {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}
body {
  background: #7CB89D;
  font-family: 'Baloo Thambi 2', cursive;
  height: 100vh;
}
.btn {
  background: #41B883;
}
</style>
