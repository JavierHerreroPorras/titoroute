<template>
    <div id="RouteDetails" class="row">
        <div class="col-8">
            
            <p class="mt-2 p-4"> A continuación se muestra de forma detallada todo el transcurso de la ruta, incluyendo todas las actividades que se realizarán durante todos los días.</p>
            
            <div class="mb-4 p-4" v-for="(p) of days_details" :key="p.day_number">
                <route-details-day
                    :number="p.day_number"
                    :description1="p.day_description_1"
                    :description2="p.day_description_2"
                    :imageURL="p.day_photo"
                    :title="p.day_title"
                />
            </div>
        
        </div>
        
        <div class="col-4">
            <p>Advertisement</p>
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
        }
    }
</script>