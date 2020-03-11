<template>
    <div>
        <div class="rating-buttons">
            <button class="cat-button btn bg-red-500 text-white font-bold p-2 mr-3" :disabled="imageLoading" @click="notLiked()">Noope</button>
            <button class="cat-button btn bg-green-500 text-white font-bold p-2" :disabled="imageLoading" @click="liked()">Cool!</button>
        </div>
        <div class="my-5">
            <div v-if="this.likedCats.length > 0">
                Olet arvioinut yhteensä {{rateCount}} kissakuvaa, joista {{likedCats.length}} on ollut sellaisia joista olet pitänyt.
            </div>
            <div v-else>
                Et ole arvioinut vielä yhtään kissakuvaa.
            </div>
        </div>
        <div class="cat-pics">
            <div v-if="loading">
                <p class="italic">Ladataan kissakuvaa...</p>
            </div>
            <div v-else class="flex justify-center">
                <img :src="this.cat.url" alt="cat-image" class="cat-image">
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "CatRatings",
    data() {
      return {
        cat: null,
        rateCount: 0,
        loading: true,
        imageLoading: false
      }
    },
    created () {
      this.getCat()
    },
    computed: {
      likedCats () {
        return this.$store.getters['GET_LIKED_CATS']
      }
    },
    methods: {
      getCat () {
        this.loading = true;
        axios.defaults.headers.common['x-api-key'] = '574f7140-45cb-40bb-98ac-e6f8ea43fc3f';
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" } } )
          .then(response => {
            this.cat = response.data[0];
            this.loading = false
        })
      },
      liked () {
        this.rateCount ++;
        this.$store.dispatch('ADD_CAT', this.cat);
        this.getCat();
      },
      notLiked () {
        this.rateCount ++;
        this.getCat();
      }
    }
  }
</script>

<style scoped>
    .cat-button {
        width: 80px;
    }
    .cat-image {
        max-width: 40%;
    }
</style>
