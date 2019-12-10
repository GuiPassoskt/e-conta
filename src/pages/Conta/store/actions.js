import { addConta } from '../../../persistence/'
import { uid } from 'quasar'

const setConta = ({ commit }, obj) => {
  const cloned = JSON.parse(JSON.stringify(obj))
  cloned.id = uid()
  addConta(cloned)
  commit('ADD_CONTA', obj)
}

const dropConta = ({ commit }, obj) => {
  commit('REMOVE_CONTA', obj)
}

export default {
  setConta,
  dropConta
}
