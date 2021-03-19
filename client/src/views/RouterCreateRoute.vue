<template>
    <div>
        <h3>
            ¡Bienvenido! En esta ventana puede crear su propia ruta. Para ello siga
            las instrucciones para crearla.
        </h3>

        <!-- Introducir información general sobre la ruta -->
        <h4 class="mt-5">Información general de la ruta</h4>
        <div class="row">
            <label class="col-3">Nombre de la ruta: </label>
            <input type="text" class="col-3" v-model="newRoute.name"/>

            <label class="col-3">Descripción breve de la ruta: </label>
            <textarea class="col-3" v-model="newRoute.description"/>

            <label class="col-3">Foto general (URL): </label>
            <input type="text" class="col-3" v-model="newRoute.imageURL"/>

            <label class="col-3">Duración (en días): </label>
            <input type="number" class="col-3" v-model="newRoute.duration"/>

            <label class="col-3">Número de personas: </label>
            <input type="number" class="col-3" v-model="newRoute.people"/>

            <label class="col-3">Mapa (URL): </label>
            <input type="text" class="col-3" v-model="newRoute.route_map_URL"/>

            <label class="col-3">País: </label>
            <input type="text" class="col-3" v-model="newRoute.country"/>
        </div>
            
        <!-- Introducir el planning para la ruta -->
        <h4 class="mt-5 ml-3 row">Planning de la ruta</h4>

            <p class="col-12">
                A continuación tienes que rellenar el planning de la ruta. Cada día 
                tendrá un título o nombre, un breve resumen de las actividades que 
                se desarrollarán, una descripción de las actividades que se realizan
                por la mañana y otra para las actividades por la tarde. Finalmente
                tienes que aportar una URL para la imagen y seleccionar el hotel.
            </p>

            <!-- Dependiendo de la duración de la ruta, se muestran un conjunto de días
            para que el router pueda introducir la información necesaria -->
            <div v-for="(t,index_t) in timeline" :key="index_t" class="mt-5">
                <h4 class="col-12">Día {{t.day_number}}: </h4>

                <label class="col-3">Título: </label>
                <input type="text" class="col-3" v-model="t.day_title"/>

                <label class="col-3">Resumen: </label>
                <textarea class="col-3" v-model="t.day_summary"/>

                <label class="col-3">Actividades por la mañana: </label>
                <textarea class="col-3" v-model="t.day_description_1"/>

                <label class="col-3">Actividades por la tarde: </label>
                <textarea class="col-3" v-model="t.day_description_2"/>

                <label class="col-3">Imagen (URL): </label>
                <input type="text" class="col-3" v-model="t.day_photo"/>

                <label class="col-2">Hotel: </label>
                <span class="col-3">{{t.hotel_name}}</span>

                <button type="button" class="btn btn-primary col-2" data-toggle="modal" data-target="#exampleModal" @click="day_id = index_t">
                Buscar hotel
                </button>
                
                <!-- Modal de búsqueda de hoteles -->
                <div class="modal fade bs-example-modal-lg" role="dialog" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            
                            <!-- Barra de búsqueda de hoteles -->
                            <input placeholder="Introduce el nombre del hotel" v-model="hotel_search" @keyup.enter="searchHotel()"/>
                            <a class="search_icon" @click="searchHotel()"><font-awesome-icon icon="search"/></a>

                            <div style="overflow: auto; height: 500px">
                            
                            <div v-for="(hotel,index) of hotels_search" :key="index" class="hotels-list py-2 px-4">
                                
                                <!-- Cada hotel de la búsqueda -->
                                <div class="card">
                                
                                    <div class="row">
                                        <div class="col-5">
                                            <!-- Carousel de imagenes del hotel -->
                                            <div :id="hotel.name.replace(/\s/g, '')" class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner mx-auto">
                                                    <div class="carousel-item" v-for="(image,index) of hotel.imageURL" :key="index" :class="{ active: index==0 }">
                                                        <img :src=image class="img-carousel d-block" alt="...">
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" :href="'#' + hotel.name.replace(/\s/g, '')" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" :href="'#' + hotel.name.replace(/\s/g, '')" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <!-- Fin de carousel de imagenes del hotel -->
                                        </div>

                                        <!-- Descripción del hotel -->
                                        <div class="timeline-carousel__item-inner col-7 row card-body" @click="selectHotel(hotel)">
                                            <div class="align-baseline col-12 row mb-3 mt-2">
                                                <span class="year col-12 text-left" >{{hotel.name}}</span>
                                            </div>
                                            
                                            <div class="align-baseline col-12 row mb-3">
                                                <span class="month col-8">{{hotel.address}}</span>
                                                <span class="valoration col-4"><rating-component :value=hotel.stars /></span>
                                            </div>

                                            <div class="row justify-content-end prices col">
                                                <a class="card-price col-7 mb-0 ml-0 text-left ml-3" :href=hotel.booking_link target="_blank"><font-awesome-icon icon="external-link-alt" class="mr-1"/> Enlace al hotel</a>      
                                            </div>
                                        </div>
                                        <!-- Fin de descripción del hotel -->
                                    </div>
                                </div>


                            </div>
                            </div>

                            <div>
                                <p>¿No encuentras lo que buscas? <a data-toggle="modal" data-target="#exampleModal1">Registra el hotel</a></p> 
                            
                                <!-- Modal para introducir los datos del nuevo hotel -->
                                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-body row">
                                                <label class="col-4">Nombre: </label>
                                                <input type="text" class="col-8" v-model="newHotel.name"/>

                                                <label class="col-4">Descripción: </label>
                                                <textarea class="col-8" v-model="newHotel.description"/>

                                                <label class="col-4">Dirección: </label>
                                                <input type="text" class="col-8" v-model="newHotel.address"/>

                                                <label class="col-4">Estrellas: </label>
                                                <input type="number" class="col-8" v-model="newHotel.stars"/>

                                                <label class="col-4">Precio de habitación (1 persona): </label>
                                                <input type="number" class="col-8" v-model="newHotel.single_price"/>

                                                <label class="col-4">Precio de habitación (2 personas): </label>
                                                <input type="number" class="col-8" v-model="newHotel.double_price"/>

                                                <label class="col-4">Precio de habitación (Familiar): </label>
                                                <input type="number" class="col-8" v-model="newHotel.triple_price"/>

                                                <label class="col-4">Link (Booking): </label>
                                                <input type="text" class="col-8" v-model="newHotel.booking_link"/>

                                                <label class="col-3">Imágenes (URL): </label>
                                                <input type="text" class="col-7" v-model="newImage"/>
                                                <button @click="addElementToArray()" class="col-2">Añadir</button>
                                                <div class="col-12" v-for="(p,index) of newHotel.imageURL" :key="index">
                                                    <p>{{p}}</p>
                                                </div>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" @click="discardHotel()">Close</button>
                                                <button type="button" class="btn btn-primary" @click="saveHotel()">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Fin de modal para introducir los datos del nuevo hotel -->
                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin modal de búsqueda de hoteles -->
            </div>
            <button type="button" class="mt-5 btn btn-danger" @click="routeDiscard()">Cancelar</button>
            <button type="button" class="mt-5 btn btn-success" @click="routePreview()">Guardar Ruta</button>

