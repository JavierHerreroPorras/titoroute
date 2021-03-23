import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // Utilizaremos carga diferida o lazy loading, es decir, los datos y métodos asociados
    // a los componentes se cargan cuando se utilizan, mejorando el tiempo de respuesta de la
    // aplicación y por tanto la experiencia de usuario.
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/rutas',
    name: 'Rutas',
    component: () => import('../views/Routes.vue'),
  },
  {
    path: '/rutas/:id',
    name: 'Ruta',
    component: () => import('../views/Route.vue'),
    redirect: {
      name: 'planning'
    },
    // Aquí definimos las subrutas relacionadas a la ruta seleccionada en la página principal
    children: [
      {
        alias: '',
        path: 'planning',
        name: 'planning',
        component: () => import('../views/RoutePlanning.vue'),
      },
      {
        alias: '',
        path: 'detalles',
        name: 'detalles',
        component: () => import('../views/RouteDetails.vue'),
      },
      {
        path: 'router',
        name: 'router',
        component: () => import('../views/RouteRouter.vue'),
      },
      {
        path: 'hoteles',
        name: 'hoteles',
        component: () => import('../views/RouteHotels.vue'),
      },
      {
        path: 'comentarios',
        name: 'comentarios',
        component: () => import('../views/RouteComments.vue'),
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
    component: () => import('../views/Profile.vue')
  },
  // Ruta que capturará aquellas entradas no válidas (se debe declarar al final)
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  { 
    path: '/createRoute',
    name: 'createRoute',
    component: () => import('../views/RouterCreateRoute.vue')
  },
  {
    path: '/frequentQuestions',
    name: 'frequentQuestions',
    component: () => import('../views/FrequentQuestions.vue')
  }
]

const router = createRouter({
  // Utilizaremos el modo HTML5 (no utiliza # en las URL)
  history: createWebHistory(),
  routes
})

// En este apartado establecemos las rutas que son públicas (y por tanto un usuario no logueado puede acceder)
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/frequentQuestions'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // Si no está logueado se redirige a la pestaña de inicio de sesión
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
