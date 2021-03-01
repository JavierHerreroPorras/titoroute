<template>

     <div class="container">
        <div class="row">
            <div class="col-md-5 ">
                <div class="row row-cols-2">
                   <div class="col">
                      <circle-progress-bar value=7.5 titulo="Calidad-precio"/>
                  </div>
                   <div class="col">
                    <circle-progress-bar value=9.5 titulo="Ubicación"/>
                  </div>
                  <div class="col">
                    <circle-progress-bar value=9.2 titulo="Instalaciones"/>
                  </div>
                  <div class="col">
                    <circle-progress-bar value=8.7 titulo="Personal"/>
                  </div>
               </div>
                
            </div>
            <div id="testimonials-1" class="mt-4 col-md-7 testimonials testimonials-v1 scrollDiv border-left border-info border-5">
                <div>
                  <div class="item">
                      <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                      <div class="testimonial-info">
                          <img class="img-thumbnail rounded-circle" src="@/assets/user.png" alt="">
                          <div class="float-left ml-3">
                            <span class="testimonial-author">
                              Jeremy Asigner 
                              <div class="mt-1">
                                  <RatingComponent :value=2 :total=5 />
                              </div>
                            </span>
                          </div>
                          <div class="float-right mr-3">
                              19/03/2020 17:45 
                              <div class="container mt-1">
                                  <div class="row">
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-up" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-down" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="exclamation-triangle" aria-hidden="true"/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                </div>

                <div>
                  <div class="item personalizada">
                      <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                      <div class="testimonial-info">
                          <img class="img-thumbnail rounded-circle" src="@/assets/user.png" alt="">
                          <div class="float-left ml-3">
                            <span class="testimonial-author">
                              Jeremy Asigner 
                              <div class="mt-1">
                                  <RatingComponent :value=2 :total=5 />
                              </div>
                            </span>
                          </div>
                          <div class="float-right mr-3">
                              19/03/2020 17:45 
                              <div class="container mt-1">
                                  <div class="row">
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-up" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-down" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="exclamation-triangle" aria-hidden="true"/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                </div>

              <div>
                  <div class="item personalizada">
                      <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                      <div class="testimonial-info">
                          <img class="img-thumbnail rounded-circle" src="@/assets/user.png" alt="">
                          <div class="float-left ml-3">
                            <span class="testimonial-author">
                              Jeremy Asigner 
                              <div class="mt-1">
                                  <RatingComponent :value=2 :total=5 />
                              </div>
                            </span>
                          </div>
                          <div class="float-right mr-3">
                              19/03/2020 17:45 
                              <div class="container mt-1">
                                  <div class="row">
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-up" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-down" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="exclamation-triangle" aria-hidden="true"/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                </div>

                <div>
                  <div class="item personalizada">
                      <p>Crasjusto ducimus qui cupiditate non provident, similique sunt in culpaid est anditiis praesentium praesentium blanditiis praesentium non provident, similique sunt in culpaid est anditiis praesentium praesentium..</p>
                      <div class="testimonial-info">
                          <img class="img-thumbnail rounded-circle" src="@/assets/user.png" alt="">
                          <div class="float-left ml-3">
                            <span class="testimonial-author">
                              Jeremy Asigner 
                              <div class="mt-1">
                                  <RatingComponent :value=2 :total=5 />
                              </div>
                            </span>
                          </div>
                          <div class="float-right mr-3">
                              19/03/2020 17:45 
                              <div class="container mt-1">
                                  <div class="row">
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-up" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="thumbs-down" aria-hidden="true"/>
                                    </div>
                                    <div class="col-sm">
                                      <font-awesome-icon icon="exclamation-triangle" aria-hidden="true"/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script>
import RatingComponent from './RatingComponent';
import CircleProgressBar from './CircleProgressBar';

export default {
  components: {
    RatingComponent,
    CircleProgressBar
  },
  props: {}
}
</script>

<style scoped>
/*Bootstrap Testimonials
------------------------------------*/
 .personalizada {
  margin-top: 7rem !important;
}

.scrollDiv {
  height: 60vh;
  overflow-y: scroll
}
.testimonials-bs .headline-center-v2 span.author {
  color: #777;
  font-size: 14px;
}

/*Removes Bootstrap carousel background images*/
.testimonials-bs .item {
  margin-bottom: 30px;
  margin-top: 7rem !important;
}

.testimonials-bs .carousel-control-v2 i {
	color: #888;
	width: 30px;
	height: 30px;
	padding: 2px;
	font-size: 22px;
	border: 2px solid #888;
}

.testimonials-bs .carousel-control-v2 i:hover {
  color: #72c02c;
  border-color: #72c02c;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

.testimonials-bs .carousel-control-v2.left,
.testimonials-bs .carousel-control-v2.right {
    text-decoration: none;
    background-image: none;
}

/*Team v1*/
.team-v1 li > h3 {
	color: #555;
}


/*Testimonials
------------------------------------*/
/*Testimonials*/
.testimonials {
  margin-bottom: 40px;
}

.testimonials .testimonial-info {
  color: #72c02c;
  font-size: 16px;
  padding: 0 15px;
  margin-top: 0px;
}

.testimonials .testimonial-info span {
  top: 3px;
}

.testimonials .testimonial-info em {
  color: #777;
  display: block;
  font-size: 13px;
}

.testimonials .testimonial-info img {
  width: 60px;
  float: left;
  height: 60px;
  padding: 2px;
  margin-right: 15px;
  border: solid 1px #ccc;
}

/*Testimonials v1*/
.testimonials.testimonials-v1 .item p {
  position: relative;
}

.testimonials.testimonials-v1 .item p:after,
.testimonials.testimonials-v1 .item p:before {
  left: 80px;
  bottom: -20px;
}

.testimonials.testimonials-v1 .item p:after {
  border-top: 22px solid; 
  border-left: 0 solid transparent;
  border-right: 22px solid transparent;
}

/*Testimonials v2*/
.testimonials.testimonials-v2 .testimonial-info {
  padding: 0 20px;
}

.testimonials.testimonials-v2 p {
  padding-bottom: 15px;
}
.testimonials.testimonials-v2 .item p:after,
.testimonials.testimonials-v2 .item p:before {
  left: 8%;
  bottom: 45px;
}

.testimonials.testimonials-v2 .item p:after {
  border-top: 20px solid; 
  border-left: 25px solid transparent;
  border-right: 0px solid transparent;
}

/*General Testimonials v1/v2*/
.testimonials.testimonials-v1 p,
.testimonials.testimonials-v2 p {
  padding: 15px;
  font-size: 14px;
  font-style: italic; 
  background: #f5f5f5;
}

.testimonials.testimonials-v1 .item p:after,
.testimonials.testimonials-v2 .item p:after {
  width: 0; 
  height: 0;
  content: " ";
  display: block; 
  position: absolute; 
  border-top-color: #f5f5f5;
  border-left-style: inset; /*FF fixes*/
  border-right-style: inset; /*FF fixes*/ 
}



</style>