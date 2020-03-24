<template>
  <div class="container w-25 text-center" id="app">
    <img src="./assets/logo.png">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input v-model="user.username" type="username" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="user.passoword" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button @click="login" class="btn btn-primary">Submit</button>
</form>
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
</style>
