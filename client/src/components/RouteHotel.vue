<template>
      <div class="card mt-3">

      <!-- Carousel de imagenes del hotel -->
       
	  <div class="row">
		<div class="col-5">
			<div :id="cadena_id" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner mx-auto">
					<div class="carousel-item" v-for="(image,index) of imageURL" :key="index" :class="{ active: index==0 }">
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
			<div class="align-baseline col-12 row mb-3 mt-2">
				<span class="year col-9 text-left" >{{name}}</span>
				<div class="col-3 month dropdown my-auto">
					<select v-model="nights" name="noches" id="noches" class="noches-hotel">
						<option value="0">0 noches</option>
						<option value="1">1 noche</option>
						<option value="2">2 noches</option>
						<option value="3">3 noches</option>
						<option value="4">4 noches</option>
					</select>
				</div>
			</div>
            
			<div class="align-baseline col-12 row mb-3">
				<span class="month col-8">{{address}}</span>
				<span class="valoration col-4"><rating-component :value=stars /></span>
			</div>

            <p class="ml-3 mt-0">{{description}}</p>

			<div class="row justify-content-end prices col">
				<!-- <span class="card-price col-8 mb-0 ml-0 text-left">Precio / día ({{$store.state.route.rooms}} hab · {{$store.state.route.adult}} adultos · {{$store.state.route.children}} niños): {{calculateValueRoom()}} €</span> -->
        		<!-- <span class="card-price col-8 mb-0 ml-0 text-left">Precio por día: {{calculateValueRoom()}} €</span> -->
				<p class="badge badge-light col-4">Precio total: {{changeValueRoom()}} €</p>
			</div>
        </div>
	  </div>
	  </div>
	  
	  

      <!-- <div class="row card-footer">
        <span class="card-price col-8 mb-0 ml-0 text-left">Precio / día ({{$store.state.route.rooms}} hab · {{$store.state.route.adult}} adultos · {{$store.state.route.children}} niños): {{calculateValueRoom()}} €</span>
        <p class="badge badge-light col-4 mb-0 ml-0">Precio total: {{changeValueRoom()}} €</p>
      </div>
        </div> -->

</template>

<script>
import Calendar from './Calendar.vue'

import RatingComponent from '../components/RatingComponent.vue';

export default {
    components: {
        Calendar,
        RatingComponent
    },
	data() {
		return {
			precio_total: null,
			cadena_id: this.name.replace(/\s/g, ''),
		}
	},
	props: {
		name: String,
		nights: Number,
		address: String,
		description: String,
		stars: Number,
		single_price: Number,
		double_price: Number,
		triple_price: Number,
		link: String, 
		imageURL: Array
	},
	methods: {
	 	changeValueRoom() {
	 		var final_price = 0;

			if(this.$store.state.route.adult === 1){final_price = this.single_price}
			if(this.$store.state.route.adult === 2){final_price = this.double_price}
			if(this.$store.state.route.adult >= 3){final_price = this.triple_price}

			return (final_price * this.$store.state.route.rooms * this.nights)
	 	},

		calculateValueRoom(){
			
			var final_price = 0;

			if(this.$store.state.route.adult === 1){final_price = this.single_price}
			if(this.$store.state.route.adult === 2){final_price = this.double_price}
			if(this.$store.state.route.adult >= 3){final_price = this.triple_price}

			this.changeValueRoom()

			return (final_price * this.$store.state.route.rooms)
		}
	},
	watch: {
		// Forma de llamar a un handler del método
	 	'nights': 'changeValueRoom',
		'$store.state.route.adult': 'calculateValueRoom',
		'$store.state.route.rooms': 'changeValueRoom',
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
 * {
	 outline: none;
}

option {
	font-size: 17px;
}

.card {
	background-color: #323232;
	max-width: 100% !important;
}

.card .prices p{
	color: black;
	font-weight: 900;
	font-size: 16px;
	margin-right: 0rem;
}

.card .prices span{
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
}

.img-carousel {
	width:100%; 
	height: 320px !important;
  padding: 0.5rem;
}
.noches-hotel{
	font-family: 'Libre Franklin', sans-serif;
	font-size: 16px;
	font-weight: 600;
	text-align: left;
}
 .timeline-carousel {
	 margin: 0;
	 /*background-color: #323232;*/
	 font-family: "Roboto", sans-serif;
	 font-weight: 400;
	 padding: 86px 2% 90px 2%;
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

 .timeline-carousel__item-inner {
	 position: relative;
	 padding-top: 2rem;
	 align-items: baseline;
	 padding: 0rem;
	 padding-top: 1rem;
}

 .timeline-carousel__item-inner .year {
	 font-family: 'Libre Franklin', sans-serif;
	 font-size: 36px;
	 line-height: 36px;
	 color: rgba(255, 255, 255, 1);
	 display: table;
	 padding-right: 10px;
	 background-color: #323232;
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
	 font-size: 17px;
	 text-transform: uppercase;
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