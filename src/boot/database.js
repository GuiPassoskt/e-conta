import Vue from 'vue'
import Localbase from 'localbase'

const db = new Localbase('e-conta')

Vue.prototype.$db = db

export default {
  db
}
