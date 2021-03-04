import RouteService from '../services/route.service';

// Utilizamos este módulo para realizar las operaciones relacionadas con la búsqueda y filtrado de 
// rutas
const initialState = { 
    success: false,
    routes: null,
    routeInfo: null,
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
    getRouteDetails({ commit },id) {
      return RouteService.getRouteDetails(id).then (
        RouteInfo => {
          commit('getDetailsSuccess',RouteInfo);
          return Promise.resolve(RouteInfo);
        },
        error => {
          commit('getDetailsFailure');
          return Promise.reject(error);
        }
      )
    },
    getRouteHotels({ commit, state }) {

      //Mediante estos pasos extraemos los ids de los hoteles de la ruta en forma de un array, para
      //realizar la consulta de los mismos
      const hotels = state.routeInfo.RouteDetails.route_hotels;
      let hotelsId = hotels.map(a => a.hotel_id)

      return RouteService.getRouteHotels(hotelsId).then (
        RouteHotels => {
          commit('getRouteHotelsSuccess',RouteHotels);
          return Promise.resolve(RouteHotels);
        },
        error => {
          commit('getRouteHotelsFailure');
          return Promise.reject(error);
        }
      )
    }
    
  },
  // Permiten cambiar el valor del estado de la aplicación
  mutations: {
    getRouteHotelsSuccess(state, RouteHotels){
      state.routeInfo.hotels = RouteHotels.Hotels;
    },
    getRouteHotelsFailure(state){
      state.routeInfo.hotels = null;
    },
    getRoutesSuccess(state, routes) {
      state.success = true;
      state.routes = routes;
    },
    getRoutesFailure(state) {
      state.sucess = false;
      state.routes = null;
    },
    getDetailsSuccess(state, RouteInfo) {
      state.routeInfo = RouteInfo;
    },
    getDetailsFailure(state) {
      state.routeInfo = null;
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