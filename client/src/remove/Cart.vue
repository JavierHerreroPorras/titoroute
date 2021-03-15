<template>

<div class="dropdown">
  <button class="btn btn-secondary d-flex justify-content-between align-items-center float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <font-awesome-icon icon="shopping-cart"/> 
    <h5>Mi Carrito</h5> 
    <span class="badge badge-light">{{cartQuantity()}}</span>
    <span class="sr-only">routes in cart</span>
  </button>
  <div class="dropdown-menu shopping-cart" aria-labelledby="dropdownMenuButton">
    <div class="shopping-cart-header">
        <div class="shopping-cart-total">
            <span class="lighter-text">Total ({{cartQuantity()}} rutas) : </span>
            <span class="main-color-text">{{getTotalPrice()}} € </span>
        </div>
    </div>
		<div class="cart-item row">
			<div class="w-100" v-if="getRoutes().length === 0">
				<p class="my-4 text-center">Vaya... Parece que no hay elementos en el carrito.</p>
			</div>
			<ul class="shopping-cart-items"  v-for="(route,index) in getRoutes()" :key="index">
        		<li class="clearfix row items d-flex">
					<div class="col-1 close-button">
						<span class="item-quantity"><button class="close" @click="removeElement(route.Route._id)">X</button></span> 
					</div>
					<div class="col-3 pl-1">
						<img src="../assets/ruta.jpeg" class="cart-img"/>
					</div>
					<div class="col-8 px-0">
						<div class="row row-cols-2">
    						<div class="col-12 item-name-div">
								<span class="item-name">{{route.Route.name}}</span>
							</div>
							<div class="col-6 mt-2 px-0">
								<span class="item-details">Inicio: {{route.RouteDetails.startDateRoute}}</span>
							</div>
							<div class="col-6 mt-2 px-0">
								<span class="item-price">Precio: {{route.Route.price.toFixed(2)}} € </span>
								 <!-- <span class="item-quantity"><button class="route-button">Eliminar ruta</button></span> -->
							</div>
  						</div>	
					</div>
					<!-- <img src="../assets/ruta.jpeg" class="cart-img col-3 ml-1"/>
					<div class="col-9 h-100 item-name-price container">
						<div class="row row-cols-2">
    						<div class="col-11 item-name-div">
								<span class="item-name mb-2">{{route.Route.name}}</span>
							</div>
    						<div class="col-1">
								<span class="item-quantity float-right mt-1"><button class="close" @click="removeElement(route.Route._id)">X</button></span> 
								<<span class="item-price mb-2 ml-3">{{route.Route.price}} € </span> 
							</div>
							<div class="col-6">
								<span class="item-details">Inicio: {{route.RouteDetails.startDateRoute}}</span>
							</div>
							<div class="col-6">
								<span class="item-price mb-2 ml-3">Precio: {{route.Route.price.toFixed(2)}} € </span>
								 <span class="item-quantity"><button class="route-button">Eliminar ruta</button></span>
							</div>
  						</div>
					</div> -->
					
					
				</li>
			</ul>
		</div>

		<div class="row shopping-cart-footer">
			<div class="col-6 text-center mt-3">
				<button class="btn btn-danger button-remove" @click="removeAllElements()">Borrar Rutas</button>
			</div>
			<div class="col-6 mt-3">
				<button class="btn btn-secondary float-right button-purchase">Realizar pago</button>
			</div>
		</div>       
  </div>
</div>

<!--     
    
    <nav>
        <li><a href="" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">3</span></a></li>
    </nav>


    <div class="container">
    <div class="shopping-cart d-none">
        <div class="shopping-cart-header">
        <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
        <div class="shopping-cart-total">
            <span class="lighter-text">Total:</span>
            <span class="main-color-text">$2,229.97</span>
        </div>
        </div> <end shopping-cart-header

        <ul class="shopping-cart-items">
        <li class="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
            <span class="item-name">Sony DSC-RX100M III</span>
            <span class="item-price">$849.99</span>
            <span class="item-quantity">Quantity: 01</span>
        </li>

        <li class="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
            <span class="item-name">KS Automatic Mechanic...</span>
            <span class="item-price">$1,249.99</span>
            <span class="item-quantity">Quantity: 01</span>
        </li>

        <li class="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
            <span class="item-name">Kindle, 6" Glare-Free To...</span>
            <span class="item-price">$129.99</span>
            <span class="item-quantity">Quantity: 01</span>
        </li>
        </ul>

        <a class="button">Checkout</a>
    </div>
    </div> 
</div> -->
</template>

<script>

