<template>
    
    <div>
        <h3 class="page-title p-3">
            ¡Bienvenido! En esta ventana puede crear su propia ruta.
        </h3>

        <div class="general-info px-5 pt-3">
            <!-- Introducir información general sobre la ruta -->
            <h4 class="general-info-title">Información general de la ruta</h4>
            <p class="p-3">
                En este apartado definiremos los aspectos más importantes de la ruta. 
                Por ello, el título y resumen de la ruta deben llamar la atención de los usuarios.
                Además, la imagen debe recoger la esencia de la ruta (se puede elegir un collage de 
                fotos por ejemplo). Por último se debe incluir un mapa de la ruta, para que el usuario 
                pueda tener una visión general de los sitios que se recorren durante la ruta.
            </p>
            <div class="mt-5 row align-items-center">
                <label class="col-md-3 col-4 mb-0 text-right pr-5">Nombre de la ruta: </label>
                <input type="text" class="col-md-3 col-8" v-model="newRoute.name"/>

                <label class="routePhoto col-md-3 col-4 mb-0 text-right pr-5">Foto general (URL): </label>
                <input type="text" class="routePhoto col-md-3 col-8" v-model="newRoute.imageURL"/>
            </div>

            <div class="row mt-3 align-items-baseline">
                <label class="col-md-3 col-4 text-right pr-5">Descripción breve de la ruta: </label>
                <textarea class="col-md-9 col-8" v-model="newRoute.description" style="resize: none; height: 100px"/>
            </div>
            
            <div class="row mt-3 align-items-baseline">
                <label class="col-md-3 col-4 text-right pr-5">Mapa (URL): </label>
                <input type="text" class="col-md-9 col-8" v-model="newRoute.route_map_URL"/>
            </div>

            <div class="row align-items-center mt-3">
                <label class="col-lg-3 col-3 text-right pr-5 mb-0">Duración (días): </label>
                <input type="number" class="col-lg-1 col-2" v-model="newRoute.duration"/>

                <label class="col-lg-2 col-3 text-right pr-5 mb-0">Personas: </label>
                <input type="number" class="col-lg-1 col-2" v-model="newRoute.people"/>

                <label class="routeCountry col-lg-2 col-3 text-right pr-5 mb-0">País: </label>
                <input type="text" class="routeCountry col-lg-3 col-9" v-model="newRoute.country"/>
            </div>
            
        </div>
            
        <div class="planning-info p-5">
            <!-- Introducir el planning para la ruta -->
            <h4 class="planning-info-title">Planning de la ruta</h4>

            <p class="p-3">
                A continuación tienes que rellenar el planning de la ruta. Cada día 
                tendrá un título o nombre, un breve resumen de las actividades que 
                se desarrollarán, una descripción de las actividades que se realizan
                por la mañana y otra para las actividades por la tarde. Finalmente
                tienes que aportar una URL para la imagen y seleccionar el hotel.
            </p>

            <!-- Dependiendo de la duración de la ruta, se muestran un conjunto de días
            para que el router pueda introducir la información necesaria -->
            <div v-for="(t,index_t) in timeline" :key="index_t" class="mt-4 p-3">
                <h4 class="text-left pl-5">Día {{t.day_number}} </h4>

                <div class="mt-5 row align-items-baseline">
                    <label class="col-md-3 col-3 text-right pr-5">Título: </label>
                    <input type="text" class="col-md-3 col-9" v-model="t.day_title"/>

                    <label class="dayImage col-md-3 col-3 text-right pr-5">Imagen (URL): </label>
                    <input type="text" class="dayImage col-md-3 col-9" v-model="t.day_photo"/>
                </div>

                <div class="row mt-3 align-items-baseline">
                    <label class="col-3 text-right pr-5">Resumen: </label>
                    <textarea class="col-9" v-model="t.day_summary" style="resize: none; height: 100px"/>
                </div>

                <div class="row mt-3 align-items-baseline">
                    <label class="col-3 text-right pr-5">Actividades por la mañana: </label>
                    <textarea class="col-9" v-model="t.day_description_1" style="resize: none; height: 100px"/>
                </div>

                <div class="row mt-3 align-items-baseline">
                    <label class="col-3 text-right pr-5">Actividades por la tarde: </label>
                    <textarea class="col-9" v-model="t.day_description_2" style="resize: none; height: 100px"/>
                </div>
                
                <div class="mt-3 row align-items-baseline">
                    <label class="col-3 text-right pr-5">Hotel: </label>
                    <input class="col-6 mr-5" readonly v-model="t.hotel_name">
                    <button type="button" class="btn btn-primary col-md-2 col-4" data-toggle="modal" data-target="#exampleModal" @click="day_id = index_t">
                    Buscar hotel
                    </button>
                </div>
                
                <!-- Modal de búsqueda de hoteles -->
                <div class="modal fade bs-example-modal-lg" role="dialog" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            
                            <div class="modal-header">
                                <h5 class="modal-title">Selecciona el hotel</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <!-- Barra de búsqueda de hoteles -->
                            <div id="hotelSearch">
                                <input id="search" placeholder="Introduce el nombre del hotel" v-model="hotel_search" @keyup.enter="searchHotel()"/>
                                <a id="searchIcon" class="search_icon" @click="searchHotel()"><font-awesome-icon icon="search"/></a>
                            </div>

                            <p>¿No encuentras lo que buscas? <a data-toggle="modal" data-target="#exampleModal1" style="color: blue; text-decoration: underline">Registra el hotel</a></p> 
                            
                            <div style="overflow: auto; height: 500px">
                            
                            <div v-for="(hotel,index) of hotels_search" :key="index" class="hotels-list py-2 px-4 mb-2">
                                
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
                                        <div class="timeline-carousel__item-inner col-7 row card-body" style="align-items: first baseline;" @click="selectHotel(hotel)">
                                            <span class="year col-12 text-left" >{{hotel.name}}</span>
                                            
                                            <span class="month col-lg-8 order-lg-1 order-2 col-12">{{hotel.address}}</span>
                                            <span class="valoration col-lg-4 order-lg-2 order-1 col-12"><rating-component :value=hotel.stars /></span>

                                            <div class="col-12 order-3 mt-2 float-right">
                                                <a class="mb-0 ml-0 float-right ml-3" :href=hotel.booking_link target="_blank"><font-awesome-icon icon="external-link-alt" class="mr-1"/> Enlace al hotel</a>      
                                            </div>
                                            
                                        </div>
                                        <!-- Fin de descripción del hotel -->
                                    </div>
                                </div>


                            </div>
                            </div>
                            <div><p></p></div>

                            <div>
                                <!-- Modal para introducir los datos del nuevo hotel -->
                                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Nuevo hotel</h5>
                                            </div>
                                            <div class="modal-body px-5">
                                                <div class="row mt-3 align-items-baseline">
                                                    <label class="col-lg-2 col-4 text-right pr-5">Nombre: </label>
                                                    <input type="text" class="col-lg-6 col-8" v-model="newHotel.name"/>

                                                    <label id="hotelStarsLabel" class="hotelStars col-lg-2 col-4 text-right pr-3">Estrellas: </label>
                                                    <input type="number" class="hotelStars col-lg-2 col-8" v-model="newHotel.stars"/>
                                                </div>

                                                <div class="row mt-3 align-items-baseline">
                                                    <label class="col-lg-2 col-4 text-right pr-5">Descripción: </label>
                                                    <textarea class="col-lg-10 col-8" style="height: 80px; resize: none" v-model="newHotel.description"/>
                                                </div>

                                                <div class="row mt-3 align-items-baseline">
                                                    <label class="col-lg-2 col-4 text-right pr-5">Dirección: </label>
                                                    <input type="text" class="col-lg-10 col-8" v-model="newHotel.address"/>
                                                </div>
                                                
                                                <div class="row mt-3 align-items-center">
                                                    <label class="col-lg-3 col-5 pr-3 mb-0">Precio 1 persona: </label>
                                                    <input type="number" class="col-lg-3 col-7" v-model="newHotel.single_price"/>

                                                    <label class="doublePrice col-lg-3 col-5 pr-3 mb-0">Precio 2 personas: </label>
                                                    <input type="number" class="doublePrice col-lg-3 col-7" v-model="newHotel.double_price"/>

                                                    <label class="col-lg-3 col-5 pr-3 mb-0 mt-3">Precio Familiar: </label>
                                                    <input type="number" class="col-lg-3 col-7 mt-3" v-model="newHotel.triple_price"/>

                                                </div>
                                                
                                                <div class="row mt-3 align-items-center">
                                                    <label class="col-lg-2 col-4 text-center mb-0">Link (Reserva): </label>
                                                    <input type="text" class="col-lg-10 col-8" v-model="newHotel.booking_link"/>
                                                </div>

                                                <div class="row mt-3 align-items-center">
                                                    <label class="col-lg-2 col-3">Imágenes (URL): </label>
                                                    <input type="text" class="col-lg-6 col-6" v-model="newImage"/>
                                                    <button @click="addElementToArray()" class="btn btn-dark col-lg-2 col-2 ml-4">Añadir</button>
                                                    <div class="col-12 mt-3">
                                                        <div v-for="(p,index) of newHotel.imageURL" :key="index" class="d-flex align-items-baseline">
                                                            <p class="text-left ml-5">Imagen {{index}}: <a :href=p target="blank">{{p}}</a></p>
                                                            <button class="btn btn-danger ml-3 py-0" @click="removeImage(index)">Eliminar</button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" @click="discardHotel()">Cerrar</button>
                                                <button type="button" class="btn btn-primary" @click="saveHotel()">Guardar hotel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Fin de modal para introducir los datos del nuevo hotel -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin modal de búsqueda de hoteles -->
            </div>
        </div>
        
        <div class="text-right">
            <button type="button" class="my-5 btn btn-danger mr-3" @click="routeDiscard()">Cancelar</button>
            <button type="button" class="my-5 btn btn-success mr-3" @click="routePreview()">Guardar Ruta</button>

        </div>
    </div>
