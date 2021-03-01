import RouteService from '../services/route.service';

// Utilizamos este módulo para realizar las operaciones relacionadas con la búsqueda y filtrado de 
// rutas
const initialState = { 
    success: false,
    routes: null,
    startDateRoute: new Date().toLocaleDateString(),
    adult: 0,
    children: 0,
    rooms: 0
}

export const route = {
  namespaced: true,
  state: initialState,
  actions: {
    getRoutes({ commit }) {
      return RouteService.getAllRoutes().then(
        Routes => {
          commit('getRoutesSuccess', Routes);
          // Devuelve una promesa con las rutas
          return Promise.resolve(Routes);
        },
        error => {
          commit('getRoutesFailure');
          // Devuelve una promesa que se rechaza por el parametro error
          return Promise.reject(error);
        }
      );
    },
    
  },
  // Permiten cambiar el valor del estado de la aplicación
  mutations: {
    getRoutesSuccess(state, routes) {
      state.success = true;
      state.routes = routes;
    },
    getRoutesFailure(state) {
      state.sucess = false;
      state.routes = null;
    },
    incrementAdult(state){
      state.adult ++;
    },
    decrementAdult(state){
      state.adult --;
    },
    incrementChildren(state){
      state.children ++;
    },
    decrementChildren(state){
      state.children --;
    },
    incrementRooms(state){
      state.rooms ++;
    },
    decrementRooms(state){
      state.rooms --;
    },
  }
};