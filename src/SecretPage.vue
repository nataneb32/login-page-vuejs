<template>
  <div class="container-fluid flex-column justify-content-center d-flex h-100 text-center">
      <h1>Secret</h1>
      Don't tell anyone. {{this.$store.state.username}}
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  width: 100vw;
  height: 100vh;
  font-family: 'Baloo Thambi 2', cursive;
}
body {
  background: #7CB89D;
}
</style>
