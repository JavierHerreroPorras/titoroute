/*
  Utilizamos este módulo para realizar las operaciones de autenticación y registro
  de los usuarios de nuestra aplicación. En este fichero se han declarado las funciones
  que se encargan específicamente de pedir los datos al servidor. 
*/

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/users/';

class AuthService {
  //Permite que el usuario pueda loguearse, mediante un método POST con su usuario
  // y contraseña. Posteriormente guardará el Token de JWT en el local storage del navegador. 
  login(user) {
    return axios
      .post(API_URL + 'logIn', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // Logout es el servicio relativo al cierre de sesión, el cual borra el token del local storage.
  logout(token) {

    const config = {
      headers: authHeader()
    }

    const data = {
      token: token
    }

    return axios
      .post(API_URL + 'me/logout', data, config)
      .then(localStorage.removeItem('user'));
  }

  // El registro toma el usuario, email y contraseña y los manda al servidor mediante un método POST. 
  register(user) {
    return axios.post(API_URL + 'signIn', {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      role: user.role,
      nif: user.nif,
      phone_number: user.phone_number
    });
  }

  async changePassword(password){
    
    const config = {
      headers: authHeader()
    }

    const data = {
      password: password
    }
    const response = await axios.put(API_URL + 'me/updatePassword', data, config);
    return response.data;
  }
}

export default new AuthService();