<template>
<div>
    <ul class="timeline-v1 mx-5 my-3">
        <li>
			<div class="timeline-badge primary"><font-awesome-icon icon="circle"/></div>
			<route-timeline-element/>
        </li>
        <li class="timeline-inverted">
			<div class="timeline-badge primary"><font-awesome-icon icon="circle"/></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    
					<!-- Carousel de imagenes https://getbootstrap.com/docs/4.6/components/carousel/-->
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
							<img src="../assets/iglesia1.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia2.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia3.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/black.png" class="img-fluid w-100" alt="...">
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
									
                </div>
                <div class="timeline-body text-justify-center">
					
                    <p class="h4">Día 2: Visita a las cuevas prehistóricas</p>

					<p class="mt-4">Durante el segundo día realizaremos una excursión sobre las míticas cuevas prehistóricas de Málaga, y al finalizar comeremos en el restaurante con vistas al mar.</p>
                </div>
                <!-- <div class="timeline-footer">
                    <p>footer</p>
                </div> -->
            </div>
        </li>

		<li>
			<div class="timeline-badge primary"><font-awesome-icon icon="circle"/></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    
					<!-- Carousel de imagenes https://getbootstrap.com/docs/4.6/components/carousel/-->
					<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
							<img src="../assets/iglesia1.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia2.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia3.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/black.png" class="img-fluid w-100" alt="...">
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
									
                </div>
                <div class="timeline-body text-justify-center">
					
                    <p class="h4">Día 3: Visita guiada por las Iglesias de Toledo</p>

					<p class="mt-4">Durante el tercer día realizaremos una excursión por las iglesias romanas de Toledo (San Román, Santiago el Mayor, etc) y a continuación visitaremos el parque de los Patos.</p>
                </div>
                <!-- <div class="timeline-footer">
                    <p>footer</p>
                </div> -->
            </div>
		</li>

		<li class="timeline-inverted">
			<div class="timeline-badge primary"><font-awesome-icon icon="circle"/></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    
					<!-- Carousel de imagenes https://getbootstrap.com/docs/4.6/components/carousel/-->
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
							<img src="../assets/iglesia1.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia2.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/iglesia3.jpeg" class="img-fluid w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="../assets/black.png" class="img-fluid w-100" alt="...">
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
									
                </div>
                <div class="timeline-body text-justify-center">
					
                    <p class="h4">Día 4: Senderismo en los Montes de Toledo</p>

					<p class="mt-4">Durante el último día realizaremos una ruta de senderismo por los parajes de los Montes de Toledo, únicos tanto en flora como en fauna, donde podremos ver ejemplares de osos pardos, linces ibéricos, buites alconados, etc</p>
                </div>
                <!-- <div class="timeline-footer">
                    <p>footer</p>
                </div> -->
            </div>
        </li>
        
        <li class="clearfix" style="float: none;"></li>
    </ul>
</div>
</template>

<script>
import RouteTimelineElement from './RouteTimelineElement.vue'

export default {
    name: 'RouteDetails',
	components: {
		RouteTimelineElement
	}
}
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  opacity: 1;
}
/*.carousel-control-prev-icon,
.carousel-indicators
{
    filter: invert(100%);
}*/
/*.carousel-control-prev-icon, .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    outline: black;
    background-color: black;
    background-size: 100%, 100%;
    border-radius: 50%;
    border: 1px solid black;
	opacity: 1;
}
    .carousel-control-prev-icon { 
        width: 30px;
        height: 48px;
		opacity: 1;
		color: white;
    }
    .carousel-control-next-icon { 
        width: 30px;
        height: 48px;
		opacity: 1;
		color: white;
    }*/

/*Timeline v1
------------------------------------*/
.timeline-v1 {
	padding: 20px 0;
	list-style: none;
	position: relative;
}

.timeline-v1:before {
	top: 0;
	bottom: 0;
	position: absolute;
	content: " ";
	width: 3px;
	background-color: #eee;
	left: 50%;
	margin-left: -1.5px;
}

.timeline-v1 > li {
	margin-bottom: 40px;
	position: relative;
	width: 50%;
	float: left;
	clear: left;
}

.timeline-v1 > li:before,
.timeline-v1 > li:after {
	content: " ";
	display: table;
}

