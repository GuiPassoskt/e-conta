import { uid } from 'quasar'

export function addStorage (name, item) {
  let db = JSON.parse(window.localStorage.getItem(name)) || []
  item.id = uid()
  db.push(item)
  window.localStorage.setItem(name, JSON.stringify(db))
}

export function getStorage (name) {
  return window.localStorage.getItem(name)
}

export function updateStorage (name, id, item) {
  const db = JSON.parse(window.localStorage.getItem(name))
  if (db.length === 0) return
  let rewrite = db.filter(item => item.id === id)
  rewrite[0] = item
  window.localStorage.setItem(name, JSON.stringify(rewrite))
}

export function removeStorage (name, id) {
  const db = JSON.parse(window.localStorage.getItem(name))
  if (db.length === 0) return
  const rewrite = db.filter(item => item.id !== id)
  window.localStorage.setItem(name, JSON.stringify(rewrite))
}

window.removeStorage = removeStorage
window.updateStorage = updateStorage
