<template>
  <div id="RouterInfo">
    
    <!-- Apoyar económicamente a un router -->
    <div class="container theme-background-white main-body">
      <div class="col-md-12">
        <div class="row donate-bar">  
          <div class="col-md-4 theme-blue">
            Apoya al router Francisco Javier Pérez Pérez
          </div>
          <div class="col-md-8">
            <ul class="nav donate-buttons" id="donate-buttons">
              <li><a>
                <button class="btn-blue active" data-dollars='5'>
                  5 €
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" data-dollars='10'>
                  10 € 
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" data-dollars='20'>
                  20 € 
                </button>
              </a></li>
              <li><a>
                <button class="btn-blue" data-dollars='50'>
                  50 € 
                </button>
              </a></li>
              <li id="other"><a>
                <button class="btn-blue-other" data-dollars='other'>
                  Otro
                </button>
              </a></li>
              <li id="other-input">
               <input>
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
                  <div class="modal-header well text-center theme-background-blue">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h2>Estás aportando:</h2>
                    <h1 style="font-size: 5.5em; margin-top: 0;"><span id="price"></span>€</h1>
                    <em>¡Muchas gracias!</em>
                  </div>
                  <div class="modal-body">
                    <div class="row">  
                      <section class="col-md-12">
                        <form class="d-flex">
                          <fieldset class="col-md-6">
                            <legend>
                              Información personal
                            </legend>
                            <label>Nombre completo</label>
                            <input type="string" class="form-control">
                            <label>Email</label>
                            <input type="email" class="form-control">
                            <label>Domicilio</label>
                            <input type="email" class="form-control">
                            <label>Localidad, Código Postal</label>
                            <input type="email" class="form-control">
                          </fieldset>
                          <fieldset class="col-md-6">
                            <legend>
                              Información bancaria
                            </legend>
                            <label for="card-number">Número de la tarjeta de crédito</label>
                            <input placeholder="1234 5678 9012 3456" pattern="[0-9]*" type="text" class="form-control card-number" id="card-number">
                            <label for="card-number">Fecha de vencimiento</label>
                            <input placeholder="MM/YY" pattern="[0-9]*" type="text" class="form-control card-expiration" id="card-expiration">
                            <label for="card-number">Número CVV</label>
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
                    <button type="button" class="btn-green">Continuar</button>
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
          </div>
        </div><!--/.donate-bar-->
      </div><!-- /.col-md-12 -->
    </div>

    <!-- Otras rutas creadas por este router -->
    <div id="RouterRoutes">
      <div class="row">
        <div class="col-12 mt-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">El router también ofrece:</h5>
              <p class="card-text">Aquí se mostrará un scroll con otras rutas de este router</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  // Utilizamos jQuery para gestionar la función de donación
  const $ = require('jquery');
  window.$ = $;


  export default {
      mounted() {
        $(document).ready(function(){

          $('#searchbar').focus();

          $('#donate-buttons').on('click', '.btn-blue', function(e) {
            e.preventDefault();
            $('.active').removeClass('active');
            $('#other-input').hide().siblings('#other').show();
            $(this).filter('.btn-blue').addClass("active");
            var value = $(this).data('impact');
            $(this).closest('div').find('p').text("" + value);
            $('#other-input').find('input').val('');  
          });
            
          $('.btn-green').on('click', function() {
            var dollar;
            var input = $('#other-input').find('input').val();
            if ( !input ) {
              dollar = $('.active').data('dollars');
            } else if ( $.trim(input) === '' || isNaN(input)) {
              console.log('Yes');
              dollar = "Please enter a number."; 
            } else {
              dollar = input;
            }
            $('#price').text(""+dollar);
          });

          $('#other').on('click', function(e) {
            e.preventDefault(); 
            var buttons = $(this).parent('#donate-buttons');
            buttons.find('.active').removeClass('active');
            var other = $(this).hide().siblings('#other-input');
            other.show();
            other.find('input').focus();
            var pText = buttons.siblings('p');
            pText.text("Thank you!");
            var oValue = other.find('input');
            oValue.keyup(function() {
              if ( oValue.val() > 50 ) {
                pText.text("Thank you!" + " You\'re donation covers housing and counseling services for " + oValue.val()/25 + " people.");
              } else {
                pText.text("Thank you!");
              }
            });
          }); 

        });
      },
  }
</script>

<style scoped>

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
      }



      .donate-bar {
        padding: 32px 23px 28px;
        align-items: center;
      }
      .donate-bar > div:first-child {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        border-right: 1px dotted #2a4f76;
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














</style>