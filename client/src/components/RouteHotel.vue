<template>
      
	<!-- Este componente representa a un hotel dentro de la pestaña de hoteles -->
	<div class="card mt-3 mx-3">

      <!-- Carousel de imagenes del hotel -->
       
	  <div class="row">
		<div class="col-5">
			<div :id="cadena_id" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner mx-auto">
					<div class="carousel-item" v-for="(image,index) of hotel.imageURL" :key="index" :class="{ active: index==0 }">
						<img :src=image class="img-carousel d-block w-100 " alt="...">
					</div>
				</div>
				<a class="carousel-control-prev" :href="'#' + cadena_id" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" :href="'#' + cadena_id" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
				</a>
			</div>
	  	</div>

      <!-- Descripción del hotel -->
        <div class="timeline-carousel__item-inner col-7 row card-body">
			<div class="align-baseline col-12 row">
				<span class="year col-lg-8 col-md-12 text-left" >{{hotel.name}}</span>
				<div class="valoration col-lg-4 d-none d-lg-block">
					<rating-component :value=hotel.stars />
				</div>	
			</div>
            
			<div class="align-baseline col-12 row mb-3">
				<span class="month col-xl-7 col-sm-12">{{hotel.address}}</span>>
				<div class="row nights col-xl-5 pl-0 pr-0">
					<span class="col-xl-12 col-5 hotel-check-in px-0">
						Entrada: {{checkInFormatted}}
					</span>
					<span class="col-xl-12 col-5 hotel-check-out px-0">
						Salida: {{checkOutFormatted}}
					</span>
				</div>
			</div>

             <p class="description">{{hotel.description}}</p>

			<div class="row justify-content-end prices col mb-2">
				<a class="card-price col-7 mb-0 ml-0 text-left ml-3" :href=hotel.booking_link target="_blank"><font-awesome-icon icon="external-link-alt" class="mr-1"/> Reserva del hotel</a> 
				<span class="hotel-price col-4 badge">Precio total: {{changeValueRoom()}} €</span>
			</div>
        </div>
	  </div>
	</div>

</template>

<script>
import Calendar from './RouteHotelsConfigure.vue'
import { mapState } from 'vuex';
import RatingComponent from '../components/RatingComponent.vue';

