import Vue from 'vue'
import Vuex from 'vuex'
import Conta from '../pages/Conta/store'

Vue.use(Vuex)

const modules = {
  Conta
}

export default new Vuex.Store({
  modules
})
