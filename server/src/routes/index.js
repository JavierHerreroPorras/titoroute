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
import hotelCtrl from '../controllers/hotel.js';

import auth from '../middleware/auth.js';
import roles from '../middleware/roles.js';
import Roles from '../helpers/role.js';


// Rutas correspondientes a los usuarios (creación, inicio de sesión, ver perfil y cerrar sesión)
api.post('/users/signIn', userCtrl.signIn);

api.post('/users/logIn', userCtrl.logIn);

api.get('/users/me', auth, roles(), userCtrl.profile);

api.get('/users', userCtrl.getUsers);

api.post('/users/me/logout', auth, userCtrl.logout);


// Rutas correspondientes a las rutas turísticas
api.get('/route', routeCtrl.getRoutes);

api.get('/route/:routeId', routeCtrl.getRouteDetails);

api.post('/route/:routeId/comment', routeCtrl.saveUserComment);

api.post('/route', routeCtrl.saveRoute);


// Rutas correspondientes a los hoteles
api.get('/hotels', hotelCtrl.getRouteHotels);

api.post('/hotel', hotelCtrl.saveHotel);


export default api;