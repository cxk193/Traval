import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        city:'曲靖'
    },
    mutations:{
        changeCity(state,payload){
            state.city = payload
        }
    },
    actions:{
        cityWhere(ctx,payload){
            store.commit('changeCity',payload)
        }
    }
})
export default store
