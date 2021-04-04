<template>
    <!-- <hello-world/> -->
     <!-- <div class="home">
        <h1>Bienvenido a titoroute</h1>
        <p>En este portal podrá encontrar diferentes rutas turísticas creadas para todo tipo de públicos (aventura, relax, playa, senderismo, gastronómicas...) sin necesidad de buscar hoteles y ajustar las fechas para los destinos. </p>

        <div class="row">
            <div class="col">
                <router-link :to="{name: 'Rutas'}"><button type="button" class="btn btn-primary btn-lg">Ver rutas</button></router-link>
            </div>
            
        </div>
    </div> -->

    <div class="w3-display-container" style="margin-bottom:50px">
        <img src="../assets/fondo2.jpeg" style="width: 100%">
        <div class="w3-display-bottomleft w3-container w3-amber w3-hover-orange"
        style="top:15%;opacity:0.8;width:70%">
        <h2><b>¡Bienvenido a SocialRoute!</b></h2>
        <h4>¿Buscas una ruta turística de aventura? ¿O por el contrario quieres recorrer playas y calas paradisíacas? <br>¡Entra para ver todas las rutas que hemos preparado para ti!</h4>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Englebert&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kavoon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

.w3-hide-small{display:none!important}
.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#8dd4a8 !important}
.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#9ce9b9!important}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.w3-container,.w3-panel{padding:0.01em 16px}
.w3-display-bottomleft{position:absolute;left:0;top:0}
.w3-display-container{
    position:relative;
    font-family: "Quicksand";
    font-weight: 900
}

.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-position{position:absolute}
.home {
  background-image: url("../assets/fondo0.jpg");
  background-size: 100% 100%;
  height: 80vh;
  width: 90%;
  margin: auto;
}

h1 {
    padding-top: 2.5rem;
    color: darkmagenta;
    font-family: Kavoon;
}

p{
    margin: 3rem;
    font-family: Quicksand;
}

</style>
