import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ratedCats: []
  },
  mutations: {
    addCat (state, payload) {
      state.ratedCats.push(payload)
    }
  },
  actions: {
    ADD_CAT (context, payload) {
      context.commit('addCat', payload)
    }
  },
  getters: {
    GET_RATED_CATS: state => state.ratedCats
  },
  modules: {
  }
})
