import { defineStore } from 'pinia'

export const configStore = defineStore('config', {
  state: () => {
    return {
      darkMode: false
    }
  },
  actions: {
    setDarkmode (data) {
      this.darkMode = data
    }
  },
  getters: {

  }
})
