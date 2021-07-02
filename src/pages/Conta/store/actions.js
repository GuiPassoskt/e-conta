const collection = 'expense'

const setConta = async ({ commit }, obj) => {
  await window.$db.collection(collection).add(obj)
  commit('ADD_CONTA', obj)
}

const dropConta = async ({ commit }, obj) => {
  await window.$db.collection(collection).doc(obj.id).delete()
  commit('REMOVE_CONTA', obj)
}

export default {
  setConta,
  dropConta
}
