import { api } from '../boot/axios'

export default {
  create: (data) => {
    return api.post('products/new', data)
  }
}
