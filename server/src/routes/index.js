/*
    Para crear diferentes rutas en el servidor utilizamos express.Router, el cual nos permite manejar
    todas las rutas del servidor de una forma modular. Una instancia de Router es un middleware, ya que nos 
    permite llamar a funciones de controladores asociadas con cada ruta. 
*/

import express from 'express';

const api = express.Router();

// Importamos los controladores, middlewares y modelos que contienen las funciones asociadas a cada ruta
import userCtrl from '../controllers/user.js';
import routeCtrl from '../controllers/route.js';

import auth from '../middleware/auth.js';


// Rutas correspondientes a los usuarios (creación, inicio de sesión, ver perfil y cerrar sesión)
api.post('/users/signIn', userCtrl.signIn);

api.post('/users/logIn', userCtrl.logIn);

api.get('/users/me', auth, userCtrl.profile);

api.get('/users', userCtrl.getUsers);

api.post('/users/me/logout', auth, userCtrl.logout);


// Rutas correspondientes a las rutas turísticas
api.get('/route', routeCtrl.getRoutes);

api.get('/route/:routeId', routeCtrl.getRouteDetails);

api.post('/route', routeCtrl.saveRoute);

export default api;