import Vue from 'vue'
import Vuex from 'vuex'
import Conta from '../pages/Conta/store'
import Config from '../pages/Config/store'

Vue.use(Vuex)

const modules = {
  Conta,
  Config
}

export default new Vuex.Store({
  modules
})