</div>
</template>

<script>
const $ = require('jquery')
window.$ = $

import { mapActions, mapMutations, mapState } from 'vuex';
import RatingComponent from '../components/RatingComponent.vue';

export default {
    name: 'RouterCreateRoute',
    data(){
        return {
            duration: 0,
            days: null,
            day: {
                "day_number": 0,
                "day_title": "",
                "day_summary": "",
                "day_photo": "",
                "day_description_1": "",
                "day_description_2": "",
                "hotel_id": "",
                "hotel_name":""
            },
            timeline: [],
            newImage: "",
            day_id: 0,
            hotel_search: "",
            images: []
        }
    },
    components: {
        RatingComponent
    },
    methods: {

        ...mapActions({
            saveNewHotel: 'router/sendNewHotel',
            saveNewRoute: 'router/sendNewRoute',
            getHotels: 'router/getHotels'
        }),

        ...mapMutations({
            setRoutes: 'router/setHotelsSearch'
        }),

        createTimeline() {
            this.days = Array.from({length: this.newRoute.duration}, (_, i) => i + 1);
            
            if(this.timeline.length > this.newRoute.duration){
                for (let i = 0; i < (this.timeline.length - this.newRoute.duration); i++) {
                    this.timeline.pop(); 
                }
            }
            else{
                for (let i = 0; i < (this.newRoute.duration-this.timeline.length); i++) {
                    this.timeline.push(JSON.parse(JSON.stringify(this.day)));
                    this.timeline[this.timeline.length-1].day_number=this.timeline.length; 
                }
            }
        },

        async saveHotel() {
            //console.log(this.newHotel);
            await this.saveNewHotel();
            this.getHotels();
            $('#exampleModal1').modal('toggle');
            $('#exampleModal').modal('show');
        },

        discardHotel(){
            $('#exampleModal1').modal('toggle');
        },

        addElementToArray(){
            if(!this.newHotel.imageURL.find(element => element === this.newImage) && this.newImage !== ""){
                this.newHotel.imageURL.push(this.newImage);
            }  
            this.newImage="";
        },

        routeDiscard(){
            this.$router.push({name: 'Rutas'});
        },

        async routePreview(){
            // Asignamos la timeline a la ruta que queremos guardar
            this.newRoute.route_timeline = this.timeline;

            //Asignamos el id del router
            console.log(this.user)
            this.newRoute.router_id = this.user.User._id;

            //Convertimos el número de personas y duración de la ruta a enteros
            this.newRoute.people = parseInt(this.newRoute.people)
            this.newRoute.duration = parseInt(this.newRoute.duration)

            //Calculamos el precio total de los hoteles
            let total_price = 0, hotel_price;
            for (let i of this.newRoute.route_timeline){
                hotel_price = 0;
                if(this.newRoute.people === 1){hotel_price = i.hotel_single}
			    if(this.newRoute.people === 2){hotel_price = i.hotel_double}
			    if(this.newRoute.people >= 3){hotel_price = i.hotel_triple}

                total_price +=  hotel_price   
            }

            //Finalmente guardamos el precio final de la ruta (orientativo)
            this.newRoute.price = total_price;

            //El siguiente paso es mandar nuestra ruta al servidor. 
            const new_route_id = await this.saveNewRoute();

            // Por último redirigimos al router a la ruta que ha creado
            this.$router.push({ name: 'Ruta', params: { id: new_route_id }});
            
        },

        selectHotel(h){
            this.timeline[this.day_id].hotel_id = h._id;
            this.timeline[this.day_id].hotel_name = h.name,
            this.timeline[this.day_id].hotel_single = h.single_price
            this.timeline[this.day_id].hotel_double = h.double_price
            this.timeline[this.day_id].hotel_triple = h.triple_price
            $('#exampleModal').modal('toggle');
        },

        searchHotel(){
            const search = this.hotels.filter(hotel => (hotel.name.toLowerCase().includes(this.hotel_search.toLowerCase()) || hotel.description.toLowerCase().includes(this.hotel_search.toLowerCase()) || hotel.address.toLowerCase().includes(this.hotel_search.toLowerCase())));
            this.setRoutes(search);
        }
        
    },
    computed: {
        ...mapState('router', ['newHotel', 'hotels', 'newRoute', 'hotels_search']),
        ...mapState('auth', ['user'])
    },
    created() {
        this.getHotels();

    },
    watch: {
        'newRoute.duration': 'createTimeline'
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
 * {
	 outline: none;
}

 /* unvisited link */
a:link {
  color: rgb(255, 255, 255);
}

/* visited link */
a:visited {
  color: rgb(255, 255, 255);
}

/* mouse over link */
a:hover {
  color: rgb(92, 178, 212);
  text-decoration: none;
}

/* selected link */
a:active {
  color: rgb(139, 139, 139);
} 


option {
	font-size: 17px;
}

.card {
	background-color: #323232;
	max-width: 100% !important;
}

.card .prices p{
	color: black;
	font-weight: 900;
	font-size: 16px;
	margin-right: 0rem;
}

.card .prices span{
	color: white;
	font-weight: 900;
	font-size: 15px;
	margin-right: 0rem;
	padding-left: 0px;
	padding-right: 0px;
}

.carousel-control-next-icon, .carousel-control-prev-icon{
	background-color: black;
	opacity: 0.75;
	height: 15%;
}

.img-carousel {
	height: 180px !important;
    width: 100%;
  padding: 0.5rem;
}
.noches-hotel{
	font-family: 'Libre Franklin', sans-serif;
	font-size: 14px;
	font-weight: 600;
	text-align: left;
}
 .timeline-carousel {
	 margin: 0;
	 /*background-color: #323232;*/
	 font-family: "Roboto", sans-serif;
	 font-weight: 400;
	 padding: 86px 2% 90px 2%;
	 position: relative;
	 overflow: hidden;
}
 .timeline-carousel:after, .timeline-carousel:before {
	 content: "";
	 position: absolute;
	 display: block;
	 top: 0;
	 height: 100%;
	 background-color: #323232;
}
 .timeline-carousel:after {
	 left: 0;
}
 .timeline-carousel:before {
	 right: 0;
	 opacity: 0;
}
 .timeline-carousel .slick-list {
	 overflow: visible;
}
 .timeline-carousel .slick-dots {
	 bottom: -73px;
}
 .timeline-carousel h1 {
	 color: black;
	 font-family: 'Libre Franklin', sans-serif;
	 font-weight: 700;
}
 .timeline-carousel p {
	 color: black;
	 font-weight: 300;
	 font-size: 15px;
	 margin-right: 2rem;
}
 .timeline-carousel__image {
	 padding-right: 0px;
}

 .timeline-carousel__item .media-wrapper {
	 opacity: 0.4;
	 padding-bottom: 81.4%;
	 -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

 .timeline-carousel__item-inner {
	 position: relative;
	 padding-top: 2rem;
	 align-items: baseline;
	 padding: 0rem;
	 padding-top: 1rem;
}

 .timeline-carousel__item-inner .year {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 36px;
	 line-height: 36px;
	 color: rgba(255, 255, 255, 1);
	 display: table;
	 padding-right: 10px;
	 background-color: #323232;
	 z-index: 1;
	 position: relative;
	 font-weight: 700;
}
 .timeline-carousel__item-inner .year:after {
	 content: "";
	 left: 0px;
	 top: 0;
	 height: 100%;
	 width: 0px;
	 background-color: #323232;
	 z-index: 3;
}
 .timeline-carousel__item-inner .month {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 17px;
	 text-transform: uppercase;
	 color: #ffc107;
	 font-weight: 600;
	 text-align: left;
}

.valoration {
	font-weight: 700;
	font-size: 24px;
	font-family: 'Libre Franklin', sans-serif;
	text-transform: uppercase;
	color: #ffc107;
}
 .timeline-carousel__item-inner p {
	 font-size: 15px;
	 line-height: 18px;
	 color: rgba(255, 255, 255, 1);
	 font-weight: 400;
}
 .timeline-carousel__item-inner .read-more {
	 font-size: 12px;
	 color: #ffc107;
	 display: table;
	 margin-bottom: 10px;
	 font-weight: 900;
	 text-decoration: none;
	 position: relative;
}
 .timeline-carousel__item-inner .read-more:after {
	 content: "";
	 position: absolute;
	 left: 0;
	 bottom: -1px;
	 width: 0;
	 border-bottom: 2px solid #ffc107;
	 -webkit-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
 .timeline-carousel__item-inner .read-more:hover:after {
	 width: 100%;
}
 .timeline-carousel__item-inner .pointer {
	 height: 29px;
	 position: relative;
	 z-index: 1;
	 margin: -4px 0 16px;
}
 .timeline-carousel__item-inner .pointer:after, .timeline-carousel__item-inner .pointer:before {
	 position: absolute;
	 content: "";
}
 .timeline-carousel__item-inner .pointer:after {
	 width: 5px;
	 height: 9px;
	 border-radius: 100%;
	 top: 0;
	 left: 0;
	 background-color: #ffc107;
}
 .timeline-carousel__item-inner .pointer:before {
	 width: 1px;
	 height: 100%;
	 top: 0;
	 left: 4px;
	 background-color: #ffc107;
}
 .timeline-carousel .slick-active .media-wrapper {
	 opacity: 1 !important;
}
 .slick-dots {
	 bottom: 160px;
	 list-style: none;
	 position: absolute;
	 width: 100%;
	 left: 0;
	 text-align: center;
	 z-index: 2;
}
 .slick-dots li {
	 display: inline-block;
	 margin: 0 6px;
	 position: relative;
	 width: 5px;
	 height: 10px;
}
 .slick-dots li:last-child {
	 margin-right: 0;
}
 .slick-dots li.slick-active button {
	 background: #ffc107;
	 border-color: #ffc107;
}
 .slick-dots li button {
	 display: block;
	 font-size: 0;
	 width: 10px;
	 height: 10px;
	 padding: 0;
	 background-color: rgba(255, 255, 255, 0.6);
	 border-color: rgba(255, 255, 255, 0.6);
	 -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
 .slick-dots li button:hover {
	 background: #ffc107;
	 border-color: #ffc107;
}
 .link {
	 position: absolute;
	 left: 0;
	 bottom: 0;
	 padding: 20px;
	 z-index: 9999;
}
 .link a {
	 display: flex;
	 align-items: center;
	 text-decoration: none;
	 color: #fff;
}
 .link .fa {
	 font-size: 28px;
	 margin-right: 8px;
	 color: #fff;
}
</style>