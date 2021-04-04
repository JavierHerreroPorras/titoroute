<template>
    <div id="menu" class="row align-items-center">
      <div class="col-5 d-flex">
        <router-link to="/rutas"><img src="../assets/logo6.png" alt="" class="ml-5"></router-link>
      </div>
      
      <div class="col-7 my-4 align-items-center">
        <div v-if="!currentUser" class="d-flex flex-row-reverse">
            <router-link to="/login" class="mr-5 userActive">
              <font-awesome-icon icon="sign-in-alt" class="userActive mr-1"/> Iniciar sesión
            </router-link>


            <router-link to="/register" class="mr-5 userActive">
              <font-awesome-icon icon="user-plus" class="userActive mr-1"/> Crear cuenta
            </router-link>

            <router-link to="/frequentQuestions" class="mr-5 userActive">
              <font-awesome-icon icon="question-circle" class="userActive mr-1"/> Ayuda
            </router-link>

        </div>

        <div v-if="currentUser" class="d-flex float-right mr-5 pr-5 align-items-baseline">

            <router-link to="/frequentQuestions" class="mr-5 userActive">
              <font-awesome-icon icon="question-circle" class="userActive mr-1"/> Ayuda
            </router-link>
            <div class="btn-group float-right">
              <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon icon="user" class="userActive mr-1" />
                    {{ currentUser.name}} {{ currentUser.surname }}
              </button>
              <div class="dropdown-menu dropdown-menu-right mt-2">
                <button class="dropdown-item" type="button">
                  <router-link to="/profile" class="userActive">
                    <font-awesome-icon icon="id-badge" class="userActive mr-2"/>
                    <span style="font-size:20px">Mi perfil</span>
                  </router-link>
                </button>
                <button class="dropdown-item" type="button">
                  <router-link :to="{name: 'createRoute'}" class="userActive">
                    <font-awesome-icon icon="plus-square" class="userActive mr-2"/>
                    <span style="font-size:20px">Crear ruta</span>
                  </router-link>
                </button>
                <button class="dropdown-item" type="button">
                  <a class="userActive" href @click.prevent="logOut">
                    <font-awesome-icon icon="sign-out-alt" class="userActive mr-1"/> 
                    <span style="font-size:20px">Cerrar sesión</span>
                  </a>
                </button>
              </div>
            </div>

        </div>

      </div>
      
    </div>
</template>

<script>
export default {
    name: 'AppNav',
      computed: {
    currentUser() {
      if(this.$store.state.auth.user !== null){
        this.$store.state.auth.status.loggedIn = true;
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');

#menu{
  background-color: #b43737;
   /* background-color: #c41919;*/
}

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
  background-color:rgb(202, 86, 86);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #b3bec9;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
