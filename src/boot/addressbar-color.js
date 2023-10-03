import { boot } from 'quasar/wrappers'
import { AddressbarColor } from 'quasar'

const addressbarColor = AddressbarColor.set('#021354')

export default boot(({ app }) => {
  app.config.globalProperties.$addressbarColor = addressbarColor
})

export { addressbarColor }
