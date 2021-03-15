/* 
La aplicación manejará:
  - auth: El rol (router o usuario base) y los datos del propio usuario
  - route: Las rutas disponible, sus detalles y una pequeña personalización de la misma
*/

import { createStore } from 'vuex'
import { auth } from './auth.module';
import { route } from './route.module';

export default createStore({
  modules: {
    auth,
    route,
  }
})
