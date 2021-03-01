<template>
    <!-- <hello-world/> -->
    <div class="home">
        <h1>Bienvenido a titoroute</h1>
        <p>En este portal podrá encontrar diferentes rutas turísticas creadas para todo tipo de públicos (aventura, relax, playa, senderismo, gastronómicas...) sin necesidad de buscar hoteles y ajustar las fechas para los destinos. </p>

        <div class="row">
            <div class="col">
                <router-link :to="{name: 'Rutas'}"><button type="button" class="btn btn-info btn-lg">Ver rutas</button></router-link>
            </div>
            
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
