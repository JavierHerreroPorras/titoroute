/*
  Utilizamos este módulo para realizar las operaciones relacionadas con la búsqueda y filtrado de 
  rutas, recuperación de los detalles de una ruta seleccionada y sus correspondientes hoteles. En este fichero se han declarado las funciones
  que se encargan específicamente de pedir los datos al servidor. 
*/

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/route/';
const API_URL_HOTELS = 'http://localhost:8080/api/hotels/'
const API_URL_USERS = 'http://localhost:8080/api/users/'
const API_URL_DONATIONS = 'http://localhost:8080/api/donation'

class RouteService {
   // Realiza una llamada al servidor para obtener las rutas en la pantalla de inicio
   async getAllRoutes(country){
        return axios
            .get(API_URL, {params: {country: country}})
            .then(response => {
               return response.data.Routes;
             });
   }

   // Obtiene los detalles de una ruta (necesitaremos el id que la identifica)
   async getRouteDetails(id){
       return axios
          .get(API_URL + id)
          .then(response => {
             return response.data
          })
   }

   // Obtiene los hoteles asociados a una ruta (necesitamos el id que los identifica)
   async getRouteHotels(hotelIds, routeId){
      return axios
         .get(API_URL + routeId + '/hotels', {params: { array: hotelIds} })
         .then(response =>{
            return response.data
         })
   } 

   // Se encarga de actualizar los comentarios de la ruta cuando un usuario introduce
   // un nuevo comentario sobre la misma.
   async sendUserComment(user_comment, id){
      const config = {
         headers: authHeader()
      }
      
      return axios
      .post(API_URL + id + '/comment', user_comment, config)
      .then(response => {
         return response.data
      })
   }
   
   async getUserRoutes(id){
      return axios
         .get(API_URL_USERS + id + '/routes')
         .then(response =>{
            return response.data
      })
   }

   async sendDonation(donation){
      const config = {
         headers: authHeader()
      }

      const data = {
         donation: donation
      }

      return axios
         .post(API_URL_DONATIONS, data, config)
         .then(response => {
            return response.data
      })
   }
}

export default new RouteService();