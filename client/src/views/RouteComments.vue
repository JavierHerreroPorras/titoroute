<template>

  <div id="RouteComments" class="row">
    <div class="col-12 row">
      <div class="col-md-5 ">
          <div class="row row-cols-2">
              <div class="col">
                <route-comments-graphic 
                  :value=$store.state.route.routeInfo.Route.averageAspect1 
                  titulo="Aspecto_1"
                />
              </div>
              
              <div class="col">
                <route-comments-graphic 
                  :value=$store.state.route.routeInfo.Route.averageAspect2 
                  titulo="Aspecto_2"
                />
              </div>

              <div class="col">
                <route-comments-graphic 
                  :value=$store.state.route.routeInfo.Route.averageAspect3 
                  titulo="Aspecto_3"
                />
              </div>

              <div class="col">
                <route-comments-graphic 
                  :value=$store.state.route.routeInfo.Route.averageAspect4 
                  titulo="Aspecto_4"
                />
              </div>
          </div> 
      </div>
      
      <div id="testimonials-1" class="mt-4 col-md-7 testimonials testimonials-v1 scrollDiv border-left border-info border-5">

        <div v-for="(comment,index) in comments" :key="index">
          <route-comment 
            :index="index"
            :name="comment.name"
            :date="comment.date"
            :comment="comment.comment"
            :score="comment.route_score"
          />
        </div>
        
      </div>
    </div>

        <!-- Para registrar los comentarios de los usuarios, utilizaré
        un "Modal", en el cual pediremos a los usuarios las impresiones sobre la ruta -->

    <div class="col">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Deja tu opinión sobre la ruta
      </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Opinión sobre la ruta</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          <div class="modal-body">
            <form @submit.prevent="handleComment">
              <!-- Aspecto 1 a evaluar en el formulario -->
              <div class="form-group row">
                <label for="inputRouteMark" class="col-6">Aspecto 1</label>
                  <div class="rating col-6">
                    <input id="star10" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="10" class="radio-btn hide" />
                    <label for="star10" >◌</label>
                    <input id="star9" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="9" class="radio-btn hide" />
                    <label for="star9" >◌</label>
                    <input id="star8" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="8" class="radio-btn hide" />
                    <label for="star8" >◌</label>
                    <input id="star7" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="7" class="radio-btn hide" />
                    <label for="star7" >◌</label>
                    <input id="star6" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="6" class="radio-btn hide" />
                    <label for="star6" >◌</label>
                    <input id="star5" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="5" class="radio-btn hide" />
                    <label for="star5" >◌</label>
                    <input id="star4" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="4" class="radio-btn hide" />
                    <label for="star4" >◌</label>
                    <input id="star3" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="3" class="radio-btn hide" />
                    <label for="star3" >◌</label>
                    <input id="star2" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="2" class="radio-btn hide" />
                    <label for="star2" >◌</label>
                    <input id="star1" name="stars_hotels" v-model="user_comment.a1_score" type="radio" value="1" class="radio-btn hide" />
                    <label for="star1" >◌</label>
                    <div class="clear"></div>
                </div>
              </div>

              <!-- Aspecto 2 a evaluar en el formulario -->
              <div class="form-group row">
                <label for="inputRouteMark" class="col-6">Aspecto 2</label>
                  <div class="rating col-6">
                    <input id="star_1_10" name="stars_price" v-model="user_comment.a2_score" type="radio" value="10" class="radio-btn hide" />
                    <label for="star_1_10" >◌</label>
                    <input id="star_1_9" name="stars_price" v-model="user_comment.a2_score" type="radio" value="9" class="radio-btn hide" />
                    <label for="star_1_9" >◌</label>
                    <input id="star_1_8" name="stars_price" v-model="user_comment.a2_score" type="radio" value="8" class="radio-btn hide" />
                    <label for="star_1_8" >◌</label>
                    <input id="star_1_7" name="stars_price" v-model="user_comment.a2_score" type="radio" value="7" class="radio-btn hide" />
                    <label for="star_1_7" >◌</label>
                    <input id="star_1_6" name="stars_price" v-model="user_comment.a2_score" type="radio" value="6" class="radio-btn hide" />
                    <label for="star_1_6" >◌</label>
                    <input id="star_1_5" name="stars_price" v-model="user_comment.a2_score" type="radio" value="5" class="radio-btn hide" />
                    <label for="star_1_5" >◌</label>
                    <input id="star_1_4" name="stars_price" v-model="user_comment.a2_score" type="radio" value="4" class="radio-btn hide" />
                    <label for="star_1_4" >◌</label>
                    <input id="star_1_3" name="stars_price" v-model="user_comment.a2_score" type="radio" value="3" class="radio-btn hide" />
                    <label for="star_1_3" >◌</label>
                    <input id="star_1_2" name="stars_price" v-model="user_comment.a2_score" type="radio" value="2" class="radio-btn hide" />
                    <label for="star_1_2" >◌</label>
                    <input id="star_1_1" name="stars_price" v-model="user_comment.a2_score" type="radio" value="1" class="radio-btn hide" />
                    <label for="star_1_1" >◌</label>
                    <div class="clear"></div>
                </div>
              </div>

              <!-- Aspecto 3 a evaluar en el formulario -->
              <div class="form-group row">
                <label for="inputRouteMark" class="col-6">Aspecto 3</label>
                  <div class="rating col-6">
                    <input id="star_3_10" name="stars_3" v-model="user_comment.a3_score" type="radio" value="10" class="radio-btn hide" />
                    <label for="star_3_10" >◌</label>
                    <input id="star_3_9" name="stars_3" v-model="user_comment.a3_score" type="radio" value="9" class="radio-btn hide" />
                    <label for="star_3_9" >◌</label>
                    <input id="star_3_8" name="stars_3" v-model="user_comment.a3_score" type="radio" value="8" class="radio-btn hide" />
                    <label for="star_3_8" >◌</label>
                    <input id="star_3_7" name="stars_3" v-model="user_comment.a3_score" type="radio" value="7" class="radio-btn hide" />
                    <label for="star_3_7" >◌</label>
                    <input id="star_3_6" name="stars_3" v-model="user_comment.a3_score" type="radio" value="6" class="radio-btn hide" />
                    <label for="star_3_6" >◌</label>
                    <input id="star_3_5" name="stars_3" v-model="user_comment.a3_score" type="radio" value="5" class="radio-btn hide" />
                    <label for="star_3_5" >◌</label>
                    <input id="star_3_4" name="stars_3" v-model="user_comment.a3_score" type="radio" value="4" class="radio-btn hide" />
                    <label for="star_3_4" >◌</label>
                    <input id="star_3_3" name="stars_3" v-model="user_comment.a3_score" type="radio" value="3" class="radio-btn hide" />
                    <label for="star_3_3" >◌</label>
                    <input id="star_3_2" name="stars_3" v-model="user_comment.a3_score" type="radio" value="2" class="radio-btn hide" />
                    <label for="star_3_2" >◌</label>
                    <input id="star_3_1" name="stars_3" v-model="user_comment.a3_score" type="radio" value="1" class="radio-btn hide" />
                    <label for="star_3_1" >◌</label>
                    <div class="clear"></div>
                </div>
              </div>

              <!-- Aspecto 4 a evaluar en el formulario -->
              <div class="form-group row">
                <label for="inputRouteMark" class="col-6">Aspecto 4</label>
                  <div class="rating col-6">
                    <input id="star_4_10" name="stars_4" v-model="user_comment.a4_score" type="radio" value="10" class="radio-btn hide" />
                    <label for="star_4_10" >◌</label>
                    <input id="star_4_9" name="stars_4" v-model="user_comment.a4_score" type="radio" value="9" class="radio-btn hide" />
                    <label for="star_4_9" >◌</label>
                    <input id="star_4_8" name="stars_4" v-model="user_comment.a4_score" type="radio" value="8" class="radio-btn hide" />
                    <label for="star_4_8" >◌</label>
                    <input id="star_4_7" name="stars_4" v-model="user_comment.a4_score" type="radio" value="7" class="radio-btn hide" />
                    <label for="star_4_7" >◌</label>
                    <input id="star_4_6" name="stars_4" v-model="user_comment.a4_score" type="radio" value="6" class="radio-btn hide" />
                    <label for="star_4_6" >◌</label>
                    <input id="star_4_5" name="stars_4" v-model="user_comment.a4_score" type="radio" value="5" class="radio-btn hide" />
                    <label for="star_4_5" >◌</label>
                    <input id="star_4_4" name="stars_4" v-model="user_comment.a4_score" type="radio" value="4" class="radio-btn hide" />
                    <label for="star_4_4" >◌</label>
                    <input id="star_4_3" name="stars_4" v-model="user_comment.a4_score" type="radio" value="3" class="radio-btn hide" />
                    <label for="star_4_3" >◌</label>
                    <input id="star_4_2" name="stars_4" v-model="user_comment.a4_score" type="radio" value="2" class="radio-btn hide" />
                    <label for="star_4_2" >◌</label>
                    <input id="star_4_1" name="stars_4" v-model="user_comment.a4_score" type="radio" value="1" class="radio-btn hide" />
                    <label for="star_4_1" >◌</label>
                    <div class="clear"></div>
                </div>
              </div>

              <!-- Nota de la ruta (que aparecerá en la página principal) -->
              <div class="form-group row">
                <label for="inputRouteMark" class="col-6">¿Qué nota pondría a esta ruta?</label>
                  <div class="rating col-6">
                    <input id="star_route_10" name="stars_route" v-model="user_comment.route_score" type="radio" value="10" class="radio-btn hide" />
                    <label for="star_route_10" >◌</label>
                    <input id="star_route_9" name="stars_route" v-model="user_comment.route_score" type="radio" value="9" class="radio-btn hide" />
                    <label for="star_route_9" >◌</label>
                    <input id="star_route_8" name="stars_route" v-model="user_comment.route_score" type="radio" value="8" class="radio-btn hide" />
                    <label for="star_route_8" >◌</label>
                    <input id="star_route_7" name="stars_route" v-model="user_comment.route_score" type="radio" value="7" class="radio-btn hide" />
                    <label for="star_route_7" >◌</label>
                    <input id="star_route_6" name="stars_route" v-model="user_comment.route_score" type="radio" value="6" class="radio-btn hide" />
                    <label for="star_route_6" >◌</label>
                    <input id="star_route_5" name="stars_route" v-model="user_comment.route_score" type="radio" value="5" class="radio-btn hide" />
                    <label for="star_route_5" >◌</label>
                    <input id="star_route_4" name="stars_route" v-model="user_comment.route_score" type="radio" value="4" class="radio-btn hide" />
                    <label for="star_route_4" >◌</label>
                    <input id="star_route_3" name="stars_route" v-model="user_comment.route_score" type="radio" value="3" class="radio-btn hide" />
                    <label for="star_route_3" >◌</label>
                    <input id="star_route_2" name="stars_route" v-model="user_comment.route_score" type="radio" value="2" class="radio-btn hide" />
                    <label for="star_route_2" >◌</label>
                    <input id="star_route_1" name="stars_route" v-model="user_comment.route_score" type="radio" value="1" class="radio-btn hide" />
                    <label for="star_route_1" >◌</label>
                    <div class="clear"></div>
                </div>
              </div>

              <!-- Opinión del usuario sobre la ruta (se mostrará en la vista de comentarios) -->
              <div id="RouteUserComment">
                <p>Escriba aquí sus comentarios, impresiones u opiniones sobre la ruta, para compartirlos con otros usuarios: </p>
                <textarea class="mr-3 w-100 h-30" v-model="user_comment.comment"></textarea>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>

            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*const $ = require('jquery')
  window.$ = $*/

  import RatingComponent from '../components/RatingComponent';
  import RouteCommentsGraphic from '../components/RouteCommentsGraphic';
  import RouteComment from '../components/RouteComment.vue';
  import Comment from '../models/comment';
  import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      RatingComponent,
      RouteCommentsGraphic,
      RouteComment
    },
    data() {
      return {
        comments: null,
        user_comment: new Comment('','','','','','',''),
        aspect_1: null,
        aspect_2: null,
        aspect_3: null,
        aspect_4: null,
        route: null
      }
    },
    computed: {
      ...mapState('route', ['routeInfo'])
    },
    methods: {
      ...mapActions({
        saveComment: 'route/saveUserComment'
      }),

      // Obtenemos los comentarios de la ruta (los mostramos en orden inverso)
      getRouteComments() {
        this.comments = [...this.routeInfo.RouteDetails.route_comments]
        this.comments.reverse();
      },

      // Recogemos el comentario y las puntuaciones del usuario sobre la ruta y las mandamos al servidor
      async handleComment(){
        this.user_comment.name = this.$store.state.auth.user.User.name + " " + this.$store.state.auth.user.User.surname;
        
        // Invocamos al método que envia el comentario al servidor
        await this.saveComment({
          user_comment: this.user_comment, 
          id: this.$route.params.id
        })
        
        // Obtenemos los comentarios de la ruta para mostrar el nuevo comentario  
        this.getRouteComments()
      
        //Cerramos el modal 
        window.$('#exampleModal').modal('toggle')
      },
    },
    created() {
      this.getRouteComments();
    },
  }

</script>

<style scoped>
/*Bootstrap Testimonials
------------------------------------*/
 /* .personalizada {
  margin-top: 7rem !important;
} */
textarea {
  resize: none;
}

.txt-center {
  text-align: center;
}
.hide {
  display: none;
}

.clear {
  float: none;
  clear: both;
}

.rating,
.rating_price {
    width: 180px;
    unicode-bidi: bidi-override;
    direction: rtl;
    text-align: center;
    position: relative;
}

.rating > label,
.rating_price > label {
    float: right;
    display: inline;
    padding: 0;
    margin: 0;
    position: relative;
    width: 1.1em;
    cursor: pointer;
    color: #000;
}

.rating > label:hover,
.rating > label:hover ~ label,
.rating > input.radio-btn:checked ~ label {
    color: transparent;
}

.rating > label:hover:before,
.rating > label:hover ~ label:before,
.rating > input.radio-btn:checked ~ label:before {
    content: "\2B24";
    position: absolute;
    left: 0;
    color: #FFD700;
}




.scrollDiv {
  height: 500px;
  overflow: auto
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