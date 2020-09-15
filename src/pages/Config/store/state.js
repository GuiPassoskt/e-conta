import defaultTheme from '../../../themes/default-theme'

export default {
  theme: JSON.parse(localStorage.getItem('Config')) || defaultTheme
}
