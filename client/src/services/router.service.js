/*

*/

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/hotel/';
const API_URL_ROUTE = 'http://localhost:8080/api/route/';
const API_URL_DONATIONS = 'http://localhost:8080/api/donation'

class RouterService {

    async saveNewHotel(hotel){
        
        const config = {
            headers: authHeader()
        }

        const data = {
            hotel: hotel
        }

        return axios
            .post(API_URL, data, config)
            .then (response => {
                return response.data
            });
    }

    async getAllHotels(){
        const config = {
            headers: authHeader()
        }

        const data = {
        }

        return axios
            .get(API_URL, data, config)
            .then(response => {
                return response.data.Hotels
            })
    }

    async saveNewRoute(route) {
        const config = {
            headers: authHeader()
        }

        const data = {
            route: route
        }

        return axios
            .post(API_URL_ROUTE, data, config)
            .then (response => {
                return response.data
            });    
    }

    async getDonations(id){
        const config = {
            headers: authHeader(),
            params: {
                router_id: id
            }
        }

        return axios
            .get(API_URL_DONATIONS, config, {params: { router_id: id}})
            .then(response => {
                return response.data
            }) 
    }
}

export default new RouterService();