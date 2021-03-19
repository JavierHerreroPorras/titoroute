<template>
    <div id="menu" class="row align-items-center">
      <div class="col-5 d-flex">
        <router-link to="/rutas"><img src="../assets/logo4.png" alt="" class="ml-5"></router-link>
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
  background-color: #409292;
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
