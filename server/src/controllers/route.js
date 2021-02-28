// Importamos el modelo de datos de la ruta turística creado con mongoose
import Route from '../models/route.model.js';

const routeCtrl = {

    getRoute(req, res){
        const routeId = req.params.routeId;
    
        Route.findById(routeId, (err, Route) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
            if(!Route) return res.status(404).send({message: `La ruta no existe`});
      
            res.status(200).send({ Route });
        });
    },
    
    getRoutes(req, res){
        Route.find({}, (err, Routes) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
            if(!Routes) return res.status(404).send({message: `No existen rutas`});
    
            res.status(200).send({Routes});
        });
    },
    
    saveRoute(req, res){
    
        console.log('POST /api/Route');
        console.log(req.body);
    
        // Creamos una instancia del producto
        let route = new Route();
        route.name = req.body.name;
        route.description = req.body.description;
        route.imageURL = req.body.imageURL;
        route.duration = req.body.duration;
        route.people = req.body.people;
        route.price = req.body.price;
      
        route.save((err, RouteStored) => {
            if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `});
    
            res.status(200).send({product: RouteStored});
        });
    }    
}

export default routeCtrl;