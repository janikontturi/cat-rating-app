<template>
    <div>
        <div class="header mb-3">
            Rate My Cat
        </div>
        <cat-ratings />
    </div>
</template>

<script>
  import CatRatings from '@/components/CatRatings.vue'
  export default {
    name: "CatRating",
    components: {
      CatRatings
    }
  }
</script>

<style scoped>

</style>
