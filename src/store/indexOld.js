import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import Conta from '../pages/Conta/store'
import Config from '../pages/Config/store'

const modules = {
  Conta,
  Config
}

export default store((/* { ssrContext } */) => {
  const store = createStore({
    modules
  })

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  return store
})
