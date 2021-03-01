<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />


      <form name="form" @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="name">Name</label>
              <input type="text" v-model="user.name" id="name" name="name" class="form-control"
                :class="{ 'is-invalid': isSubmitted && v$.user.name.$error }" />
            <div v-if="isSubmitted && !v$.user.name.$required" class="invalid-feedback">Name field is required</div>           
          </div>

          <div class="form-group">
            <label for="name">Surname</label>
              <input type="text" v-model="user.surname" id="surname" name="surname" class="form-control"
                :class="{ 'is-invalid': isSubmitted && v$.user.surname.$error }" />
            <div v-if="isSubmitted && !v$.user.surname.$required" class="invalid-feedback">Surname field is required</div>           
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" v-model="user.email" id="email" name="email" class="form-control"
                :class="{ 'is-invalid': isSubmitted && v$.user.email.$error }" />
            <div v-if="isSubmitted && !v$.user.email.$required" class="invalid-feedback">Email field is required</div>
        
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="user.password" id="password" name="password" class="form-control"
                :class="{ 'is-invalid': isSubmitted && v$.user.password.$error }" />
            <div v-if="isSubmitted && v$.user.password.$error" class="invalid-feedback">
                <span v-if="!v$.user.password.$required">Password field is required</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Confirm password</label>

          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email} from '@vuelidate/validators';
import User from '../models/user';

export default {
  name: 'Register',
  setup() {
    return { v$: useVuelidate()}
  },
  data() {
    return {
      user: new User('', '', '', ''),
      isSubmitted: false,
      successful: false,
      message: ''
    };
  },
  validations: {
    user: {
      name: { required },
      surname: {required},
      password: { required },
      email: { required, email }
    }
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
      this.message = '';
      this.isSubmitted = true;

      this.v$.$touch();
      if (this.v$.$invalid) {
        this.isSubmitted = true;
        return;
      }

      if (this.user.name && this.user.surname && this.user.password && this.user.email) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = 'User succesfully created';
              this.successful = true;
            },
            error => {
              this.message = 'Error creating user';
              this.successful = false;
            }
          );
      };
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