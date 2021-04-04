<template>
    <div id="RouteDetails" class="row p-4">
        <div class="col-md-8">
            
            <p class="p-4 details-description"> A continuación se muestra de forma detallada todo el transcurso de la ruta, incluyendo todas las actividades que se realizarán durante todos los días.</p>
            
            <div class="mb-4 p-2" v-for="(p) of days_details" :key="p.day_number">
                <route-details-day
                    :number="p.day_number"
                    :description1="p.day_description_1"
                    :description2="p.day_description_2"
                    :imageURL="p.day_photo"
                    :title="p.day_title"
                />
            </div>
        
        </div>
        
        <div class="col-md-4">
            <div class="advertisement">
                <span class="">Inserte su publicidad aquí</span>
            </div>
        </div>
    </div>


</template>

<script>

    import RouteDetailsDay from '../components/RouteDetailsDay.vue';
    import { mapActions, mapState } from 'vuex';

    export default {
        components: { RouteDetailsDay },
        
        name: 'RouteDetails',

        methods: {
            ...mapActions({
                getDetails: 'route/getRouteDetails',
            }),

            // Función que pide los detalles de la ruta al servidor
            async getRouteDetails(){
                await this.getDetails(this.$route.params.id);
            }
        },

        computed: {
            ...mapState('route', ['routeInfo']),

            days_details(){
                // Si no tenemos información sobre la ruta (hemos recargado la página),
                // la volvemos a pedir al servidor, así evitamos errores en el cliente. 
                if(this.routeInfo === null){
                    this.getRouteDetails();
                }
                return this.routeInfo.RouteDetails.route_timeline;
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');

.details-description{
    font-family: Roboto,serif;
    font-size: 16px;
}

.advertisement{
    margin-top: 3rem;
    width: 100%;
    height: 400px;
    background-color: grey;
    font-size: 20px;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 767px) {
    .advertisement{
        height: 200px;
        margin-bottom: 3rem;
        margin-top: 0;
    }
}
</style>