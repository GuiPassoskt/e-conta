const currency = (value) => {
  if (!value) return '0,00'
  value = parseFloat(value).toFixed(2)
  value = value.toString()
  return 'R$ ' + value.replace('.', ',')
}

const percent = (value, base, toFixed = 2) => {
  if (base === 0) return 100
  return ((value / base) * 100).toFixed(toFixed)
}

const monetize = (value) => {
  if (!value) return '0,00'
  value = parseFloat(value).toFixed(2)
  value = value.toString()
  return value.replace('.', ',')
}

const isData = (value) => {
  if (!value) return ''
  return value ? new Date(value).toLocaleDateString() : null
}

const replData = (value) => {
  if (!value) return ''
  return value.replace('-', '/').replace('-', '/')
}

export default () => ({
  currency,
  percent,
  monetize,
  isData,
  replData
})
