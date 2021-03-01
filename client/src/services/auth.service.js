import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/users/';

class AuthService {
  //Permite que el usuario pueda loguearse, mediante un método POST con su usuario
  // y contraseña. Posteriormente guardará el Token de JWT en el local storage del navegador. 
  login(user) {
    return axios
      .post(API_URL + 'login', {
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
    return axios.post(API_URL, {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();