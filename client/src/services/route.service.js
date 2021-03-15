/*
  Utilizamos este módulo para realizar las operaciones relacionadas con la búsqueda y filtrado de 
  rutas, recuperación de los detalles de una ruta seleccionada y sus correspondientes hoteles. En este fichero se han declarado las funciones
  que se encargan específicamente de pedir los datos al servidor. 
*/

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/route/';
const API_URL_HOTELS = 'http://localhost:8080/api/hotels'

class RouteService {
   // Realiza una llamada al servidor para obtener las rutas en la pantalla de inicio
   async getAllRoutes(){
        return axios
            .get(API_URL)
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
   async getRouteHotels(hotelIds){
      return axios
         .get(API_URL_HOTELS, {params: { array: hotelIds} })
         .then(response =>{
            return response.data
         })
   } 

   // Se encarga de actualizar los comentarios de la ruta cuando un usuario introduce
   // un nuevo comentario sobre la misma.
   async sendUserComment(user_comment, id){
       return axios
         .post(API_URL + id + '/comment', user_comment)
         .then(response => {
            return response.data
         })
   }
}

export default new RouteService();