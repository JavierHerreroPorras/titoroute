<template>
  <div class="col-md-9 mx-auto">
      <!--Profile Body-->
      <div class="profile-body margin-bottom-20">
          <div class="tab-v1">
              <ul class="nav nav-justified nav-tabs">
                  <li class="active"><a data-toggle="tab" href="#profile">Edit Profile</a></li>
                  <li><a data-toggle="tab" href="#passwordTab">Change Password</a></li>
              </ul>          
              <div class="tab-content">
                  <div id="profile" class="profile-edit tab-pane fade in active">
                      <h2 class="heading-md">Consulta tus datos</h2>
                      <p>Aquí puedes consultar los datos relacionados con tu cuenta</p>

                      <p>Nombre: {{user.User.name}}</p>
                      <p>Apellidos: {{user.User.surname}}</p>
                      <p>Email: {{user.User.email}}</p>
                      

                      <div v-if="user.User.role === 'Router'" class="mt-4">
                        <h2>Consulta las rutas que has creado</h2>
                        <div class="user-routes">
                          <div v-for="(r,index) of getRoutes" :key="index">
                            <div class="card bg-light border-secondary">
                              <div class="row no-glutters p-3"> 
                                <img :src=r.imageURL class="col-4 route-img" alt="Imagen de la ruta"> 
                                <div class="col-8">
                                  <div class="row align-items-start">
                                    <router-link 
                                      :to="{ name: 'Ruta', params: { id: r._id }}" 
                                      class="card-title h4 stretched-link col-10"
                                    >
                                      {{r.name}}
                                    </router-link>

                                    <span class="badge badge-pill badge-primary">{{r.score}}</span>

                                  </div>
                                  
                                  <p class="card-text small mt-2 crop-text">{{r.description}}</p>
                                
                                  <div class="row align-items-center">
                                    <div class="col-12 row">
                                      <h5 class="mx-auto"><span class="d-block badge bg-info text-white my-2">Personas: {{r.people}}</span></h5>
                                      <h5 class="mx-auto"><span class="d-block badge bg-info text-white my-2">Duración: {{r.duration}} días</span></h5>
                                    </div>
                                    
                                    <div class="col-12">
                                      <h5>
                                        <span class="badge bg-info text-white ml-n3">
                                          Precio: {{r.price}} €
                                        </span>
                                      </h5>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      
                  </div>

                  <div id="passwordTab" class="profile-edit tab-pane fade">
                      <h2 class="heading-md">Manage your Security Settings</h2>
                      <p>Change your password.</p>
                      
                      <form class="sky-form" id="sky-form4" action="">
                          <dl class="dl-horizontal">
                              <dt>Username</dt>
                              <dd>
                                  <section>
                                      <label class="input">
                                          <i class="icon-append fa fa-user"></i>
                                          <input type="text" placeholder="Username" name="username">
                                          <b class="tooltip tooltip-bottom-right">Needed to enter the website</b>
                                      </label>
                                  </section>
                              </dd>
                              <dt>Email address</dt>
                              <dd>
                                  <section>
                                      <label class="input">
                                          <i class="icon-append fa fa-envelope"></i>
                                          <input type="email" placeholder="Email address" name="email">
                                          <b class="tooltip tooltip-bottom-right">Needed to verify your account</b>
                                      </label>
                                  </section>
                              </dd>
                              <dt>Enter your password</dt>
                              <dd>
                                  <section>
                                      <label class="input">
                                          <i class="icon-append fa fa-lock"></i>
                                          <input type="password" id="password" name="password" placeholder="Password">
                                          <b class="tooltip tooltip-bottom-right">Don't forget your password</b>
                                      </label>
                                  </section>
                              </dd>
                              <dt>Confirm Password</dt>
                              <dd>
                                  <section>
                                      <label class="input">
                                          <i class="icon-append fa fa-lock"></i>
                                          <input type="password" name="passwordConfirm" placeholder="Confirm password">
                                          <b class="tooltip tooltip-bottom-right">Don't forget your password</b>
                                      </label>
                                  </section>
                              </dd>    
                          </dl>
                          <label class="toggle toggle-change"><input type="checkbox" checked="" name="checkbox-toggle-1"><i></i>Remember password</label>
                          
                          <section>
                              <label class="checkbox"><input type="checkbox" id="terms" name="terms"><i></i><a href="#">I agree with the Terms and Conditions</a></label>
                          </section>
                          <button type="button" class="btn-u btn-u-default">Cancel</button>
                          <button class="btn-u" type="submit">Save Changes</button>
                      </form>    
                  </div>

                  

              </div>
          </div>    
      </div>
      <!--End Profile Body-->
  </div>


                      
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Profile',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

    getRoutes() {
      return this.userRoutes;
    },

    ...mapState('auth', ['user']),
    
    ...mapState('route', ['userRoutes']) 
  },
  methods: {
    ...mapActions({
      getUserRoutes: 'route/getUserRoutes'
    }),

    createNewRoute(){
      this.$router.push({name: 'createRoute'});
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  },
  async created() {
    await this.getUserRoutes(this.user.User._id);
  },
};
</script>

<style scoped>
  .route-img{
    max-width: 250px;
    max-height: 250px;
  }

  .user-routes{
    overflow: auto; 
    height: 500px
  }
</style>