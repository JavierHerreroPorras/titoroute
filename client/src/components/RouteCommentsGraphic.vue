<template>
  <!-- Este componente representa el gráfico de puntuación de un aspecto de la ruta -->
  <div class="wrapper mt-3">
    <div class="card border-0">
      
      <div class="text">{{titulo}}</div>
      
      <div class="circle">
        <div class="bar" :id="titulo"></div>
        <div class="box"><span>{{value}}</span></div>
      </div>
      
    </div>
  </div>
</template>

<script>

  // Utilizamos jquery para mostrar la barra de progreso
  import 'jquery-circle-progress';

  export default {
      name: 'CircleProgressBar',
      props: {
          value: Number,
          titulo: String
      },
      mounted() {
        // Configuramos la barra de progreso
        window.$("#" + this.titulo).circleProgress({
            startAngle: -1.55,
            size: 150,
            value: parseFloat(this.value.toString())/10,
            //fill: {gradient: ['#a1a2a3', '#b3f4f1']}
            fill: 'rgb(55, 151, 151)'
        })
      }
  }
</script>

<style scoped>
*{
  color: rgb(55, 151, 151);
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
}
.wrapper{
  display: flex;
  border: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.wrapper .card{
  background: #fff;
  width: calc(100%);
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.wrapper .card .circle{
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  cursor: default;
}
.card .circle .box,
.card .circle .box span{
  position: absolute;
  top: 50%;
  left: 50%;
}
.card .circle .box{
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.2s;
}
.card .circle .box span,
.wrapper .card .text{
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.circle .box span{
  font-size: 38px;
  font-family: sans-serif;
  font-weight: 600;
  transform: translate(-45%, -45%);
  transition: all 0.1s;
}
.card .text{
  font-size: 20px;
  font-weight: 600;
}
@media(max-width: 753px){
  .wrapper{
    max-width: 700px;
  }
  .wrapper .card{
    margin-bottom: 20px;
  }
}
@media(max-width: 505px){
  .wrapper{
    max-width: 500px;
  }
  .wrapper .card{
    width: 100%;
  }
}
</style>