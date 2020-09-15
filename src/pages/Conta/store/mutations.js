import { addConta, removeConta } from '../../../persistence/localForage'

const ADD_CONTA = (state, obj) => {
  addConta(obj)
  state.list.push(obj)
}

const REMOVE_CONTA = (state, obj) => {
  removeConta(obj)
  const index = state.list.indexOf(obj)
  state.list.splice(index, 1)
}

export default {
  ADD_CONTA,
  REMOVE_CONTA
}
