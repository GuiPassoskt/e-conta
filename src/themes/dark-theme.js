export function theme (config) {
  localStorage.setItem('Config', JSON.stringify({
    dark: config,
    q_app: config ? '#292b4d' : '#edf3f8',
    header: {
      background: config ? '#292b4d' : '#edf3f8',
      borderBottom: config ? '1px solid blueviolet' : 'none',
      color: config ? '#fff' : '#000'
    },
    card: {
      background: `${config ? '#343665' : '#fff'} !important`,
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      color: config ? '#fff' : '#000',
      icons: config ? '#16cbda' : 'red'
    },
    bottomNav: {
      background: config ? '#343665' : '#fff',
      icons: '#16cbda',
      main: config ? 'cyan' : 'accent'
    }
  }))
  return JSON.parse(localStorage.getItem('Config'))
}
