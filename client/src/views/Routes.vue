<template>
  <div class="mx-4" id="containerRoutes">

    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input pl-3" type="text" name="" placeholder="Search...">
          <a class="search_icon"><font-awesome-icon icon="search"/></a>
        </div>
      </div>
    </div>

    <div v-if="loading">Cargando información...</div>
    <div v-else class="mt-4">
      <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
        <div class="col mb-4" v-for="(p,index) in displayed" :key="index">
          <cardRoute 
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
// @ is an alias to /src
import cardRoute from '@/components/cardRoute.vue'
import { ref } from 'vue';
import VPagination from "vue3-pagination";
import "vue3-pagination/dist/vue3-pagination.css";

export default {
  name: 'Routes',
  components: {
    cardRoute,
    VPagination
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
      loading: true	
		}
  },
  methods: {
    getRoutes () {
      // Recoger las rutas de /api/route para guardarlas en el vector correspondiente
      this.$store.dispatch('route/getRoutes').then(
        () => {
          // Calcular el número total de rutas y el número de páginas que necesitaré
          console.log(this.$store.state.route.routes)
          this.numberRoutes = this.$store.state.route.routes.length;
          this.totalPages = Math.ceil(this.numberRoutes / this.perPage);
        }
      );
		},

    paginate () {
			let from = (this.page * this.perPage) - this.perPage;
			let to = (this.page * this.perPage);

      if(this.numberRoutes < to){to = this.numberRoutes}

			return [from,to];
		},

    updatePagination() {
      document.getElementById("containerRoutes").scrollIntoView();
    }
  },
  computed: {
		displayed() {
      const [from, to] = this.paginate();
			return this.$store.state.route.routes.slice(from,to);
		}
	},
  watch: {
    '$store.state.route.routes': function(){
      this.loading = false;
    }
  },
	created(){
		this.getRoutes();
	},
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');

    .searchbar{
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
    width: 350px;
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