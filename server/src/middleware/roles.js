import User from '../models/user.model.js'

/*
    Este middleware se encarga de comprobar si el usuario tiene el rol necesario para
    acceder a ciertas rutas. El parámetro role puede tomar los valores 'User', 'Router'
    o vacío, que indica que ambos roles tienen acceso a la ruta. 
*/
function roles(role) {
    
    return function(req, res, next){
        //const token = req.header('Authorization').replace('Bearer ', '');
        //const data = jsonwebtoken.verify(token, process.env.JWT_KEY);
        let roles = [];
        if(role !== undefined){
            roles.push(role)
        }
        if(roles.length > 0 && !roles.includes(req.user.role)){
            // El usuario no estaría autorizado
            return res.status(401).json({ message: 'User not authorized'});
        }

        // El usuario se encontraría autorizado
        next();
    }
   

}
export default roles;