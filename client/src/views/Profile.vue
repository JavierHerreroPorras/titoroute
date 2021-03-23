<template>

  <div class="col-md-9 mx-auto">
      <!--Profile Body-->
      <div class="row">
        <div class="col-6">
          <h2 class="heading-md">Consulta tus datos</h2>
            <p>Aquí puedes consultar los datos relacionados con tu cuenta</p>

            <p>Nombre: {{user.User.name}}</p>
            <p>Apellidos: {{user.User.surname}}</p>
            <p>Email: {{user.User.email}}</p>
        </div>

        <div class="col-6">
          <h2 class="heading-md">Cambia tu contraseña</h2>
            <Form @submit="handlePasswordChange" :validation-schema="schema" v-slot="{ errors }">   
              <div class="">
                  <div class="form-group col">
                      <label class="float-left">Contraseña antigua</label>
                      <Field name="oldPassword" type="password" class="form-control" :class="{ 'is-invalid': errors.oldPassword }" v-model="oldPassword"/>
                      <div class="invalid-feedback">{{errors.password}}</div>
                  </div>
                  <div class="form-group col">
                      <label class="float-left">Nueva contraseña</label>
                      <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" v-model="password"/>
                      <div class="invalid-feedback">{{errors.password}}</div>
                  </div>
                  <div class="form-group col">
                      <label class="float-left">Confirmar la nueva contraseña</label>
                      <Field name="confirmPassword" type="password" class="form-control" :class="{ 'is-invalid': errors.confirmPassword }" />
                      <div class="invalid-feedback">{{errors.confirmPassword}}</div>
                  </div>
              </div>
              <div class="alert">
                <div v-if="errorMsg" class="alert alert-danger" role="alert">
                  <p class="mb-0">{{errorMsg}}</p>
                </div>
                <div v-if="successMsg" class="alert alert-success" role="alert">
                    <p class="mb-0">{{successMsg}}</p>
                </div>
              </div>
              
              <div class="form-group">
                <button type="submit" class="btn btn-primary mr-1">Cambiar contraseña</button>
              </div>
            </Form>
        </div>
      </div>
                      
                      

      <div v-if="user.User.role === 'Router'" class="mt-4">
        
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#rutas" role="tab" aria-controls="home" aria-selected="true">Rutas</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#donaciones" role="tab" aria-controls="profile" aria-selected="false">Donaciones</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="rutas" role="tabpanel" aria-labelledby="home-tab">
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
          <div class="tab-pane fade row" id="donaciones" role="tabpanel" aria-labelledby="profile-tab">
            <h2>Consulta las donaciones que has recibido</h2>
            <div class="user-donations">
              <div v-for="(d,index) in getUserDonations" :key="index" class="mx-auto col-9">
              <div class="card">
                <div class="row no-glutters p-3 align-items-center"> 
                  <img class="img-thumbnail col-3 ml-3" src="../assets/user.png" alt="" style="max-width: 85px; max-height: 85px;">
                  <span class="col-9">{{d.donor_name}} te envió <span style="color: chocolate">{{d.quantity}} euros</span> en 
                  <strong>{{d.route_name}}</strong>
                  </span>
                </div>
              </div>
            </div>
            </div>
            <!--
            <p> Javier Herrero Parras te envió una donación de 5 euros en la Ruta por las playas de Menorca</p>-->
          </div>
    
        </div>
      </div>
                    
  </div>                    
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
  name: 'Profile',
  components: {
    Form,
    Field,
  },
  data() {
    return {
      password: "",
      oldPassword: "",
      errorMsg: "",
      successMsg: ""
    }
  },
  setup() {
        const schema = Yup.object().shape({
            oldPassword: Yup.string()
              .required('La antigua contraseña es obligatoria'),
            password: Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es obligatoria'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Ambas contraseñas deben coincidir')
                .required('Este campo es obligatorio'),
        });

        return {
            schema,
        };
    },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

    getRoutes() {
      return this.userRoutes;
    },

    getUserDonations() {
      return this.donations;
    },

    ...mapState('auth', ['user']),
    
    ...mapState('route', ['userRoutes']),
    ...mapState('router', ['donations'])  
  },
  methods: {
    ...mapActions({
      getUserRoutes: 'route/getUserRoutes',
      getDonations: 'router/getDonations'
    }),

    ...mapActions({
      changePassword: 'auth/changePassword'
    }),

    createNewRoute(){
      this.$router.push({name: 'createRoute'});
    },

    async handlePasswordChange(){
      const password = {
        oldPassword: this.oldPassword,
        newPassword: this.password
      }
      
      try {
        let response = await this.changePassword(password);
        this.successMsg = response.message;
        this.errorMsg = "";

      } catch (error) {
        this.errorMsg = error.response.data.error
        this.successMsg = "";
      }
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  },
  async created() {
    await this.getUserRoutes(this.user.User._id);
    await this.getDonations(this.user.User._id);
  },
};
</script>

<style scoped>

  .alert{
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 0px;
  }
  .route-img{
    max-width: 250px;
    max-height: 250px;
  }

  .user-routes{
    overflow: auto; 
    height: 500px
  }

  .user-donations{
    overflow: auto; 
    height: 500px
  }
</style>