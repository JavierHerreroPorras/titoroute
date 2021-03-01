import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

// Definimos una clase para acceder a los datos (algunos metodos no se utilizarán)
// La cabecera es el resultado de la función de auth-header
class UserService {
  getPublicContent() {
    //return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    //return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    //return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    //return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();