
<template>
  <div>
    <div class="row align-items-center">
      <div class="col-6 my-4 d-flex">
        <router-link to="/"><img src="./assets/logo.png" alt="" class="ml-5"></router-link>
        <!-- <router-link to="/rutas">Rutas</router-link> -->
      </div>
      
      <div class="col-6 my-4">
        <div v-if="!currentUser" class="d-flex justify-content-around align-items-baseline">
            <router-link to="/register" class="">
              <font-awesome-icon icon="user-plus" />Sign Up
            </router-link>
            
            <router-link to="/login" class="">
              <font-awesome-icon icon="sign-in-alt" />Login
            </router-link>

        </div>

        <div v-if="currentUser" class="d-flex justify-content-around">
            <router-link to="/profile" class="">
              <font-awesome-icon icon="user" />
              {{ currentUser.name}} {{ currentUser.surname }}
            </router-link>

            <a class="" href @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" />LogOut
            </a>

        </div>
      </div>
      
    </div>
    
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
