<<<<<<< HEAD
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

window.api = api
=======
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

window.api = api
>>>>>>> bdbd256f0537ab4f582e1a1ff2f134a1c350e2d4
