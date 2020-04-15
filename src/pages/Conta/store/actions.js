import { uid } from 'quasar'
import { getConta } from '../../../persistence/localForage'

const setConta = ({ commit }, obj) => {
  obj.id = uid()
  commit('ADD_CONTA', obj)
}

const dropConta = async ({ commit }, obj) => {
  commit('REMOVE_CONTA', obj)
  await getConta()
}

export default {
  setConta,
  dropConta
}
