// Importamos el modelo de datos de la ruta turística creado con mongoose
import Hotel from '../models/hotel.model.js';

const hotelCtrl = {

    getRouteHotels(req, res){

        //Aqui utilizamos req.query (que contiene los parámetros que pasamos a través de la URL después de ?) 
        //en vez de req.params (que contiene los parámetros de la ruta)
        let items = req.query.array
        //let items = JSON.parse(req.query.array);
 
        // El operador $in permite seleccionar aquellos documentos de la colección cuyo valor esté
        // en el array. 

        /*
        603fbf5f390c111d46a4dc6d
        603fbf6a390c111d46a4dc6e
        603fbf6e390c111d46a4dc6f
        603fbf71390c111d46a4dc70
        */

        Hotel.find({_id: {$in: items}}, (err, Hotels) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
            if(!Hotels) return res.status(404).send({message: `No existen hoteles`});
    
            res.status(200).send({Hotels});
        });
    },
    
    saveHotel(req, res){
        // Creamos una instancia del hotel
        let hotel = new Hotel();
        hotel.name = req.body.name;
        hotel.description = req.body.description;
        hotel.imageURL = req.body.imageURL;
        hotel.stars = req.body.stars;
        hotel.address = req.body.address;
        hotel.nights = req.body.nights;
        hotel.single_price = req.body.single_price;
        hotel.double_price = req.body.double_price;
        hotel.triple_price = req.body.triple_price;
        hotel.link = req.body.link;

         hotel.save((err, HotelStored) => {
             if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `});
             res.status(200).send({ HotelStored });
         });

         
    }    
}

export default hotelCtrl;