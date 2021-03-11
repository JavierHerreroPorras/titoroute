<template>
    <div>
        <!-- <h2>Lo que tengo que hacer aquí</h2>
        <p>
            Le tengo que pasar el nombre, descripción, duración, nº personas y precio.
            Tengo que sacar de la base de datos:
                - El resumen (un mapa?)
                - La ruta (timelane con lo que haremos por día (Listado de elementos y fotos) y las valoraciones)
                - Los hoteles en los que nos alojaremos por dia:
                    - Fecha de inicio
                    - Fecha de fin
                    - Adultos
                    - Niños
                    - Habitación 
                    - Link
        </p> -->

        <h2 class="text-middle mx-5">{{title}}</h2>

        <p class="text-middle mx-5 mt-4">{{description}}</p>

        <div class="d-flex flex-row-reverse mr-5 mt-4">
            <div v-if="$store.state.route.routeInfo !== null">
                <button type="button" class="btn btn-info float-right" @click="anadirRuta()">Añadir ruta al carrito ({{$store.state.route.routeInfo.Route.price}} euros)</button>
            </div>
            
        </div>
        
        <div class="tab-menu mx-5 mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link :to="{name: 'detalles'}" class="nav-link" active-class="active" aria-selected="true">Detalles</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'mapa'}" class="nav-link" active-class="active" aria-selected="false">Mapa</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'hoteles'}" class="nav-link" active-class="active" aria-selected="false">Hoteles</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'comentarios'}" class="nav-link" active-class="active" aria-selected="false">Comentarios de los clientes</router-link>
                </li>
            </ul>
               
            <div class="tab-content">
                <router-view></router-view>
            </div>
        </div>
        <!-- End Tab v1 -->
    </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex';


export default {
    name: 'Route',
    data() {
        return {
            title: '',
            description: ''
        }
    },
    props: {

    },
    methods: {
		async getRouteDetails() {
			
            await this.$store.dispatch('route/getRouteDetails',this.$route.params.id)
            
            this.title = this.$store.state.route.routeInfo.Route.name
            this.description = this.$store.state.route.routeInfo.Route.description
                
		},
        
        anadirRuta(){
            this.$store.dispatch("cartModule/addCartItem",this.$store.state.route.routeInfo)
        }
    },
    created() {
        this.getRouteDetails();
    },
}
</script>

<style scoped>
.tab-content {
    border: 1px solid #dee2e6;
    border-top-style: none;
}

.tab-menu .nav-tabs .nav-item > .active  { 
  color: #fff;
  background: #85aa41; 
}

.tab-menu .nav-tabs li:hover { 
  color: #fff; 
  background: #85aa418a; 
}

</style>