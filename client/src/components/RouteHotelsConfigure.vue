<template>
	
	<!-- Este componente representa la configuración de la ruta (fecha de inicio, adultos y habitaciones...) -->
	<div id="configurationRoute" class="mx-auto row p-3" style="border: 1px solid aquamarine;">
		<h3 class="col-12">Personaliza la ruta</h3>
		<!-- Configuración de la fecha -->
		<div id="RouteConfigureDate" class="mt-4 col-3 col-lg-12">
				<span class="float-left mb-2">Inicio de la ruta:</span>
				<div class="input-wrapper">
					<input type="date" class="w-100" v-model="routeInfo.RouteDetails.startDateRoute">
					<label for="date-icon" class="input-icon"><font-awesome-icon icon="calendar-alt" class=""/></label>
				</div>

		</div>
		
		<!-- Configuración de los adultos y habitaciones -->
		<div id="RouteConfigureRooms" class="mt-4 col-6 col-lg-12">
			<span class="text-left ">Configura el número de personas y las habitaciones: </span>
			<button class="mt-2" data-toggle="dropdown" id="dropdownCustomizeRouteButton" aria-haspopup="true" aria-expanded="false">
				{{routeInfo.RouteDetails.adult}} adultos · {{routeInfo.RouteDetails.rooms}} habitaciones
			</button>

			<div class="dropdown-menu" id="dropdownCustomizeRoute" aria-labelledby="dropdownCustomizeRoute" style="font-size: 0.9rem">
				<div class="row align-items-baseline ml-0 mr-0" id="container">
					<span class="col-6">Adultos: </span>
					<button @click.stop.prevent="addAdult" class="col-2 btn btn-light btn-sm rounded-circle">+</button>
					<p class="col-2">{{routeInfo.RouteDetails.adult}}</p>
					<button @click.stop.prevent="decrementAdult" class="col-2 btn btn-light btn-sm rounded-circle">-</button>
				</div>
				<div class="row align-items-baseline ml-0 mr-0">
					<span class="col-6">Habitaciones: </span>
					<button @click.stop.prevent="addRoom" class="col-2 btn btn-light btn-sm rounded-circle">+</button>
					<p class="col-2">{{routeInfo.RouteDetails.rooms}}</p>
					<button @click.stop.prevent="decrementRoom" class="col-2 btn btn-light btn-sm rounded-circle">-</button>
				</div>
			</div>
		</div>

		<div class="mt-4 col-3 col-lg-12" style="background-color: #b3eede">
			<span class="pr-2" style="font-size: 19px; font-weight: 700">Precio total:</span> 
			<br>
			<span style="font-size: 19px; font-weight: 700">{{routeInfo.Route.price}} €</span>
		</div>
		
	</div>

</template>

<script>


	import { mapMutations, mapState } from 'vuex'

	export default {
		name: 'RouteHotelsConfigure',
		props: {
			adultos: {
				type: Number,
				default: 1
			},
			habitaciones: {
				type: Number,
				default: 1
			}
		},
		computed: {
			...mapState('route', ['routeInfo']),
		},
		mounted() {
			// Iniciamos el datepicker con la fecha actual
			this.routeInfo.RouteDetails.startDateRoute = this.formatDate();
		},
		methods: {

			...mapMutations(
				{addAdult: "route/incrementAdult",
				decrementAdult: "route/decrementAdult",
				addRoom: "route/incrementRooms",
				decrementRoom: "route/decrementRooms"
				}),

			// Cambiamos la ruta en store de acuerdo a la seleccionada en el datepicker
			changeInitialDate(selectedDate) {
				this.routeInfo.RouteDetails.startDateRoute = selectedDate;
			},

			// Este método devuelve la fecha actual en formato yyyy-mm-dd
			formatDate() {
				var d = new Date(),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

				if (month.length < 2) 
					month = '0' + month;
				if (day.length < 2) 
					day = '0' + day;

				var date = year + '-' + month + '-' + day;   

				return date;
			}
		}
	}
</script>

<style>

.input-icon{
  position: absolute;
  left: 5px;
}
input{
  padding-left: 17px;
}
.input-wrapper{
  position: relative;
}

.container {        
    display: flex;
    align-items: center;
}


@media (min-width: 576px) {

}

@media (min-width: 768px) {
	
}

@media (min-width: 992px) {

}

@media (min-width: 1200px) {

}

</style>