.timeline-v1 > li:after {
	clear: both;
}

.timeline-v1 > li:before,
.timeline-v1 > li:after {
	content: " ";
	display: table;
}

.timeline-v1 > li:after {
	clear: both;
}

.timeline-v1 > li > .timeline-panel {
	width: 94%;
	float: left;
	border: 1px solid #d4d4d4;
	/*border-radius: 2px;*/
	/*padding: 20px;*/
	position: relative;
}

.timeline-v1 > li > .timeline-panel:before {
	position: absolute;
	top: 26px;
	right: -15px;
	display: inline-block;
	border-top: 15px solid transparent;
	border-left: 15px solid #ccc;
	border-right: 0 solid #ccc;
	border-bottom: 15px solid transparent;
	content: " ";
}

.timeline-v1 > li > .timeline-panel:after {
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

.timeline-v1 > li > .timeline-badge {
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

.timeline-v1 > li > .timeline-badge i:hover {
	color: #72c02c;
}

.timeline-v1 > li.timeline-inverted > .timeline-panel {
	float: right;
}
.timeline-v1 > li.timeline-inverted > .timeline-panel:before {
	border-left-width: 0;
	border-right-width: 15px;
	left: -15px;
	right: auto;
}
.timeline-v1 > li.timeline-inverted > .timeline-panel:after {
	border-left-width: 0;
	border-right-width: 14px;
	left: -14px;
	right: auto;
}

.timeline-v1 > li > .timeline-panel .timeline-heading {
	padding: 5px;
}

.timeline-v1 .timeline-body {
    padding: 12px;
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

.timeline-v1 > li.timeline-inverted{
	float: right; 
	clear: right;
	margin-bottom: 40px;
}

.timeline-v1 > li:nth-child(2){
  	margin-top: 60px;
}

.timeline-v1 > li.timeline-inverted > .timeline-badge{
  	left: -12px;
}

@media (max-width: 992px) {
	.timeline-v1 > li > .timeline-panel:before {
		top: 31px;
		right: -11px;
		border-top: 11px solid transparent;
		border-left: 11px solid #ccc;
		border-bottom: 11px solid transparent;
	}

	.timeline-v1 > li > .timeline-panel:after {
		top: 32px;
		right: -10px;
		border-top: 10px solid transparent;
		border-left: 10px solid #fff;
		border-bottom: 10px solid transparent;
	}
	.timeline-v1 > li.timeline-inverted > .timeline-panel:before {
		border-right-width: 11px;
		left: -11px;
	}
	.timeline-v1 > li.timeline-inverted > .timeline-panel:after {
		border-right-width: 10px;
		left: -10px;
	}

}

@media (max-width: 767px) {
    ul.timeline-v1:before {
        left: 40px;
    }

    ul.timeline-v1 > li {
      margin-bottom: 20px;
      position: relative;
      width:100%;
      float: left;
      clear: left;
    }
    ul.timeline-v1 > li > .timeline-panel {
        width: calc(100% - 70px);
        width: -moz-calc(100% - 70px);
        width: -webkit-calc(100% - 70px);
    }

    ul.timeline-v1 > li > .timeline-badge {
        left: 28px;
        margin-left: 0;
        top: 16px;
    }

    ul.timeline-v1 > li > .timeline-panel {
        float: right;
    }

    ul.timeline-v1 > li > .timeline-panel:before {
    	top: 27px;
		right: -12px;
		border-top: 12px solid transparent;
		border-left: 12px solid #ccc;
		border-bottom: 12px solid transparent;
	}

	ul.timeline-v1 > li > .timeline-panel:after {
		top: 28px;
		right: -11px;
		border-top: 11px solid transparent;
		border-left: 11px solid #fff;
		border-bottom: 11px solid transparent;
	}

    ul.timeline-v1 > li > .timeline-panel:before {
        border-left-width: 0;
        border-right-width: 12px;
        left: -12px;
        right: auto;
    }

    ul.timeline-v1 > li > .timeline-panel:after {
        border-left-width: 0;
        border-right-width: 11px;
        left: -11px;
        right: auto;
    }
    
	.timeline-v1 > li.timeline-inverted{
		float: left; 
		clear: left;
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.timeline-v1 > li.timeline-inverted > .timeline-badge{
		left: 28px;
	}
}
</style>