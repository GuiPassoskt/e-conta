import { defineStore } from 'pinia'

const collection = 'expense'

import useDatabase from '../../composables/useDatabase'

const { listar } = useDatabase()

export const contaStore = defineStore('conta', {
  state: () => {
    return {
      list: []
    }
  },
  actions: {
    async listConta () {
      const response = await listar(collection)
      this.list = response.map((expense) => {
        return {
          ...expense.data,
          id: expense.key
        }
      })
    },
    async getByCategoria (categoria) {
      const response = await listar(collection)
      const filtrados = response.filter(item => item.data.category === categoria)
      this.list = filtrados.map((expense) => {
        return {
          ...expense.data,
          id: expense.key
        }
      })
    },
    setConta (data) {
      this.list = data
    },
    addConta (data) {
      this.list.push(data)
    },
    dropConta (data) {
      const index = this.list.indexOf(data)
      this.list.splice(index, 1)
    }
  },
  getters: {
    leanList: state => state.list.map(item => item.name),

    totalList: state => {
      const array = state.list.map(item => parseFloat(item.amount) * item.quantity)
      if (array.length > 0) {
        const total = array.reduce((total, i) => total + i)
        return total.toFixed(2) || 0
      } else {
        return 0
      }
    },

    badgeCount: state => state.list.length
  }
})
