import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/rutas',
    name: 'Rutas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Routes.vue'),
  },
  {
    path: '/rutas/:id',
    name: 'Ruta',
    component: () => import('../views/Route.vue'),
    redirect: {
      name: 'detalles'
    },
    children: [
      {
        alias: '',
        path: 'detalles',
        name: 'detalles',
        component: () => import('../components/RouteDetails.vue'),
      },
      {
        path: 'mapa',
        name: 'mapa',
        component: () => import('../components/RouteMap.vue'),
      },
      {
        path: 'hoteles',
        name: 'hoteles',
        component: () => import('../components/RouteHotels.vue'),
      },
      {
        path: 'comentarios',
        name: 'comentarios',
        component: () => import('../components/RouteComments.vue'),
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded: Solamente se cargan cuando se necesitan, haciendo que la aplicación sea más rápida y ligera, lo que mejora la experiencia de usuario
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// En este apartado establecemos las rutas que son públicas (y por tanto un usuario no logueado puede acceder)
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/',];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
