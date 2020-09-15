import { LocalStorage, uid } from 'quasar'

export function addStorage (name, item) {
  const data = LocalStorage.getItem(name) || []
  item.id = uid()
  data.push(item)
  LocalStorage.set(name, data)
}

export function getStorage (name) {
  return LocalStorage.getItem(name)
}

export function updateStorage () {

}

export function removeStorage () {

}

export function destroyStorage () {

}

window.addStorage = addStorage
window.getStorage = getStorage
window.updateStorage = updateStorage
window.removeStorage = removeStorage
window.destroyStorage = destroyStorage
