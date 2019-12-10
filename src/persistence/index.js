import storage from 'localforage'

export function addConta (expense) {
  storage.setItem(expense.id, expense)
}

export function removeConta (expense) {
  storage.removeItem(expense.id)
}

export function getConta () {
  let list = []
  storage.keys().then(keys => {
    keys.forEach(key => {
      storage.getItem(key).then(value => list.push(value))
    })
  })
  return list
}
