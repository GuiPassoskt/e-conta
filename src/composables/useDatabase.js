import Localbase from 'localbase'

const db = new Localbase('e-conta')

const listar = async (collection) => await db.collection(collection).orderBy('name').get({ keys: true })

const buscar = async (collection, id) => await db.collection(collection).doc(id).get()

const adicionar = async (collection, payload) => await db.collection(collection).add({ ...payload })

const atualizar = async (collection, id, payload) => await db.collection(collection).doc(id).update({ ...payload })

const excluir = async (collection, id) => await db.collection(collection).doc(id).delete()

export default () => ({
  db,
  listar,
  buscar,
  adicionar,
  atualizar,
  excluir
})