export default {
    components: {
        Calendar,
        RatingComponent
    },
	data() {
		return {
			precio_total: null,
			// Generar id para el carousel de imagenes del hotel
			cadena_id: this.hotel.name.replace(/\s/g, ''),
			checkInFormatted: null,
			checkOutFormatted: null
		}
	},
	props: {
		index: Number,
		hotel: Object
	},
	computed: {
        // Mediante mapState y mapActions podemos acceder fácilmente a los datos y
        // métodos declarados en el store de Vue
        ...mapState('route', ['routeInfo'])
            
    },
	methods: {

		// Función para cambiar el valor total de hotel (dependiendo de las habitaciones, los adultos, etc)
	 	changeValueRoom() {
			         
	 		var final_price = 0;

			// Determinamos el precio de la habitación dependiendo del número de adultos (simple, doble o familiar)
			if(this.routeInfo.RouteDetails.adult === 1){final_price = this.hotel.single_price}
			if(this.routeInfo.RouteDetails.adult === 2){final_price = this.hotel.double_price}
			if(this.routeInfo.RouteDetails.adult >= 3){final_price = this.hotel.triple_price}

			this.hotel.total_price = (final_price * this.routeInfo.RouteDetails.rooms * this.hotel.nights).toFixed(2);
	 		
			// Actualizo el vector de precios de los hoteles y actualizo su precio final
			this.routeInfo.Route.hotels_price[this.index] = this.hotel.total_price;
			this.routeInfo.Route.price = this.changeRoutePrice().toFixed(2);

			return this.hotel.total_price;
		 },

		// En esta función calculo el precio total de la ruta
		changeRoutePrice(){
			return this.routeInfo.Route.hotels_price.reduce((acc, element) => {
          		return parseInt(element) + acc;
        	}, 0);
		},

		// Esta función se encarga de determinar las fechas de entrada y salida para cada hotel.
		calculateNights(){
			const hotelNights = this.routeInfo.nights.get(this.hotel._id)
			
			var checkIn = null;

			if(this.index === 0){
				checkIn = new Date(this.routeInfo.RouteDetails.startDateRoute);
			}
			else{
				checkIn = new Date(this.routeInfo.hotels[this.index -1].checkOut);
			}
				this.hotel.checkInFormatted = checkIn;
				this.checkInFormatted = this.formatDate(checkIn);
				var checkOut = new Date();
				checkOut.setDate(checkIn.getDate() + hotelNights);
				this.hotel.checkOut = checkOut;
				this.checkOutFormatted = this.formatDate(checkOut);
		},
		formatDate(date) {
			var month = '' + (date.getMonth() + 1);
			var day = '' + date.getDate();
			var year = date.getFullYear();

			if (month.length < 2) 
				month = '0' + month;
			if (day.length < 2) 
				day = '0' + day;

			var dateFormatted = day + '/' + month + '/' + year;   

			return dateFormatted;
		}
	},
	mounted() {
		this.calculateNights();
	},
	watch: {
		// Llamar a un handler del método
	 	'nights': 'changeValueRoom',
		'routeInfo.RouteDetails.adult': 'changeValueRoom',
		'routeInfo.RouteDetails.rooms': 'changeValueRoom',
		'routeInfo.RouteDetails.startDateRoute': 'calculateNights',
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
 * {
	 outline: none;
}



 /* unvisited link */
a:link {
  color: rgb(92, 178, 212);
}

/* visited link */
a:visited {
  color: rgb(92, 178, 212);
}

/* mouse over link */
a:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

/* selected link */
a:active {
  color: rgb(139, 139, 139);
} 


option {
	font-size: 17px;
}

.card {
	background-color:  #312727e8;
	max-width: 100% !important;
}

.card .prices p{
	color: black;
	font-weight: 900;
	font-size: 16px;
	margin-right: 0rem;
}
.carousel-control-next-icon, .carousel-control-prev-icon{
	background-color: black;
	opacity: 0.75;
	height: 15%;
}

.img-carousel {
	width:100%; 
	height: 320px !important;
  padding: 0.5rem;
}
.noches-hotel, .hotel-check-in, .hotel-check-out{
	font-family: 'Libre Franklin', sans-serif;
	font-size: 17px;
	color: white;
	font-weight: 600;
	text-align: left;
}

.description{
	font-family: "Roboto", sans-serif;
	-webkit-line-clamp: 3;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}

.hotel-price{
	color: bisque;
}
 .timeline-carousel__item-inner {
	 position: relative;
	 padding-top: 2rem;
	 align-items: baseline;
	 padding: 0rem;
	 padding-top: 1rem;
}

 .timeline-carousel__item-inner .year {
	 font-family: 'Libre Franklin', sans-serif;
	 line-height: 36px;
	 color: rgba(255, 255, 255, 1);
	 display: table;
	 padding-right: 10px;
	 z-index: 1;
	 position: relative;
	 font-weight: 700;
}
 .timeline-carousel__item-inner .year:after {
	 content: "";
	 left: 0px;
	 top: 0;
	 height: 100%;
	 width: 0px;
	 background-color: #323232;
	 z-index: 3;
}
 .timeline-carousel__item-inner .month {
	 font-family: 'Libre Franklin', sans-serif;
	 color: #ffc107;
	 font-weight: 600;
	 text-align: left;
}

.valoration {
	font-weight: 700;
	font-size: 24px;
	font-family: 'Libre Franklin', sans-serif;
	text-transform: uppercase;
	color: #ffc107;
}
 .timeline-carousel__item-inner p {
	 font-size: 15px;
	 line-height: 18px;
	 color: rgba(255, 255, 255, 1);
	 font-weight: 400;
}
 .timeline-carousel__item-inner .read-more {
	 font-size: 12px;
	 color: #ffc107;
	 display: table;
	 margin-bottom: 10px;
	 font-weight: 900;
	 text-decoration: none;
	 position: relative;
}

@media (min-width: 576px) {
	.year{
		font-size: 2rem;
	}

	.month{
		font-size: 1rem;
	}

	.hotel-check-in, .hotel-check-out{
		font-size: 0.9rem;
		margin-left: 1.5rem;
		margin-top: 0.5rem;
	}

	.description{
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.hotel-price, .card-price{
		font-size: 0.8rem;
	}

}

@media (min-width: 768px) {
	.hotel-check-in, .hotel-check-out{
		margin-left: 0;
		margin-top: 0.5rem;
		
	}

	.hotel-check-out{
		margin-left: 1rem;
	}

	.nights{
		padding-left: 1.5rem !important;
	}

	.valoration{
		margin-left: auto; 
		margin-right: 0;
	}

	.hotel-price, .card-price{
		font-size: 0.9rem;
	}
	
	
}

@media (min-width: 992px) {
	.month{
	}
	.hotel-price, .card-price{
		font-size: 1.1rem;
	}
}

@media (min-width: 1200px) {
	.hotel-check-in, .hotel-check-out{
		text-align: right;
		margin-left: 0;
		margin-top: 0;
	}

}
</style>