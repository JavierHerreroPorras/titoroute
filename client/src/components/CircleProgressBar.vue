<template>
<div class="wrapper">
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
const $ = require('jquery')
import 'jquery-circle-progress';
window.$ = $

export default {
    name: 'CircleProgressBar',
    props: {
        value: String,
        titulo: String
    },
    mounted() {
        console.log(parseFloat(this.value))
      $("#" + this.titulo).circleProgress({
                startAngle: -1.55,
                size: 150,
                value: parseFloat(this.value)/10,
                fill: {gradient: ['#a445b2', '#fa4299']}
            })
    }
}
</script>

<style scoped>
*{
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
  width: 650px;
  display: flex;
  border: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.wrapper .card{
  background: #fff;
  width: calc(33% - 20px);
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
    width: calc(50% - 20px);
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