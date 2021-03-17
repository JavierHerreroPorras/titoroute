/*
  Utilizamos este módulo para realizar las operaciones relacionadas con la búsqueda y filtrado de 
  rutas, recuperación de los detalles de una ruta seleccionada y sus correspondientes hoteles.
*/

import RouteService from '../services/route.service';

const initialState = { 
    success: false,
    routes: null,
    routesSearch: null,
    routeInfo: null,
    startDateRoute: new Date().toLocaleDateString(),
}

const actions = {
  // Obtenemos las rutas (página inicial (Routes.vue))
  async getRoutes({ commit }, country) {
    return RouteService.getAllRoutes(country).then(
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

  // Obtenemos los detalles de la ruta (RouteDetails.vue)
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

  // Guardamos el comentario de un usuario sobre una ruta (RouteComments.vue)
  async saveUserComment({ commit }, {user_comment, id}){
    return RouteService.sendUserComment(user_comment,id).then (
      RouteInfo => {
        commit('saveCommentSuccess', RouteInfo);
        return Promise.resolve(RouteInfo);
      },
      error => {
        commit('saveCommentFailure');
        return Promise.reject(error);
      })
  },

  // Obtenemos los hoteles asociados a la ruta seleccionada (RouteHotels.vue)
  async getRouteHotels({ commit, state }) {

    //Mediante estos pasos extraemos los ids de los hoteles de la ruta en forma de un array, para
    //realizar la consulta de los mismos
    const hotelsId = [...new Set(state.routeInfo.RouteDetails.route_timeline.map(a=> a.hotel_id))]

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
}

const mutations = {
  setRoutesSearch(state, routes){
    state.routesSearch = routes;
  },
  saveCommentSuccess(state, RouteInfo) {
    state.routeInfo.RouteDetails = RouteInfo.data;
  },
  saveCommentFailure(state){
    state.routeInfo = null;
  },
  getRouteHotelsSuccess(state, RouteHotels){
    state.routeInfo.hotels = RouteHotels.Hotels;
    
    // Obtenemos un map (clave = hotel_id, valor = noches) con las noches de cada hotel dentro de la ruta
    const nightsCalculate = state.routeInfo.RouteDetails.route_timeline.map(a => a.hotel_id).reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const nightsArray = new Map([...nightsCalculate.entries()]);

    // Guardamos el valor de cada noche en el hotel correspondiente
    state.routeInfo.hotels.forEach(element => {
      const nights = nightsArray.get(element._id);
      element.nights = nights;
    })
  },
  getRouteHotelsFailure(state){
    state.routeInfo.hotels = null;
  },
  getRoutesSuccess(state, routes) {
    state.success = true;
    state.routes = routes;
    state.routesSearch = routes;
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
    state.routeInfo.RouteDetails.adult ++;
  },
  decrementAdult(state){
    state.routeInfo.RouteDetails.adult --;
  },
  incrementChildren(state){
    state.routeInfo.RouteDetails.children ++;
  },
  decrementChildren(state){
    state.routeInfo.RouteDetails.children --;
  },
  incrementRooms(state){
    state.routeInfo.RouteDetails.rooms ++;
  },
  decrementRooms(state){
    state.routeInfo.RouteDetails.rooms --;
  },
}



export const route = {
  namespaced: true,
  state: initialState,
  actions: actions,
  // Permiten cambiar el valor del estado de la aplicación
  mutations: mutations
};