import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/route/';

class RouteService {
   async getAllRoutes(){
        return axios
            .get(API_URL)
            .then(response => {
               return response.data.Routes;
             });
   }
   async getRouteDetails(id){
       return axios
          .get(API_URL + id)
          .then(response => {
             return response.data
          })
   } 
}

export default new RouteService();