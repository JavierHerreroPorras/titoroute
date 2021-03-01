<template>
  <div class="mx-4" id="containerRoutes">
    <h1>Estas son las rutas que ofrecemos</h1>

    <div v-if="loading">Cargando información...</div>
    <div v-else>
      <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
        <div class="col mb-4" v-for="(p,index) in displayed" :key="index">
          <cardRoute 
            :name="p.name"
            :description="p.description"
            :imageURL="p.imageURL"
            :duration="p.duration"
            :people="p.people"
            :price="p.price"
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