</template>

<script>
// const $ = require('jquery')
// window.$ = $

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
            window.$('#exampleModal1').modal('toggle');
            window.$('#exampleModal').modal('show');
        },

        discardHotel(){
            window.$('#exampleModal1').modal('toggle');
            this.newHotel.imageURL = [];
        },

        addElementToArray(){
            if(!this.newHotel.imageURL.find(element => element === this.newImage) && this.newImage !== ""){
                this.newHotel.imageURL.push(this.newImage);
            }  
            this.newImage="";
        },

        removeImage(index){
            this.newHotel.imageURL.splice(index,1);
        },

        routeDiscard(){
            this.$router.push({name: 'Rutas'});
        },

        async routePreview(){
            //Asignamos la timeline a la ruta que queremos guardar
            this.newRoute.route_timeline = this.timeline;

            //Asignamos el id del router
            this.newRoute.router_id = this.user.User._id;
            this.newRoute.router_name = this.user.User.name + ' ' + this.user.User.surname;

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

            //Por último redirigimos al router a la ruta que ha creado
            this.$router.push({ name: 'Ruta', params: { id: new_route_id }});
            
        },

        selectHotel(h){
            console.log(h)
            this.timeline[this.day_id].hotel_id = h._id;
            this.timeline[this.day_id].hotel_name = h.name + ', ' + h.address,
            this.timeline[this.day_id].hotel_single = h.single_price
            this.timeline[this.day_id].hotel_double = h.double_price
            this.timeline[this.day_id].hotel_triple = h.triple_price
            window.$('#exampleModal').modal('toggle');
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
 * {
	 outline: none;
}

.page-title, .general-info-title, .planning-info-title{
    font-family: "Libre Franklin", sans-serif;
    margin-top: 1rem;
}

.general-info, .planning-info{
    font-family: "Roboto", sans-serif;
}


#hotelSearch{
    margin-top: 1rem;
    margin-bottom: 1.5rem;
}

