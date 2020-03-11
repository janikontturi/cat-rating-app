import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    likedCats: []
  },
  mutations: {
    addCat (state, payload) {
      state.likedCats.push(payload)
    }
  },
  actions: {
    ADD_CAT (context, payload) {
      context.commit('addCat', payload)
    }
  },
  getters: {
    GET_LIKED_CATS: state => state.likedCats
  },
  modules: {
  }
})
