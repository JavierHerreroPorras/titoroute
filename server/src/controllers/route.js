// Importamos el modelo de datos de la ruta turística creado con mongoose
import Route from '../models/route.model.js';
import routeDetails from '../models/routeDetails.model.js';

const routeCtrl = {

    getRouteDetails(req, res){
        const routeId = req.params.routeId;
    
        Route.findById(routeId, (err, Route) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
            if(!Route) return res.status(404).send({message: `La ruta no existe`});
            
            routeDetails.findOne({route_id: routeId }, (err, RouteDetails) => {
                if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
                if(!RouteDetails) return res.status(404).send({Route, message: `Los detalles de la ruta no existen`});
    
                res.status(200).send({ Route, RouteDetails });
            })
        });
    },

    saveUserComment(req,res){

        // En esta parte actualizamos los comentarios con el introducido por el usuario en la 
        // parte del cliente

        routeDetails.findOneAndUpdate(
            {"route_id":req.params.routeId},
            {"$push": {"route_comments": req.body}},
            {new: true, safe: true, upsert: true })
                .then((result) => {

                    // Aquí calcularemos todas las medias y actualizamos la ruta de acuerdo a los comentarios
                    // actualizados

                    let total_1=0,total_2=0,total_3=0,total_4=0,total_ruta=0;
                    result.route_comments.forEach(element => {
                        total_1+=element.a1_score;
                        total_2+=element.a2_score;
                        total_3+=element.a3_score;
                        total_4+=element.a4_score;
                        total_ruta+=element.route_score;
                    });

                    Route.findOneAndUpdate(
                        {"_id":req.params.routeId},
                        {"$set":
                            {"averageScore":(total_ruta/result.route_comments.length).toFixed(1),
                            "averageAspect1": (total_1/result.route_comments.length).toFixed(1),
                            "averageAspect2": (total_2/result.route_comments.length).toFixed(1),
                            "averageAspect3": (total_3/result.route_comments.length).toFixed(1),
                            "averageAspect4": (total_4/result.route_comments.length).toFixed(1)
                            }
                        },
                        {new: true, safe: true, upsert: true })
                            .then( () => {
                                return res.status(201).json({
                                    status: "Success",
                                    message: "Resources Are Created Successfully",
                                    data: result
                                })
                            }).catch((error) => {
                                return res.status(500).json({
                                    status: "Failed",
                                    message: "Database Error",
                                    data: error
                                });
                            })
            }).catch((error) => {
                    return res.status(500).json({
                        status: "Failed",
                        message: "Database Error",
                        data: error
                    });
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
    
        /*console.log('POST /api/Route');
        console.log(req.body);*/
    
        // Creamos una instancia del producto
        let routeId;
        let route = new Route();
        route.name = req.body.name;
        route.description = req.body.description;
        route.imageURL = req.body.imageURL;
        route.duration = req.body.duration;
        route.people = req.body.people;
        route.price = req.body.price;
        route.country = req.body.country;


         route.save((err, RouteStored) => {
             if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `});
             routeId = RouteStored._id;

             //Una vez se ha guardado la ruta, procedemos a crear y guardar sus detalles, con el id de la ruta ya guardada
             let route_details = new routeDetails();
             route_details.route_timeline = req.body.route_timeline;
             route_details.route_id = routeId;
             route_details.route_map_URL = req.body.route_map_URL;
             route_details.route_hotels = req.body.route_hotels;
             route_details.adult = req.body.adult;
             route_details.children = req.body.children;
             route_details.rooms = req.body.rooms;

             route_details.route_comments = req.body.route_comments;

             route_details.save((err, RouteDetailsStored) => {
                 if (err) res.status(500).send({message: `Error al guardar los detalles en la base de datos: ${err} `});
                 res.status(200).send({ RouteStored, RouteDetailsStored});
             });
         });

         
    }    
}

export default routeCtrl;