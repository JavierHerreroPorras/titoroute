<template>
  <div class="mx-4 mt-5" id="containerRoutes"> 
    <!-- Barra buscadora -->
    <div class="container">
      <div class=" justify-content-center w-100 align-items-center row">
          <select class="countrySelect col-4" v-model="countrySelected">
            <option>España</option>
            <!-- <option>Portugal</option>
            <option>República Checa</option> -->
          </select>
          <div class="searchbar col-8 ml-5">
            <input class="search_input pl-3" type="text" v-on:keyup.enter="searchRoute()" v-model="searchValue" placeholder="Search route...">
            <a class="search_icon" @click="searchRoute()"><font-awesome-icon icon="search"/></a>
          </div>
      </div>
    </div>

    

    <!-- Aquí se mostrarán las tarjetas de cada ruta -->
    <div v-if="loading">
      Cargando información...
    </div>
    <div v-else class="mt-4">
      <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
        
        <div class="col mb-4" v-for="(p,index) in displayed" :key="index">
          <route-card 
            :name="p.name"
            :description="p.description"
            :imageURL="p.imageURL"
            :duration="p.duration"
            :people="p.people"
            :price="p.price"
            :id="p._id"
            :score="p.averageScore"
            />
        </div>

        
      </div>
      
      <!-- Paginación de las rutas (se realiza en el cliente) -->
      <div class="justify-content-center mt-4">
        <v-pagination
          v-model="page"
          :pages="totalPages"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="updatePagination"
          class="d-flex justify-content-center"
        />	
      </div>
    </div>	
  </div>
</template>

<script>
  import RouteCard from '@/components/RouteCard.vue'
  import { ref } from 'vue';
  import VPagination from "vue3-pagination";
  import "vue3-pagination/dist/vue3-pagination.css";

  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {
    name: 'Routes',
    components: {
      RouteCard,
      VPagination,
    },
    setup() {
      const page = ref(1);
      return { page };
    },
    data() {
      return {
        numberRoutes : 0,
        totalPages: 0,
        perPage: 8,
        loading: true,
        countrySelected: 'España',
        searchValue: ''	
      }
    },
    methods: {
      ...mapActions({
          getServerRoutes: 'route/getRoutes',
      }),

      ...mapMutations({
        setRoutes: 'route/setRoutesSearch'
      }),

      calculatePages(){
        // Calcular el número total de rutas y el número de páginas que necesitaré
        this.numberRoutes = this.routesSearch.length;
        this.totalPages = Math.ceil(this.numberRoutes / this.perPage);
      },

      searchRoute(){
        const search = this.routes.filter(route => (route.name.toLowerCase().includes(this.searchValue.toLowerCase()) || route.description.toLowerCase().includes(this.searchValue.toLowerCase())));
        
        this.setRoutes(search);

        this.calculatePages();
      },

      // Recogemos las rutas del servidor y calculamos el total de páginas que ocuparán
      async getRoutes () {
      
        // Recoger las rutas del servidor
        await this.getServerRoutes(this.countrySelected);
        this.loading = false;
        
        this.calculatePages();
      },

      // Paginamos los índices de las rutas (seleccionamos las rutas en función de la página en la
      // que nos encontramos)
      paginate () {
        let from = (this.page * this.perPage) - this.perPage;
        let to = (this.page * this.perPage);

        if(this.numberRoutes < to){to = this.numberRoutes}

        return [from,to];
      },

      // Actualizamos las rutas cuando cambiamos de página
      updatePagination() {
        document.getElementById("containerRoutes").scrollIntoView();
      }
    },
    computed: {
      ...mapState('route', ['routes','routesSearch']),

      // Seleccionamos las rutas que mostraremos
      displayed() {
        const [from, to] = this.paginate();
        return this.routesSearch.slice(from,to);
      }
    },
    created(){
      this.getRoutes();
    },
    watch: {
      'countrySelected': 'getRoutes'
    },
    
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');

  .countrySelect{
    color: rgb(94, 33, 33);
    outline: 0;
    font-size: 18px;
    font-family: Assistant;
    max-width: 200px;
    padding-left: 0;
    padding-right: 0;
  }
  
  .searchbar{
    max-width: 410px !important;
    margin-bottom: auto;
    margin-top: auto;
    border-radius: 15px;
    border: 1px solid black;
    padding: 2px;
  }

  .search_input{
    color: rgb(94, 33, 33);
    border: 0;
    outline: 0;
    background: none;
    font-size: 22px;
    font-family: Assistant;
    width: calc(100% - 50px);
    caret-color:black;
    line-height: 40px;
    transition: width 0.4s linear;
    margin-left: 3px;
  }

  .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:black;
    text-decoration:none;
  }
</style>