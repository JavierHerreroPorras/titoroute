import { createStore } from 'vuex'
import { auth } from './auth.module';
import { route } from './route.module';

/* 
La aplicación manejará:
  - state: El rol y el usuario
  - actions: Iniciar sesión, cerrar sesión y registrarse
  - mutations: Inicio exitoso, con error, cierre de sesión y registro exitoso/fallido
*/

export default createStore({
  modules: {
    auth,
    route
  }
})
