<template>
    <section class="header">
        <div class="container py-4">
            <header class="text-center pb-5 text-white">
                <h1 class="display-4">Preguntas frecuentes</h1>
            </header>


            <div class="row">
                <div class="col-md-3">
                    <!-- Tabs nav -->
                    <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <span class="font-weight-bold small text-uppercase">Rutas</span></a>

                        <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <span class="font-weight-bold small text-uppercase">Precios</span></a>

                        <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <span class="font-weight-bold small text-uppercase">Routers</span></a>

                        <a class="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span class="font-weight-bold small text-uppercase">Compartir experiencias</span></a>
                        </div>
                </div>


                <div class="col-md-9">
                    <!-- Tabs content -->
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h4 class="font-italic mb-2">¿Quiénes crean las rutas?</h4>
                            <p class="font-italic text-muted mb-2 mt-4">
                                Todas las rutas son creadas por los routers, unos usuarios dentro de esta red social que pueden diseñar y compartir sus viajes y rutas turísticas. Todas las rutas que se crean en esta red social son revisadas y verificadas por un equipo especializado, para que tu único objetivo sea disfrutar de tu viaje.
                            </p>

                            <h4 class="font-italic mb-2 mt-5">¿Puedo personalizar una ruta?</h4>
                            <p class="font-italic text-muted mb-2 mt-4">
                                Por supuesto. Desde SocialRoute te damos la posibilidad de eliminar días de la ruta si deseas realizar una ruta más corta o permanecer más días en una ciudad o realizar otras actividades a las propuestas.
                            </p>
                        </div>
                        
                        <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h4 class="font-italic mb-2">¿Es el precio de la ruta definitivo?</h4>
                            <p class="font-italic text-muted mb-2 mt-4">
                                No. Actualmente los precios que ofrecemos sobre los hoteles son orientativos (en base a la experiencia del router), por lo que tienes que consultar la reserva del hotel en los días deseados para conocer el precio exacto. Estamos estudiando la posibilidad de colaborar con páginas de reserva, con el objetivo de realizar todo el proceso desde nuestra página, para que solo tengas que preocuparte de disfrutar la ruta.
                            </p></div>
                        
                        <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <h4 class="font-italic mb-4">¿Qué es un router?</h4>
                            <p class="font-italic text-muted mb-2 mt-4">
                                Un router es un usuario dentro de SocialRoute que tiene la posibilidad de compartir rutas o viajes turísticos con el resto de usuarios de manera altruista. Para ser un router se necesitan datos adicionales, con el objetivo de verificar su identidad.
                            </p>

                            <h4 class="font-italic mt-5 mb-4">¿Cómo se puede apoyar económicamente a los routers?</h4>
                            <p class="font-italic text-muted mt-4 mb-2">
                                Si has realizado una ruta y la experiencia ha sido satisfactoria, puedes considerar apoyar económicamente al router que la ha creado en la pestaña de "Router" dentro de la ruta, para que pueda ofrecer otras rutas a los usuarios. Toda aportación se abona integramente a los routers.     
                            </p>
                        </div>
                        
                        <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <h4 class="font-italic mb-4">¿Cómo puedo compartir mis experiencias sobre la ruta?</h4>
                            <p class="font-italic text-muted mt-4 mb-2">Si has realizado una ruta y quieres compartir tus impresiones sobre el viaje, puedes utilizar la pestaña de "Comentarios" dentro de la ruta. Así mismo, también puedes preguntar dudas en dicho apartado. Recuerda tratar con respeto a los demás usuarios, ya que los comentarios ofensivos serán eliminados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {

}
</script>

<style scoped>

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*/
.nav-pills-custom .nav-link {
    color: #aaa;
    background: #fff;
    position: relative;
}

.nav-pills-custom .nav-link.active {
    color: #45b649;
    background: #fff;
}


/* Add indicator arrow for the active tab */
@media (min-width: 992px) {
    .nav-pills-custom .nav-link::before {
        content: '';
        display: block;
        border-top: 8px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 8px solid transparent;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        opacity: 0;
    }
}

.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}






@import url('https://fonts.googleapis.com/css2?family=Englebert&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kavoon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
.home {
  background-image: url("../assets/fondo0.jpg");
  background-size: 100% 100%;
  height: 80vh;
  width: 90%;
  margin: auto;
}

h1 {
    padding-top: 2.5rem;
    color: darkmagenta;
    font-family: Kavoon;
}

p{
    margin: 3rem;
    font-family: Quicksand;
}

</style>