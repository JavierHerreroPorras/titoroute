<template>
	<div id="RouteHotels">
		<section class="timeline-carousel row">

			<!-- Aquí se configura la ruta (el día de inicio y los adultos/habitacioones) -->
			<div class="container row">
				<div class="text-center mb-5 w-100">
					<route-hotels-configure class="float-right"/>
				</div>
			</div>

			<!-- Aviso para los usuarios (los precios son orientativos) -->
			<div class="alert alert-danger alert-dismissible fade show mx-auto" role="alert">
				<strong>IMPORTANTE: </strong> Los precios que ofrecemos son orientativos. Para conocer los precios reales, debe consultar la página de reserva para cada hotel
				
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<!-- Listado de hoteles -->
			<div v-for="(p,index) of hotels" :key="index">				
				<route-hotel 
					:hotel = p
					:index = index
				/>
			</div>

			<!-- Precio total de la ruta -->
			<div class="mt-4 w-100 mr-4">
				<button type="button" class="btn btn-info disabled float-right">Precio total: {{$store.state.route.routeInfo.Route.price}} €</button>
			</div>
			
		</section> 
	</div>
</template>

<script>

	import 'slick-carousel'

	import RatingComponent from '../components/RatingComponent.vue';
	import RouteHotel from '../components/RouteHotel.vue'
	import RouteHotelsConfigure from '../components/RouteHotelsConfigure.vue';

	import { mapActions, mapState } from 'vuex';

	export default {
		name: 'RouteHotels',
		data() {
			return {
				hotels: null
			}
		},
		components: {
			RatingComponent,
			RouteHotel,
			RouteHotelsConfigure
		},
		methods: {
			...mapActions({
				getHotels: 'route/getRouteHotels',
			}),

			// Realizamos la llamada al servidor para obtener los hoteles de la ruta
			// (utilizando los id de los mismos). Una vez se han recibido, se calculan los
			// precios de los mismos.
			async getRouteHotels() {
				await this.getHotels();
				
				this.hotels = this.routeInfo.hotels;
				let prices = Array.from({ length: this.hotels.length }, () => 0)
				this.routeInfo.Route.hotels_price = prices;	
			}
		},
		computed: {
			...mapState('route', ['routeInfo'])
		},
		created() {
			this.getRouteHotels();
		},
	}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
 * {
	 outline: none;
}

.card {
	background-color: #323232;
	max-width: 48%;
}

.card .card-footer p{
	color: black;
	font-weight: 900;
	font-size: 16px;
	margin-right: 0rem;
}

.card .card-footer span{
	color: white;
	font-weight: 900;
	font-size: 15px;
	margin-right: 0rem;
	padding-left: 0px;
	padding-right: 0px;
}

.carousel-control-next-icon, .carousel-control-prev-icon{
	background-color: black;
	opacity: 0.75;
	height: 15%;
  	width: 50%;
}

.img-carousel {
	width:100%; 
	height: 320px !important;
  padding: 0.5rem;
}
.noches-hotel{
	font-family: 'Libre Franklin', sans-serif;
	font-size: 15px;
	font-weight: 600;
	text-align: left;
}
 .timeline-carousel {
	 margin: 0;
	 /*background-color: #323232;*/
	 font-family: "Roboto", sans-serif;
	 font-weight: 400;
	 position: relative;
	 overflow: hidden;
}
 .timeline-carousel:after, .timeline-carousel:before {
	 content: "";
	 position: absolute;
	 display: block;
	 top: 0;
	 height: 100%;
	 background-color: #323232;
}
 .timeline-carousel:after {
	 left: 0;
}
 .timeline-carousel:before {
	 right: 0;
	 opacity: 0;
}
 .timeline-carousel .slick-list {
	 overflow: visible;
}
 .timeline-carousel .slick-dots {
	 bottom: -73px;
}
 .timeline-carousel h1 {
	 color: black;
	 font-family: 'Libre Franklin', sans-serif;
	 font-weight: 700;
}
 .timeline-carousel p {
	 color: black;
	 font-weight: 300;
	 font-size: 15px;
	 margin-right: 2rem;
}
 .timeline-carousel__image {
	 padding-right: 0px;
}

 .timeline-carousel__item .media-wrapper {
	 opacity: 0.4;
	 padding-bottom: 81.4%;
	 -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
 .timeline-carousel__item:last-child .timeline-carousel__item-inner:after {
	 width: calc(100% - 25px);
}
 .timeline-carousel__item-inner {
	 position: relative;
	 padding-top: 45px;
	 align-items: baseline;
}

 .timeline-carousel__item-inner .year {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 36px;
	 line-height: 36px;
	 color: rgba(255, 255, 255, 1);
	 display: table;
	 letter-spacing: -1px;
	 padding-right: 10px;
	 background-color: #323232;
	 z-index: 1;
	 position: relative;
	 margin-top: -15px;
	 margin-bottom: 2.5rem;
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
	 font-size: 15.px;
	 text-transform: uppercase;
	 color: #ffc107;
	 margin-bottom: 2.5rem;
	 font-weight: 600;
	 text-align: left;
	 margin-left: 1rem;
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
	 margin-bottom: 15px;
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
 .timeline-carousel__item-inner .read-more:after {
	 content: "";
	 position: absolute;
	 left: 0;
	 bottom: -1px;
	 width: 0;
	 border-bottom: 2px solid #ffc107;
	 -webkit-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
 .timeline-carousel__item-inner .read-more:hover:after {
	 width: 100%;
}
 .timeline-carousel__item-inner .pointer {
	 height: 29px;
	 position: relative;
	 z-index: 1;
	 margin: -4px 0 16px;
}
 .timeline-carousel__item-inner .pointer:after, .timeline-carousel__item-inner .pointer:before {
	 position: absolute;
	 content: "";
}
 .timeline-carousel__item-inner .pointer:after {
	 width: 5px;
	 height: 9px;
	 border-radius: 100%;
	 top: 0;
	 left: 0;
	 background-color: #ffc107;
}
 .timeline-carousel__item-inner .pointer:before {
	 width: 1px;
	 height: 100%;
	 top: 0;
	 left: 4px;
	 background-color: #ffc107;
}
 .timeline-carousel .slick-active .media-wrapper {
	 opacity: 1 !important;
}
 .slick-dots {
	 bottom: 160px;
	 list-style: none;
	 position: absolute;
	 width: 100%;
	 left: 0;
	 text-align: center;
	 z-index: 2;
}
 .slick-dots li {
	 display: inline-block;
	 margin: 0 6px;
	 position: relative;
	 width: 5px;
	 height: 10px;
}
 .slick-dots li:last-child {
	 margin-right: 0;
}
 .slick-dots li.slick-active button {
	 background: #ffc107;
	 border-color: #ffc107;
}
 .slick-dots li button {
	 display: block;
	 font-size: 0;
	 width: 10px;
	 height: 10px;
	 padding: 0;
	 background-color: rgba(255, 255, 255, 0.6);
	 border-color: rgba(255, 255, 255, 0.6);
	 -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
	 transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
 .slick-dots li button:hover {
	 background: #ffc107;
	 border-color: #ffc107;
}
 .link {
	 position: absolute;
	 left: 0;
	 bottom: 0;
	 padding: 20px;
	 z-index: 9999;
}
 .link a {
	 display: flex;
	 align-items: center;
	 text-decoration: none;
	 color: #fff;
}
 .link .fa {
	 font-size: 28px;
	 margin-right: 8px;
	 color: #fff;
}
</style>