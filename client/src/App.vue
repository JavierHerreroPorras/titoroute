
<template>
  <div>
    <div id="menu" class="row align-items-center">
      <div class="col-5 my-4 d-flex">
        <router-link to="/"><img src="./assets/logo.png" alt="" class="ml-5"></router-link>
        <!-- <router-link to="/rutas">Rutas</router-link> -->
      </div>
      
      <div class="col-7 my-4 align-items-center">
        <div v-if="!currentUser" class="d-flex flex-row-reverse">
            <router-link to="/login" class="mr-5 userActive">
              <font-awesome-icon icon="sign-in-alt" class="userActive mr-1"/> Iniciar sesión
            </router-link>


            <router-link to="/register" class="mr-5 userActive">
              <font-awesome-icon icon="user-plus" class="userActive mr-1"/> Crear cuenta
            </router-link>

        </div>

        <div v-if="currentUser" class="d-flex flex-row-reverse">

            <cart class= "mr-5" />

            <a class="mr-5 userActive" href @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" class="userActive mr-1"/> Cerrar sesión
            </a>

            <router-link to="/profile" class="mr-5 userActive">
              <font-awesome-icon icon="user" class="userActive mr-1" />
               {{ currentUser.name}} {{ currentUser.surname }}
            </router-link>

        </div>

      </div>
      
    </div>
    
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart.vue';
export default {
  components: { Cart },
  computed: {
    currentUser() {
      if(this.$store.state.auth.status.loggedIn){
        return this.$store.state.auth.user.User;
      }
      else{
        return false;
      }
      
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout',this.currentUser);
      this.$router.push('/login');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');

.userActive {
  color: black;
  font-family: Assistant;
  font-size: 19px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(243, 165, 165, 0.055);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
