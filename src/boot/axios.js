import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

api.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch (error) {
    console.log(error)
  }
})

// const errors = [400, 401, 404, 500]

// api.interceptors.response.use(async (response) => {
//   try {
//     if (response.status === 200) {
//       return response
//     }
//     if (errors.includes(response.status)) {
//       throw Error
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
