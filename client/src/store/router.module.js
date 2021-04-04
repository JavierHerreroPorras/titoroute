/*

*/

import RouterService from '../services/router.service';

const initialState = { 
    newHotel: {
        "name": null,
        "description": null,
        "imageURL": [],
        "stars": null,
        "address": null,
        "single_price": null,
        "double_price": null,
        "triple_price": null,
        "booking_link": null
    },
    hotels: null,
    newRoute: {
        "averageScore": 0,
        "name": "",
        "router_id": "",
        "router_name": "",
        "country": "España",
        "description": "",
        "imageURL": "",
        "duration": 0,
        "people": 0,
        "price": 0,
        "route_timeline": [],
        "route_comments": [],
        "route_map_URL": "",
        "rooms": 1
    },
    hotels_search: null,
    donations: null
}

const initialActions = {
    async sendNewHotel({commit, state}){
        return RouterService.saveNewHotel(state.newHotel).then(
            HotelInfo => {
                console.log(HotelInfo)
            }
        )
    },

    async getHotels({commit, state}){
        return RouterService.getAllHotels()
            .then(
                Hotels => {
                    commit('getHotelsSuccess',Hotels);
                    return Promise.resolve(Hotels);
                },
                error => {
                    commit('getHotelsFailure');
                    return Promise.reject(error);
                }
            )
    },

    async sendNewRoute({commit, state}){
        return RouterService.saveNewRoute(state.newRoute)
        .then(
            RouteInfo => {
                return Promise.resolve(RouteInfo.RouteStored._id);
            },
            error => {
                return Promise.reject(error);
            }
        )
    },

    async getDonations({commit}, id){
        return RouterService.getDonations(id)
            .then(
                Donations => {
                    commit('getDonationsSuccess',Donations);
                    return Promise.resolve()
                },
                error => {
                    commit('getDonationsFailure')
                    return Promise.reject(error);
                }
            )
    }
}

const initialMutations = {
    getDonationsSuccess(state,DonationsInfo){
        state.donations = DonationsInfo.donations;
    },
    getDonationsFailure(state){
        state.donations = null;
    },
    getHotelsSuccess(state, hotels){
        state.hotels = hotels;
        state.hotels_search = hotels;
    },
    getHotelsFailure(state){
        state.hotels = null;
    },
    setHotelsSearch(state, hotels){
        state.hotels_search = hotels;
      },
}

export const router = {
    namespaced: true,
    state: initialState,
    actions: initialActions,
    mutations: initialMutations
}