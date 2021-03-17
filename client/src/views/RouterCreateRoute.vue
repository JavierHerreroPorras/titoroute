<template>
    <div>
        <h3>
            ¡Bienvenido! En esta ventana puede crear su propia ruta. Para ello siga
            las instrucciones para crearla.
        </h3>

        <h4 class="mt-5">Información general de la ruta</h4>
            <label>Nombre de la ruta: </label>
            <input type="text" class="ml-3"/>

            <label>Descripción breve de la ruta: </label>
            <textarea class="ml-3"/>

            <label>Foto general (URL): </label>
            <input type="text" class="ml-3"/>

            <label>Duración (en días): </label>
            <input type="number" class="ml-3" v-model="duration"/>

        <h4 class="mt-5">Planning de la ruta</h4>

            <p>
                A continuación tienes que rellenar el planning de la ruta. Cada día 
                tendrá un título o nombre, un breve resumen de las actividades que 
                se desarrollarán, una descripción de las actividades que se realizan
                por la mañana y otra para las actividades por la tarde. Finalmente
                tienes que aportar una URL para la imagen y seleccionar el hotel.
            </p>

            <div v-for="(p,index) in days" :key="index">
                <p>Día {{p}}: </p>

                <label>Título: </label>
                <input type="text" class="ml-3"/>

                <label>Resumen: </label>
                <textarea class="ml-3"/>

                <label>Actividades por la mañana: </label>
                <textarea class="ml-3"/>

                <label>Actividades por la tarde: </label>
                <textarea class="ml-3"/>

                <label>Imagen (URL): </label>
                <input type="text" class="ml-3"/>

                <label>Hotel: </label>
                <input type="text" class="ml-3"/>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Buscar hotel
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                        <input placeholder="Introduce el nombre del hotel"/>
                        <a class="search_icon" @click="searchRoute()"><font-awesome-icon icon="search"/></a>

                        <div>
                            <p>Aquí iria un scroll con los resultados de la búsqueda</p>
                        </div>

                        <div>
                            <p>¿No encuentras lo que buscas? <a data-toggle="modal" data-target="#exampleModal1">Registra el hotel</a></p> 
                        
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-body">
                                    <p>DATOS DEL HOTEL</p>
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

</div>
</template>

<script>
export default {
    name: 'RouterCreateRoute',
    data() {
        return {
            duration: 0,
            days: null
        }
    },
    methods: {
        createTimeline() {
            this.days = Array.from({length: this.duration}, (_, i) => i + 1);
        },

        saveHotel() {
            $('#exampleModal1').modal('toggle')
        }
    },
    watch: {
        'duration': 'createTimeline'
    }
    
}
</script>

<style scoped>

</style>