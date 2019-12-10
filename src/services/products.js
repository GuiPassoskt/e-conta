import { api } from './api'

export default {
  create: (data) => {
    return api.post('products/new', data)
  }
}
