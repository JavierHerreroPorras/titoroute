<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />

      <!-- En este formulario pedimos el usuario y la contraseña para hacer el inicio de sesión -->
      <Form @submit="handleLogin" :validation-schema="schema" v-slot="{ errors }">
         <div class="form-row">
            <div class="form-group col-12">
                <label>Email</label>
                <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" v-model="user.email"/>
                <div class="invalid-feedback">{{errors.email}}</div>
            </div>

            <div class="form-group col-12">
                <label>Password</label>
                <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" v-model="user.password"/>
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
         </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>

        
        <div v-if="errorMsg" class="alert alert-danger" role="alert">
            <p>{{errorMsg}}</p>
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
  name: 'Login',
  setup() {
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    return {
        schema,
    };
  },
  components: {
    Form,
    Field,
  },
  data() {
    return {
      user: new User('', '', '', ''),
      loading: false,
      isSubmitted: false,
      errorMsg: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      /*this.loading = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        this.isSubmitted = true;
        this.loading = false;
        return;
      }*/

      if (this.user.email && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/profile');
          },
          error => {
            this.loading = false;
            this.errorMsg = error.response.data.error;
            return;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
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