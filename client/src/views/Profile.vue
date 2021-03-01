<template>
  <div class="container" v-if="currentUser">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.User.name}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.User.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.User.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }  
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  }
};
</script>