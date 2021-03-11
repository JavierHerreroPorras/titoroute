// Utilizaremos este módulo de Vuex para registrar todas las rutas que el usuario quiere comprar. 

const initialState = {
    cartRoutes: [],
};
/*
const mutations = {
  // UPDATE_CART_ITEMS (state, payload) {
  //   state.cartRoutes = payload;
  // }
  addCartItem({commit}, item){
    state.cartRoutes.push(item);
    state.routesNumber ++;
    console.log(state)
  },

}
*/
const actions = {
    // UPDATE_CART_ITEMS (state, payload) {
    //   state.cartRoutes = payload;
    // }
    addCartItem({ commit, state }, item){
      if (state.cartRoutes.find(element => element.Route._id === item.Route._id) === undefined){
        state.cartRoutes.push(item);
      }  
    },

    removeCartItem({commit, state}, id){
      let newCart = state.cartRoutes.filter(item => item.Route._id !== id);
      state.cartRoutes = newCart;
    },

    removeAllCartItems({commit, state}){
      state.cartRoutes = [];
    }
}
/*
const getters = {
    cartRoutes: state => state.cartRoutes,
    cartTotal: state => {

      // En esta parte quiero calcular el precio total del carrito (suma total de las rutas). 

      return state.cartRoutes.reduce((acc, cartItem) => {
        return cartItem.price + acc;
      }, 0).toFixed(2);

    },
    cartQuantity: state => {

      // En esta parte quiero calcular el total de rutas (para mostrarlas junto al carrito). 
      return state.cartRoutes.length;
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    }
  }*/

export const cartModule = {
    namespaced: true,
    state: initialState,
    actions,
    mutations: {},
    getters: {
      cartQuantity: state => {
        // En esta parte quiero calcular el total de rutas (para mostrarlas junto al carrito). 
        return state.cartRoutes.length;
      },
      cartRoutes: state => state.cartRoutes
    }
  }