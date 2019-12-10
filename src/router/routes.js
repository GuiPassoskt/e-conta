
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Conta/Index.vue'), name: 'criar_conta' },
      { path: '/lista', component: () => import('pages/Conta/ListaConta.vue'), name: 'lista' },
      { path: '/config', component: () => import('pages/Config/Update.vue'), name: 'config' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
