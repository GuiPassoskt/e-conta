const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Conta/Home.vue'), name: 'Home' },
      { path: '/:category', component: () => import('pages/Conta/Form.vue'), name: 'criar_conta' },
      { path: '/lista', component: () => import('pages/Conta/List.vue'), name: 'lista' },
      { path: '/editar/:id', component: () => import('pages/Conta/Form.vue'), name: 'editar' },
      { path: '/config', component: () => import('pages/Config/Update.vue'), name: 'config' }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
