import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/route';

class RouteService {
   getAllRoutes(){
        return axios
            .get(API_URL)
            .then(response => {
               return response.data.Routes;
             });
   } 
}

export default new RouteService();