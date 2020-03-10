<template>
  <div>
    <div class="flex justify-center">
        <img src="../assets/logo.png" alt="vue-course">
    </div>
    <div>
      <p class="text-2xl">Ambienta Vue.js Course</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
