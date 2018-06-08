
export default [
  { // Request Arts Routes
    path: '/arts',
    redirect: 'arts/home',
    component: () => import('layouts/request'),
    children: [
      { path: 'home', name: 'Home', component: () => import('pages/request/main') },
      { path: 'japao', name: 'Japão', component: () => import('pages/request/japao') },
      { path: 'sign-in', name: 'signIn', component: () => import('pages/auth/sign-in') },
      { path: 'brasil', name: 'Brasil', component: () => import('pages/request/brasil') },
      { path: 'europa', name: 'Europa', component: () => import('pages/request/europa') },
      { path: 'register', name: 'Register', component: () => import('pages/auth/register') },
      { path: 'florida', name: 'Flórida', component: () => import('pages/request/florida') },
      { path: 'artRequest', name: 'Pedidos de artes', component: () => import('pages/request/artRequest') }
    ]
  },
  { // Main Routes
    path: '/',
    component: () => import('layouts/default'),
    meta: { authRequired: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/index')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
