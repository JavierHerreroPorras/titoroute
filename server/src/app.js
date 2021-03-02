import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './routes/index.js';

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}



const app = express();

/* 
    La librería body-parser permite facilitar el acceso al contenido de peticiones HTTP. Ambos métodos
    trabajan como middlewares (que se procesan antes de mandar la respuesta a la aplicación) y se utilizan
    con peticiones de tipo POST y PUT. La función es procesar la información que se envía con las peticiones:
        - Por un lado bodyParser.json reconoce el cuerpo de la petición como un objeto en JSON
        - Por otro lado bodyParser.urlencoded permite reconocer el cuerpo de la petición como cadenas o arrays

    Fuente: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
*/

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

/* 
    CORS (Cross Origin Resource Sharing) es un mecanismo para controlar las peticiones HTTP asíncronas que 
    se pueden realizar desde un navegador a un servidor con un dominio diferente de la página cargada originalmente. 
    Por defecto algunos navegadores no permiten recursos diferentes en dominios diferentes al de la página actual. 
    
    Fuente: https://lenguajejs.com/javascript/peticiones-http/cors/ 
*/

app.use(cors(config.application.cors.server));

// Utilizamos las rutas que hemos creado para el servidor
app.use('/api', api);

export default app;