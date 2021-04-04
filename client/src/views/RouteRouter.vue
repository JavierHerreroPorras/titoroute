<template>

  <div id="RouterInfo">
    <!-- Flexbox container for aligning the toasts -->
    <div id="snackbar">¡Gracias! Tu aportación se ha realizado correctamente.</div>

    <!-- Apoyar económicamente a un router -->
    <div class="mt-3 container">
      <div class="col-md-12 theme-background-white">
        <div class="row donate-bar">  
          <div class="col-12 theme-blue">
            ¿Te ha gustado la ruta? Considera apoyar económicamente al router {{routeInfo.Route.router_name}}
          </div>
          <div class="col-12 align-items-center mt-4">
            <ul class="nav donate-buttons" id="donate-buttons">
              <li><a>
                <button class="btn-blue active" @click="donationValue(5)">
                  5 €
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" @click="donationValue(10)">
                  10 € 
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" @click="donationValue(20)">
                  20 € 
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" @click="donationValue(50)">
                  50 € 
                </button>
              </a></li>
              <li id="other"><a>
                <button class="btn-blue-other" @click="donationValue()">
                  Otro
                </button>
              </a></li>
              <li id="other-input">
               <input v-model="donation">
               <span>€</span>
              </li>
              <li><a>
                <button class="btn-green" data-toggle="modal" data-target="#myModal">
                  Colabora
                </button>
              </a></li>
            </ul>


            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header well text-center theme-background-blue row mx-0">
                    <div class="col-11 row align-items-center">
                      <h2 class="col-9 pl-2 pr-0">Vas a apoyar al router con:</h2>
                      <h1 class="col-3">{{donation}} €</h1>                 
                    </div>
                    <button type="button" class="close col-1" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  </div>
                  <div class="modal-body" id="donation-modal">
                    <div class="row">  
                      <section class="col-md-12">
                        <form class="d-flex">
                          <fieldset class="col-md-6">
                            <legend>
                              Información personal
                            </legend>
                            <label class="mt-2">Nombre completo</label>
                            <input type="string" class="form-control">
                            <label class="mt-2">Email</label>
                            <input type="email" class="form-control">
                            <label class="mt-2">Domicilio</label>
                            <input type="string" class="form-control">
                            <label class="mt-2">Localidad, Código Postal</label>
                            <input type="string" class="form-control">
                          </fieldset>
                          <fieldset class="col-md-6">
                            <legend>
                              Información bancaria
                            </legend>
                            <label class="mt-2" for="card-number">Número de la tarjeta de crédito</label>
                            <input placeholder="1234 5678 9012 3456" pattern="[0-9]*" type="text" class="form-control card-number" id="card-number">
                            <label class="mt-2" for="card-number">Fecha de vencimiento</label>
                            <input placeholder="MM/YY" pattern="[0-1][0-9]/[0-9][0-9]" type="text" class="form-control card-expiration" id="card-expiration">
                            <label class="mt-2" for="card-number">Número CVV</label>
                            <input placeholder="CVV" pattern="[0-9]*" type="text" class="form-control card-cvv" id="card-cvv">
                            <!-- <label for="card-number">Billing Zip Code</label>
                            <input placeholder="ZIP" pattern="[0-9]*" type="text" class="form-control card-zip" id="card-zip"> -->
                          </fieldset>
                        </form>
                      </section>
                    </div>
                  </div>
                  <div class="modal-footer align-items-baseline">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
                    <button type="button" class="btn-green" @click="sendDonation()">Continuar</button>
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
          </div>
        </div><!--/.donate-bar-->
      </div><!-- /.col-md-12 -->
    </div>

    <!-- Otras rutas creadas por este router -->
    <div id="RouterRoutes" class="container mt-5">
      <div class="theme-background-white">
         <h4 class="theme-blue routes-title pt-4 mb-4">Consulta otras rutas realizadas por el router:</h4>
              <div class="user-routes">
                <div v-for="(r,index) of getRoutes" :key="index" class="mt-2">
                  <div class="card bg-light border-secondary route-card">
                    <div class="row no-glutters p-3"> 
                      <img :src=r.imageURL class="col-4 route-img" alt="Imagen de la ruta"> 
                      <div class="col-8">
                        <div class="align-items-start">
                          <router-link 
                            :to="{ name: 'Ruta', params: { id: r._id }}" 
                            class="card-title h4 stretched-link"
                            style="color: #3a1cca;"
                          >
                            {{r.name}}
                          </router-link>
                        </div>
                        
                        <p class="card-text small mt-2 p-2 d-none d-lg-block">{{r.description}}</p>
                      
                        <div class="card-details row align-items-center">
                            <span class="col-lg-5 pl-2 pr-0 order-2" style="font-size: 16px; font-weight: bold; color: #3e0771;">Duración: {{r.duration}} dias ({{r.people}} personas)</span>
                            <span class="col-lg-3 pl-0 pr-0 order-3" style="font-size: 16px; font-weight: bold; color: #3e0771;">Precio: {{r.price}} €</span>
                            <span class="col-lg-4 badge order-1" style="font-size: 16px; font-weight: bold; color: rgb(53, 89, 60);">Valoración media: {{r.averageScore}}</span>
                          
                        </div>

                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
    </div>
  </div>

