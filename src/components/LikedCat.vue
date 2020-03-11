<template>
    <div class="flex justify-center">
        <div v-if="cats.length > 0">
            <img v-for="cat in cats" :src="cat.url" alt="cat-image" class="cat-image mb-2">
        </div>
        <div v-else>
            Et ole tykännyt yhdestäkään kissakuvasta :(
        </div>
    </div>
</template>

<script>
  export default {
    name: "LikedCats",
    props: {
      cats: {
        type: Array
      }
    }
  }
</script>

<style scoped>
    .cat-image {
        max-height: 200px;
    }
</style>
