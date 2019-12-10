export const convert = {
  filters: {
    percent (value, base, toFixed = 2) {
      if (base === 0) return 100
      return ((value / base) * 100).toFixed(toFixed)
    },
        
    monetize (value) {
      if (!value) return '0,00'
      value = parseFloat(value).toFixed(2)
      value = value.toString()
      return value.replace('.', ',')
    },
        
    is_data (value) {
      if (!value) return ''
      return value ? new Date(value).toLocaleDateString() : null
    },

    repl_data (value) {
      if (!value) return ''
      return value.replace('-', '/').replace('-', '/')
    }
  }
}