</template>

<script>

  // Utilizamos jQuery para gestionar la función de donación

  import { mapActions, mapState } from 'vuex';

  export default {
    data() {
      return {
        donation: 5,
      }
    },
    async created() {
      await this.getUserRoutes(this.routeInfo.Route.router_id);
    },
    computed: {
      ...mapState('route', ['userRoutes', 'routeInfo']),

      ...mapState('auth', ['user']),

      getRoutes() {
        if( this.userRoutes !== null){
          return this.userRoutes.filter(route => route._id !== this.routeInfo.Route._id);
        }
      },
    },
    methods: {
      ...mapActions({
        getUserRoutes: 'route/getUserRoutes',
        sendUserDonation: 'route/sendUserDonation'
      }),

      donationValue(value){
        this.donation = value;
      },

      async sendDonation(){
        const donation = {
          date: new Date().toLocaleDateString(),
          quantity: this.donation,
          donor_name: this.user.User.name + ' ' + this.user.User.surname,
          donor_id: this.user.User._id,
          route_name: this.routeInfo.Route.name,
          router_id: this.routeInfo.Route.router_id
        }

        await this.sendUserDonation(donation);

        window.$('#myModal').modal('toggle');

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
      }
    },
      mounted() {
        window.$(document).ready(function(){

          window.$('#searchbar').focus();

          window.$('#donate-buttons').on('click', '.btn-blue', function(e) {
            e.preventDefault();
            window.$('.active').removeClass('active');
            window.$('#other-input').hide().siblings('#other').show();
            window.$(this).filter('.btn-blue').addClass("active");
          });

           window.$('#other').on('click', function(e) {
             e.preventDefault(); 
             var buttons = window.$(this).parent('#donate-buttons');
             buttons.find('.active').removeClass('active');
             var other = window.$(this).hide().siblings('#other-input');
             other.show();
             other.find('input').focus();
           });

        });
      },
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.routes-title{
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  margin-top: 19px;
  font-size: 25px;
  padding: 0;
}

#donation-modal{
  font-family: "Roboto", sans-serif;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 10px;
  position: fixed;
  z-index: 1;
  /*left: 50%;*/
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  left: 50%;
  -webkit-transform: translate(-15%, -50%);
  transform: translate(-15%, -50%);
  -webkit-animation: fadein 0.5s, fadeout 0.5s 4.5s;
  animation: fadein 0.5s, fadeout 0.5s 4.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

.card-title{
  font-family: "Libre Franklin", sans-serif;
}

.card-text{
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

  .user-routes{
    overflow: auto; 
    height: 500px
  }
.router {
     border-left: 1px solid rgb(158, 165, 164);
     font-family: 'Roboto';
     /*max-width: 30%;
     flex: 0 0 30%;*/
     padding: 10px 20px 20px 20px;
}

.card-img-top{
    height: auto;
    width: 100px;
    float: left;
    margin-top: 15px;
}

.router-info {
    overflow: hidden;
    padding: 10px 20px 10px 0px;
    margin-top: 15px;
}

.router-name{
    font-size: 18px;
    margin-bottom: 0; 
    color: black;
}

.route-date{
    color: #72c02c;  
    margin-bottom: 0; 
}

.router-routes{
    color:rgb(85, 60, 60);
}




/* DONATION */

   .theme-blue {
        color: #427bb8;
      }
      .theme-orange {
        color: #cc851c;
      }
      .theme-green {
       color: #8ab042;
      }
      .theme-grey {
        color: #666666;
      }
      .theme-white {
        color: #fff;
      }
      .theme-background-blue {
        background-color: #427bb8;
        color: #fff;
      }
      .theme-background-orange {
        background-color: #cc851c;
        color: #fff;
      }
      .theme-background-green {
        background-color: #8ab042;
        color: #fff;
      }
      .theme-background-grey {
        background-color: #666666;
        color: #fff;
      }
      .theme-background-white {
        background-color: #fff;
        color: #4c4c4c;
      }


    .close {
        padding: 0;
        margin: 0
    }

      .modal-dialog{
          max-width: 700px;
      }

      .donate-buttons{
        align-items: baseline;
        width: 550px;
        margin: auto;
      }

      .donate-bar {
        padding: 32px 23px 28px;
        align-items: center;
      }
      .donate-bar > div:first-child {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        margin-top: 19px;
        font-size: 25px;
        padding: 0;
      }
      .donate-buttons>li>a {
        font-size: 17px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        position: relative;
        display: block;
        padding: 10px 3px;
        border-radius: 5px;
      }
      .btn-blue-other,
      .btn-blue {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        background-color: #427bb8;
        color: #fff;
        border-radius: 5px;
        border: 0;
        padding: 0;
        width: 75px;
        height: 37px;
        margin-top: 8px;
      }
      .btn-green {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        background-color: #8ab042;
        color: #fff;
        border-radius: 5px;
        border: 0;
        padding: 0;
        width: 114px;
        height: 37px;
        margin-top: 8px;
      }
      #other-input {
        display:none;
        border-radius: 5px;
        border: 0;
        border: 5px solid #427bb8;
      }
      #other-input input {
        text-align: right;
        padding-right: 5px;
        font-weight: bold;
        background-color: #fff;
        color: #427bb8;
        width: 56px;
        height: 27px;
        border: 0;
      }

      #other-input input:focus{
            outline: none;
        }
      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
       margin: 0; 
      }
      #other-input span {
        font-family: inherit;
        font-weight:bold;
        color: #427bb8;
        /*position: absolute;
        padding: 23px 12px;
        z-index: 10;
        pointer-events: none;*/
      }
      .impact {
        font-size: 1.1em;
        font-weight: bold;
        clear: both;
      }
      .nav>li>a:hover, .nav>li>a:focus {
        text-decoration: none;
        background-color: transparent;
      }
      .donate-buttons .active {
        background-color: #fff;
        border: 5px solid #427bb8;
        color: #427bb8;
      }
      .donate-buttons:focus {
      outline: -webkit-focus-ring-color auto 0px;
      }
      .donate-buttons li:last-child {
        font-size: 17px;
        line-height: 37px;
        padding-left: 15px;
      }

@media (min-width: 576px) {

  .card-details{
    margin-top: 1rem;
  }
  .donate-buttons{
    max-width: 420px;
  }
  .donate-buttons li:last-child{
    padding-left: 0px;
  }
}

@media (min-width: 768px) {
  .donate-buttons{
    max-width: 550px;
  }
  .donate-buttons li:last-child{
    padding-left: 15px;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}












</style>