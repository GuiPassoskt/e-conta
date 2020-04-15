export function addStorage (name, item) {
  let db = JSON.parse(window.localStorage.getItem(name)) || []
  db.push(item)
  window.localStorage.setItem(name, JSON.stringify(db))
}

export function getStorage (name) {
  return JSON.parse(window.localStorage.getItem(name)) || []
}

export function updateStorage (name, id, item) {
  const db = JSON.parse(window.localStorage.getItem(name))
  if (db.length === 0) return
  let rewrite = db.filter(item => item.id === id)
  rewrite[0] = item
  window.localStorage.setItem(name, JSON.stringify(rewrite))
}

export function removeStorage (name, item) {
  let db = []
  db.push(item)
  window.localStorage.setItem(name, JSON.stringify(db))
}

window.addStorage = addStorage
window.getStorage = getStorage
window.removeStorage = removeStorage
window.updateStorage = updateStorage
