<template>

	<!-- Este componente representa un día en la timeline de la pestaña de Planning -->
	<div id="RoutePlanningDay">
		<div v-if="number === 2" class=""></div>
		
		<li :class = "(isEven)?'':'timeline-inverted'" v-if="number !== undefined">
			<div class="timeline-badge primary"><font-awesome-icon icon="circle"/></div>
			
			<div class="timeline-panel">

				<div class="timeline-heading">  
					<img :src=imageURL class="img-fluid w-100" alt="...">      
					              
				</div>

				<div class="mt-1 timeline-body text-justify-center">
					<p class="day-title h4">Día {{number}}: {{title}}</p>
					<p class="day-description mt-4 crop-text mb-0">{{description}}</p>
				</div>
				
				<button class="remove-day my-2 ml-3 px-3 py-1 float-left" @click="removeDayFromRoute()">Eliminar día de la ruta</button>
				<button class="read-more my-2 mr-3 px-3 py-1 float-right" @click="redirectToDetails()">Leer más </button>
			</div>
		</li> 
			
	</div>   

</template>

<script>

	import { mapState } from 'vuex';

	export default {
		name: 'RouteDetailsVue',
		props: {
			number: Number,
			info: String,
			description: String,
			imageURL: String,
			title: String,
		},
		computed: {

			...mapState('route', ['routeInfo']),

			// Este método nos ayuda a determinar el índice del día para la timeline
			isEven(){
				return this.number%2;
			}
		},
		methods: {

				//Este método se encarga de eliminar el día de la ruta que no queremos
				reorderRoute(newTimeline){
					
					//En primer lugar eliminamos el día
					if (this.number-1 > -1) {
						newTimeline.splice(this.number-1, 1);
					}

					//Reasignamos los índices de los días posteriores al que hemos eliminado
					for (var element of newTimeline){
						if(element.day_number > this.number){
							element.day_number--;
						}
					}
				},

				// Si pulsamos el botón del card del día, procedemos a borrarlo de la ruta
				removeDayFromRoute(){
						var newTimeline = this.routeInfo.RouteDetails.route_timeline;
						this.reorderRoute(newTimeline);
				},

				redirectToDetails(){
					this.$router.push({name: 'detalles'})
				}
		}, 
	}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');

.img-fluid{
	max-height: 320px;
}

.day-title{
	font-family: "Roboto", sans-serif;
	font-weight: 800;
	font-size: 23px;
}

.day-description{
	font-family: "Roboto", sans-serif;
	font-weight: 500;
	font-size: 15px;
}

.crop-text {
  /*Se han utilizado las siguientes propiedades: 
    - -webkit-line-clamp: permite limitar el contenido a un número de líneas (en nuestro caso 7)
    - overflow: Permite especificar que el contenido se recorta y no se muestran barras de posición
    - text-overflow: ellipsis: recorta el contenido. Además, muestra que hay contenido desborado (overflowed)
      mediante la propiedad ellipsis (...)
    - display nos permite establecer el comportamiento del elemento cuando se renderiza. Con la propiedad
      -webkit-box  --> Investigar más
  */
  -webkit-line-clamp: 6;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}


.timeline-panel{
	background-color: white;
}

.timeline-heading{
	position: relative;
}

.remove-day{
	font-size: 17px;
	font-weight: bold;
	border-radius: 13px;
	background-color: #528a63;
	color: rgb(255, 255, 255);
	font-family: "Roboto", sans-serif
}

.read-more{
	font-size: 17px;
	font-weight: bold;
	border-radius: 13px;
	background-color: #9b1919;
	color: rgb(255, 255, 255);
	font-family: "Roboto", sans-serif;
}

li {
	margin-bottom: 40px;
	position: relative;
	width: 50%;
	float: left;
	clear: left;
}

li:before,
li:after {
	content: " ";
	display: table;
}

li:after {
	clear: both;
}

li:before,
li:after {
	content: " ";
	display: table;
}

li:after {
	clear: both;
}

li > .timeline-panel {
	width: 94%;
	float: left;
	border: 1px solid #8a8787;
	/*border-radius: 2px;*/
	/*padding: 20px;*/
	position: relative;
}

li > .timeline-panel:before {
	position: absolute;
	top: 26px;
	right: -15px;
	display: inline-block;
	border-top: 15px solid transparent;
	border-left: 15px solid #525050;
	border-right: 0 solid #525050;
	border-bottom: 15px solid transparent;
	content: " ";
}

