<template>

    <!-- Este componente representa la descripción de un dia de la ruta -->
    <div id="RouteDetailsDay">
        <h4 class="day-title float-left">Día {{number}}: {{title}}</h4><br>
        <p class="mt-4 day-description">{{description1}}</p>
        <img :src=imageURL class=" day-img img-fluid mt-2" alt="..."/> 
        <p class="mt-3 day-description">{{description2}}</p>
    </div>

</template>

<script>
    export default {
        name: 'RouteDetailsDay',
        props: {
            number: Number,
            info: String,
            description1: String,
            description2: String,
            imageURL: String,
            title: String,
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

#RouteDetailsDay{
    font-family: Roboto;
}

.day-title{
    font-family: Lato;
    font-size: 28px;
    font-weight: 900;
}

.day-description{
    font-size: 16px;
    font-weight: 500;
}


.day-img {
    max-width: 400px;
    max-height: 400px;
}
</style>