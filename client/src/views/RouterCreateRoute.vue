<template>
    <div>
        <h3>
            ¡Bienvenido! En esta ventana puede crear su propia ruta. Para ello siga
            las instrucciones para crearla.
        </h3>

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
            

        <h4 class="mt-5 ml-3 row">Planning de la ruta</h4>

            <p class="col-12">
                A continuación tienes que rellenar el planning de la ruta. Cada día 
                tendrá un título o nombre, un breve resumen de las actividades que 
                se desarrollarán, una descripción de las actividades que se realizan
                por la mañana y otra para las actividades por la tarde. Finalmente
                tienes que aportar una URL para la imagen y seleccionar el hotel.
            </p>

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

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                        <input placeholder="Introduce el nombre del hotel"/>
                        <a class="search_icon" @click="searchRoute()"><font-awesome-icon icon="search"/></a>

                        <div v-for="(h,index) of hotels" :key="index">
                            <p @click="selectHotel(h)">{{h.name}}</p>
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
                                    <button type="button" class="btn btn-secondary" @click="saveHotel()">Close</button>
                                    <button type="button" class="btn btn-primary" @click="saveHotel()">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <button type="button" class="mt-5 btn btn-danger" @click="routePreview()">VISTA PREVIA</button>

</div>
</template>

<script>
const $ = require('jquery')
window.$ = $

import { mapActions, mapState } from 'vuex';

export default {
    name: 'RouterCreateRoute',
    data() {
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
            images: []
        }
    },
    methods: {

        ...mapActions({
            saveNewHotel: 'router/sendNewHotel',
            saveNewRoute: 'router/sendNewRoute',
            getHotels: 'router/getHotels'
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
            $('#exampleModal1').modal('toggle');
        },

        addElementToArray(){
            if(!this.newHotel.imageURL.find(element => element === this.newImage) && this.newImage !== ""){
                this.newHotel.imageURL.push(this.newImage);
            }  
            this.newImage="";
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
            console.log(this.newRoute)
            await this.saveNewRoute();
            
        },

        selectHotel(h){
            this.timeline[this.day_id].hotel_id = h._id;
            this.timeline[this.day_id].hotel_name = h.name,
            this.timeline[this.day_id].hotel_single = h.single_price
            this.timeline[this.day_id].hotel_double = h.double_price
            this.timeline[this.day_id].hotel_triple = h.triple_price
            $('#exampleModal').modal('toggle');
        }
        
    },
    computed: {
        ...mapState('router', ['newHotel', 'hotels', 'newRoute']),
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

</style>