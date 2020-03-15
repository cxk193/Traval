import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
   city:'北京'
  },
  mutations: {
    changeState(state,payload){
      state.city = payload
    }
  },
  actions: {
    handelCity(ctx,payload){
      ctx.commit('changeState',payload)
    }
  },
  modules: {
  }
})
export default store
