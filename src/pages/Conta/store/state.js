import { getConta } from '../../../persistence/localForage'

export default {
  list: getConta() || []
}
