/*
  Utilizamos este módulo para realizar las operaciones de autenticación y registro
  de los usuarios de nuestra aplicación
*/

import AuthService from '../services/auth.service';

// Buscamos el usuario en el local storage. El valor de initial state dependerá de si 
// se ha encontrado el usuario o no.

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  status: {
    loggedIn: false
  },
  userRoutes: null};

const actions = {
  // Realizamos la acción de inicio de sesión, la cual puede ser exitosa
  // y ejecutará la mutation logginSuccess o fallida (loginFailure). 
  login({ commit }, user) {
    return AuthService.login(user).then(
      user => {
        commit('loginSuccess', user);
        // Devuelve una promesa con el valor usuario
        return Promise.resolve(user);
      },
      error => {
        commit('loginFailure');
        // Devuelve una promesa que se rechaza por el parametro error
        return Promise.reject(error);
      }
    );
  },

  // El usuario cierra sesión (El token se borra de su array de tokens)
  logout({ commit }, user) {
    AuthService.logout(user.token);
    commit('logout');
    return Promise.resolve();
  },

  // Se registra un nuevo usuario
  register({ commit }, user) {
    return AuthService.register(user).then(
      response => {
        commit('registerSuccess');
        return Promise.resolve(response.data);
      },
      error => {
        commit('registerFailure');
        return Promise.reject(error);
      }
    );
  }
}

const mutations = {
  loginSuccess(state, user) {
    state.status.loggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
  registerSuccess(state) {
    state.status.loggedIn = false;
  },
  registerFailure(state) {
    state.status.loggedIn = false;
  }
}


export const auth = {
  namespaced: true,
  state: initialState,
  actions: actions,
  // Permiten cambiar el valor del estado de la aplicación
  mutations: mutations
};