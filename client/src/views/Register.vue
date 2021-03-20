<template>
  <div class="col-md-9 mx-auto">
    <div class="card card-container w-100">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />

      <Form @submit="handleRegister" :validation-schema="schema" v-slot="{ errors }">
        <div class="">
            <div class="form-group col">
                <label class="float-left">Nombre</label>
                <Field name="firstName" type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" v-model="user.name"/>
                <div class="invalid-feedback">{{errors.firstName}}</div>
            </div>
            <div class="form-group col">
                <label class="float-left">Apellidos</label>
                <Field name="lastName" type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" v-model="user.surname"/>
                <div class="invalid-feedback">{{errors.lastName}}</div>
            </div>
            <div class="form-group col">
                <label class="float-left">Email</label>
                <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" v-model="user.email"/>
                <div class="invalid-feedback">{{errors.email}}</div>
            </div>
        </div>
        <div class="">
            <div class="form-group col">
                <label class="float-left">Contraseña</label>
                <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" v-model="user.password"/>
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group col">
                <label class="float-left">Confirmar contraseña</label>
                <Field name="confirmPassword" type="password" class="form-control" :class="{ 'is-invalid': errors.confirmPassword }" />
                <div class="invalid-feedback">{{errors.confirmPassword}}</div>
            </div>
        </div>

        <div class="form-group router-accept row">
          <label for="router" class="col-7 text-left">¿Quieres ser router?</label>
          <div class="col-2 d-flex">
            <input type="radio" id="Si" name="router" value="Si" v-model="router">
            <label for="male" class="ml-2">Si</label>
          </div>
          <div class="col-2 d-flex">
            <input type="radio" id="No" name="router" value="No" checked="checked" v-model="router">
            <label for="male" class="ml-2">No</label>  
          </div>
        </div>

        <div id="router-info" v-if="router === 'Si'">
          <div id="router" class="form-group col">
            <label for="NIF" class="float-left">NIF</label>
            <Field name="nif" type="text" class="form-control" :class="{ 'is-invalid': errors.nif }" v-model="user.nif"/>
            <div class="invalid-feedback">{{errors.nif}}</div>
            <!-- <input type="text" class="form-control" v-model="user.nif"/> -->
            </div>

          <div id="router" class="form-group col">
            <label for="phone" class="float-left">Número de teléfono</label>
            <Field name="phone" type="text" class="form-control" :class="{ 'is-invalid': errors.phone }" v-model="user.phone"/>
            <div class="invalid-feedback">{{errors.phone}}</div>
            <!-- <input type="text" class="form-control" v-model="user.phone"/> -->
          </div>
        </div>

          <div class="form-group col row mx-auto text-center" style="">
              <Field name="acceptTerms" class="col-1" type="checkbox" id="acceptTerms" value="true" :class="{ 'is-invalid': errors.acceptTerms }" />
              <label for="acceptTerms" class="col-9 pr-0 pl-0 ml-2">Acepto los Términos y Condiciones</label>
              <div class="invalid-feedback">{{errors.acceptTerms}}</div>
          </div>
        
        


        <div class="form-group">
            <button type="submit" class="btn btn-primary mr-1">Register</button>
        </div>
    </Form>



    </div>
  </div>
</template>

<script>
import User from '../models/user';

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
  name: 'Register',
  components: {
    Form,
    Field,
  },
  setup() {
        const schema = Yup.object().shape({
            firstName: Yup.string()
                .required('El nombre es obligatorio'),
            lastName: Yup.string()
                .required('Los apellidos son obligatorios'),
            email: Yup.string()
                .required('El email es obligatorio')
                .email('El email es incorrecto'),
            password: Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es obligatoria'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Ambas contraseñas deben coincidir')
                .required('Este campo es obligatorio'),
            nif: Yup.string()
                .min(9,'El NIF no es válido')
                .required('Se requiere el NIF'),
            phone: Yup.string()
                .matches(/[0-9]{9}/,'El número de teléfono no es válido')
                .required('Se requiere el número de teléfono'),
            acceptTerms: Yup.string()
                .required('Debes aceptar los términos y condiciones')
        });

        return {
            schema,
        };
    },
  data() {
    return {
      user: new User('', '', '', '', '', '', ''),
      router: 'No',
      isSubmitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {


      //if (this.name && this.user.surname && this.user.password && this.user.email) {
        //if(this.router === 'No' || (this.router === 'Si' && this.user.phone && this.user.nif)){
        if(this.router === 'Si'){
          this.user.role = 'Router';
        }

        else{
          this.user.role = 'User';
        }

        console.log(this.user)
        
        /*this.$store.dispatch('auth/register', this.user).then(
          data => {
            this.message = 'User succesfully created';
            this.successful = true;
          },
          error => {
            this.message = 'Error creating user';
            this.successful = false;
          }
        );*/
        //}
          
      //};
    }
  }
};
</script>

<style scoped>

input{
  flex: 0;
}

.router-accept{
  margin-left: 15px;
  margin-right: 15px;
}

label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 50% !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>