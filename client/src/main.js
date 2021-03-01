import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faCircle,
  faDotCircle,
  faStar,
  faStarHalfAlt,
  faThumbsUp,
  faThumbsDown,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

import {faStar as faRegularStar} from '@fortawesome/free-regular-svg-icons'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCircle,faDotCircle, faStar,faStarHalfAlt, faRegularStar, faThumbsUp, faThumbsDown, faExclamationTriangle);

const app = createApp(App)
app.use(store).use(router).use(VueAxios, axios);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


/*
Componentes y librerias utilizados en el proyecto:
  - vue-router proporciona las herramientas necesarias para asignar los componentes de una aplicación a diferentes rutas de URL del navegador.
  - vuex nos permite gestionar el estado de la aplicación. 
  - vee validate es un plugin que nos permite validar formularios de manera sencilla. 
  - axios es una librería Javascript que facilita las solicitudes HTTP. 
  - fontawesome se utiliza para utilizar avatares. 
*/