li > .timeline-panel:after {
	position: absolute;
	top: 27px;
	right: -14px;
	display: inline-block;
	border-top: 14px solid transparent;
	border-left: 14px solid #fff;
	border-right: 0 solid #fff;
	border-bottom: 14px solid transparent;
	content: " ";
}

li > .timeline-badge {
	color: #ccc;
	width: 24px;
	height: 24px;
	line-height: 50px;
	font-size: 1.4em;
	cursor: pointer;
	text-align: center;
	position: absolute;
	top: 19px;
	right: -12px;
	/*background-color: #999999;*/
	z-index: 9;
	/*
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	*/
}

li > .timeline-badge i:hover {
	color: #72c02c;
}

li.timeline-inverted > .timeline-panel {
	float: right;
}
li.timeline-inverted > .timeline-panel:before {
	border-left-width: 0;
	border-right-width: 15px;
	left: -15px;
	right: auto;
}
li.timeline-inverted > .timeline-panel:after {
	border-left-width: 0;
	border-right-width: 14px;
	left: -14px;
	right: auto;
}

li > .timeline-panel .timeline-heading {
	padding: 5px;
}

.timeline-v1 .timeline-body {
	padding: 12px 12px 12px 12px;
    /*margin-bottom: 20px;*/
}

.timeline-v1 .timeline-footer{
    padding: 7px 12px;
    overflow: hidden;
    border-top: 1px solid #ccc;
}

.timeline-v1 .timeline-footer .blog-info {
	float: left;
}

.timeline-v1 .timeline-footer .blog-info i {
	color: #777;
}

.timeline-v1 .timeline-footer .likes {
	float: right;
}
.timeline-v1 .timeline-footer .likes i {
	margin-right: 2px;
	color: #777;
}

.timeline-v1 .timeline-footer .likes:hover {
	text-decoration: none;
	color: inherit;
}

.timeline-v1 .timeline-footer .likes:hover i {
	color: #72c02c;
}

li.timeline-inverted{
	float: right; 
	clear: right;
	margin-bottom: 40px;
}

li:nth-child(2){
  	margin-top: 60px;
}

li.timeline-inverted > .timeline-badge{
  	left: -12px;
}

@media (max-width: 992px) {
	li > .timeline-panel:before {
		top: 31px;
		right: -11px;
		border-top: 11px solid transparent;
		border-left: 11px solid #ccc;
		border-bottom: 11px solid transparent;
	}

	li > .timeline-panel:after {
		top: 32px;
		right: -10px;
		border-top: 10px solid transparent;
		border-left: 10px solid #fff;
		border-bottom: 10px solid transparent;
	}
	li.timeline-inverted > .timeline-panel:before {
		border-right-width: 11px;
		left: -11px;
	}
	li.timeline-inverted > .timeline-panel:after {
		border-right-width: 10px;
		left: -10px;
	}

}

@media (max-width: 767px) {

    ul.timeline-v1 li {
      margin-bottom: 20px;
      position: relative;
      width:100%;
      float: left;
      clear: left;
    }
    ul.timeline-v1 li .timeline-panel {
        width: calc(100% - 70px);
        width: -moz-calc(100% - 70px);
        width: -webkit-calc(100% - 70px);
    }

    ul.timeline-v1 li .timeline-badge {
        left: 28px;
        margin-left: 0;
        top: 16px;
    }

    ul.timeline-v1 li .timeline-panel {
        float: right;
    }

    ul.timeline-v1 li .timeline-panel:before {
    	top: 27px;
		right: -12px;
		border-top: 12px solid transparent;
		border-left: 12px solid #ccc;
		border-bottom: 12px solid transparent;
	}

	ul.timeline-v1 li .timeline-panel:after {
		top: 28px;
		right: -11px;
		border-top: 11px solid transparent;
		border-left: 11px solid #fff;
		border-bottom: 11px solid transparent;
	}

    ul.timeline-v1 li .timeline-panel:before {
        border-left-width: 0;
        border-right-width: 12px;
        left: -12px;
        right: auto;
    }

    ul.timeline-v1 li .timeline-panel:after {
        border-left-width: 0;
        border-right-width: 11px;
        left: -11px;
        right: auto;
    }
    
	.timeline-v1 li.timeline-inverted{
		float: left; 
		clear: left;
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.timeline-v1 li.timeline-inverted .timeline-badge{
		left: 28px;
	}
}
</style>