<template>
    <liked-cat :cats="ratedCats" />
</template>

<script>
  import LikedCat from "../components/LikedCat";

  export default {
    name: "RatedCats",
    components: { LikedCat },
    computed: {
      ratedCats () {
        return this.$store.getters['GET_RATED_CATS']
      }
    },
  }
</script>

<style scoped>

</style>
