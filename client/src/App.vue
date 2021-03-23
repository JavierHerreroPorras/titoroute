
<template>
  <div id="page">
    <app-nav/>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import AppNav from './components/AppNav.vue';
export default {
  components: {
    AppNav
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');

#page{
  background-color: #e3f0e3
;
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
