import AuthService from '../services/auth.service';

// Utilizamos este módulo para realizar las operaciones de autenticación y registro

// Buscamos el usuario en el local storage. El valor de initial state dependerá de si 
// se ha encontrado el usuario o no.
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
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
    logout({ commit }, user) {
      AuthService.logout(user.token);
      commit('logout');
      return Promise.resolve();
    },
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
  },
  // Permiten cambiar el valor del estado de la aplicación
  mutations: {
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
};