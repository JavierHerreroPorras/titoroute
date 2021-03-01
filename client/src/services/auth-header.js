// Referido al Header de Autorización necesario para trabajar en el servidor. 
// Busca en Local Storage por el item de usuario. Si existe y tiene un token de acceso,
// devuelve la cabecera de autorización
//(INVESTIGAR MÁS)
export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }