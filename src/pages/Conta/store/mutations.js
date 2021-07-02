const ADD_CONTA = (state, obj) => {
  state.list.push(obj)
}

const REMOVE_CONTA = (state, obj) => {
  const index = state.list.indexOf(obj)
  state.list.splice(index, 1)
}

export default {
  ADD_CONTA,
  REMOVE_CONTA
}