#search{
    width: 400px;
}

#searchIcon{
    margin-left: 7px;
}
/* mouse over link */
a:hover {
  text-decoration: none;
}


option {
	font-size: 17px;
}

.card {
	background-color: #dfdbd7;
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
	 padding-top: 10px;
}

 .timeline-carousel__item-inner .year {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 2rem;
	 line-height: 36px;
	 color: rgb(38, 49, 43);
	 display: table;
	 padding-right: 10px;
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
	 z-index: 3;
}
 .timeline-carousel__item-inner .month {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 1rem;
	 text-transform: uppercase;
	 color: #645118;
	 font-weight: 600;
	 text-align: left;
}

.valoration {
	font-weight: 700;
	font-size: 24px;
	font-family: 'Libre Franklin', sans-serif;
	text-transform: uppercase;
	color: #707982;
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




@media (min-width: 576px) {
    .routePhoto, .routeCountry, 
    .dayImage, .hotelStars, .doublePrice{
        margin-top: 1rem;
    }

    #hotelStarsLabel{
        padding-right: 3rem !important;
    }

}

@media (min-width: 768px) {

	.routePhoto, .dayImage{
        margin-top: 0;
    }

	
}

@media (min-width: 992px) {

    .routeCountry, .hotelStars, .doublePrice{
        margin-top: 0;
    }

    #hotelStarsLabel{
        padding-right: 1rem !important;
    }
}

@media (min-width: 1200px) {

}



</style>