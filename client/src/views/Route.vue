<template>
    <div id="RouteView">
        <div class="overlay" v-if="loading">
            Loading...
        </div>
        <div id="RouteInfo" v-else>
            <h2 id="RouteTitle" class="text-center">{{title}}</h2>
            <h6 id="RouteDescription" class="text-center p-3 m-4">{{description}}</h6>

            <!-- Toast o aviso para que los usuarios puedan apoyar económicamente a los routers. Cuando pulsamos en ella,
            nos redirige automaticamente al componente donde se encuentra el proceso de donación -->
            <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                    <div class="toast-header">
                        <font-awesome-icon icon="donate" class="mr-2"/>
                        <strong class="mr-auto">¡Apoya a nuestros routers!</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        <a @click="redirectToDonation()">Si te ha gustado la ruta y quieres apoyar al Router que la ha creado, pulsa en esta ventana.</a>
                    </div>
                </div>
            </div>
            
            <!-- Menú que contiene el planning, hoteles, comentarios y página del router -->
            <div class="content mx-auto mt-5">
                <div class="">
                    <!-- Tabs nav -->
                    <div class="nav nav-pills nav-pills-custom nav-fill" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            
                            <router-link :to="{name: 'planning'}" class="nav-link  nav-link-sup" active-class="active" aria-selected="true">
                                <font-awesome-icon icon="route" class="mr-2"/>
                                Planning
                            </router-link>

                            <router-link :to="{name: 'hoteles'}" class="nav-link  nav-link-sup" active-class="active" aria-selected="false">
                                <font-awesome-icon icon="hotel" class="mr-2"/>
                                Hoteles
                            </router-link>

                            <router-link :to="{name: 'comentarios'}" class="nav-link  nav-link-sup" active-class="active" aria-selected="false">
                                <font-awesome-icon icon="comments" class="mr-2"/>
                                Comentarios
                            </router-link>

                            <router-link :to="{name: 'router'}" class="nav-link  nav-link-sup" active-class="active" aria-selected="false">
                                <font-awesome-icon icon="user" class="mr-2"/>
                                Router
                            </router-link>
                    </div>
                </div>


                <!-- Aquí se muestran los componentes que llamamos -->
                <div class="tab-content" id="v-pills-tabContent">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    const $ = require('jquery')
    window.$ = $

    export default {
        name: 'Route',
        data() {
            return {
                loading: true,
                title: '',
                description: '',
            }
        },
        computed: {
            // Mediante mapState y mapActions podemos acceder fácilmente a los datos y
            // métodos declarados en el store de Vue
            ...mapState('route', ['routeInfo'])
            
        },
        methods: {

            ...mapActions({
                getDetails: 'route/getRouteDetails',
            }),

            // Realizamos una llamada al servidor para obtener los datos de la ruta,
            // que posteriormente mostraremos en la vista
            async getRouteDetails() {
                await this.getDetails(this.$route.params.id);
                
                this.title = this.routeInfo.Route.name;
                this.description = this.routeInfo.Route.description;
                this.loading = false;        
            },

            // Cuando pulsamos el toast, nos redirige al componente del Router. 
            redirectToDonation() {
                this.$router.push({name: 'router'});
            }
        },
        created() {
            this.getRouteDetails();
        },
        mounted() {

            // Utilizamos jQuery para mostrar el toast.
            $(document).ready(function() {
                $(".toast").toast('show');
            });
        },
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

#RouterTitle, #RouteDescription{
    font-family: 'Roboto';
}

.content {
    max-width: 95%;
}

.toast {
    background-color: rgb(255,255,255);
}

.toast-header {
    background-color: rgb(244, 218, 218);
}

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*/
.nav-pills-custom .nav-link-sup.active{
  color: #fff;
   
}


.nav-pills-custom .nav-link {
    color: rgb(0, 0, 0);
    background: rgb(243, 245, 247);
    position: relative;
    padding: 7px;
}

.nav-pills-custom .nav-link.active {
    background: #ffff;
    color: rgb(0, 0, 0);
    background: rgb(243, 245, 247);
    border-bottom: 2px solid #a3a8ad;
    border-radius: 0%;
}


.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}

.nav-pills-custom {
    width: 100%;
}

.route-description {
    /*max-width: 70%;*/
}
.router {
     border-left: 1px solid rgb(158, 165, 164);
     font-family: 'Roboto';
     /*max-width: 30%;
     flex: 0 0 30%;*/
     padding: 10px 20px 20px 20px;
}

.card-img-top{
    height: auto;
    width: 100px;
    float: left;
    margin-top: 15px;
}

.router-info {
    overflow: hidden;
    padding: 10px 20px 10px 0px;
    margin-top: 15px;
}

.router-name{
    font-size: 18px;
    margin-bottom: 0; 
    color: black;
}

.route-date{
    color: #72c02c;  
    margin-bottom: 0; 
}

.router-routes{
    color:rgb(85, 60, 60);
}

.tab-content {
    border: 1px solid #dee2e6;
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