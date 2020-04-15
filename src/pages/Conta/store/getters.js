const leanList = state => state.list.map(item => item.name)

const totalList = state => {
  const array = state.list.map(item => parseFloat(item.amount) * item.quantity)
  const total = array.reduce((total, i) => total + i)
  return total.toFixed(2) || 0
}

export default {
  leanList,
  totalList
}