const $ = require('jquery')
window.$ = $

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			routes: null,
		}
	},
    methods: {
        ...mapGetters(
            {cartQuantity: 'cartModule/cartQuantity',
			getRoutes: 'cartModule/cartRoutes',
			getTotalPrice: 'cartModule/cartTotal'}
        ),
		...mapActions({
			removeElement: 'cartModule/removeCartItem',
			removeAllElements: 'cartModule/removeAllCartItems'
		}),
    },
	computed: {
		...mapState('cartModule', ['cartRoutes'])
	},
	mounted() {
		$(".shopping-cart").click(function(e) {
				 	e.stopPropagation();
		});
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500&display=swap');

.button-remove {
	background-color: rgb(228, 27, 67);
	width: 70%;
	font-size: 17px;
}

.button-purchase {
	width: 70%;
	font-size: 17px;
}
.shopping-cart-footer {
	border-top: 1px solid #e8e8e8;
}

.shopping-cart-total {
	text-align: end;
	font-size: 18px;
}

.close {
  font-size: 17px;
  color:rgb(15, 11, 10);
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}

.item-name-div {
	padding-left: 0;
}

.route-button {
	font-size: 13px;
	background-color: red;
	color: black;
}

.item-details {
	font-size: 16px;
	font-family: 'Shippori Mincho B1', serif;
	font-style: italic;
	font-weight: normal;
	color: #828794;
}
.item-name-price {
	align-items: baseline;
	padding-left: 0px;
	padding-right: 0px;
}

.items {
	align-items: center;
	border: 1px solid;
	border-radius: 10px;
	border-color:rgb(188, 243, 245);
	margin-right: 1rem;
	background-color: rgb(250, 250, 250);
	padding: 3px;
}
.cart-item {
	align-items: center;
}

.col-5, .col-3, .col-2{
  padding-right: 0;
  padding-left: 0
}
.cart-img{
	max-width: 100px;
	max-height: 100px;
	border-radius: 20%;
	padding: 5px;
}

.dropdown-menu {
	width: 600px;
	transform: translate3d(-420px,40px,0px) !important
}

.btn{
    width: 180px;
}

h5{
    margin-bottom: 0;
}

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
 @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
 *, *:before, *:after {
	 box-sizing: border-box;
}
 body {
	 font: 14px/22px "Lato", Arial, sans-serif;
	 background: #6394f8;
}
 .lighter-text {
	 color: #abb0be;
	 font-size: 18px;
}
 .main-color-text {
	 color: #6394f8;
}
 nav {
	 padding: 20px 0 40px 0;
	 background: #f8f8f8;
	 font-size: 16px;
}
 nav .navbar-left {
	 float: left;
}
 nav .navbar-right {
	 float: right;
}
 nav ul li {
	 display: inline;
	 padding-left: 20px;
}
 nav ul li a {
	 color: #777;
	 text-decoration: none;
}
 nav ul li a:hover {
	 color: black;
}
 .container {
	 margin: auto;
	 width: 80%;
}
 .badge {
	 border-radius: 5px;
	 display: inline-block;
	 font-size: 12px;
	 line-height: 1;
	 padding: 3px 7px;
	 text-align: center;
	 vertical-align: middle;
	 white-space: nowrap;
}
 .shopping-cart {
	 margin: 20px 0;
	 float: right;
	 background: white;
	 width: 600px;
	 transform: translate3d(-420px,40px,0px) !important;
	 position: relative;
	 border-radius: 3px;
	 padding: 20px;
}
 .shopping-cart .shopping-cart-header {
	 border-bottom: 1px solid #e8e8e8;
	 padding-bottom: 15px;
}
 .shopping-cart .shopping-cart-items {
	 padding-top: 10px;
	 width: 100%;
}
 .shopping-cart .shopping-cart-items li {
	 margin-bottom: 0px;
}
 .shopping-cart .shopping-cart-items img {
	 float: left;
}
 .shopping-cart .shopping-cart-items .item-name {
	 display: block;
	 font-size: 20px;
	 font-family: 'Shippori Mincho B1', serif;
	 font-weight: 500;
}
 .shopping-cart .shopping-cart-items .item-price {
	 color: #6394f8;
	 font-size: 17px;
	 font-family: 'Shippori Mincho B1', serif;
}
 .shopping-cart:after {
	 bottom: 100%;
	 left: 89%;
	 border: solid transparent;
	 content: " ";
	 height: 0;
	 width: 0;
	 position: absolute;
	 pointer-events: none;
	 border-bottom-color: white;
	 border-width: 8px;
	 margin-left: -8px;
}
 .cart-icon {
	 color: #515783;
	 font-size: 24px;
	 margin-right: 7px;
	 float: left;
}
 .button {
	 background: #6394f8;
	 color: white;
	 text-align: center;
	 padding: 12px;
	 text-decoration: none;
	 display: block;
	 border-radius: 3px;
	 font-size: 16px;
	 margin: 25px 0 15px 0;
}
 .button:hover {
	 background: #729ef9;
}
 .clearfix:after {
	 content: "";
	 display: table;
	 clear: both;
}
</style>