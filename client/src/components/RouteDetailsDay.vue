<template>

    <!-- Este componente representa la descripción de un dia de la ruta -->
    <div id="RouteDetailsDay">
        <h4>Día {{number}}: {{title}}</h4>
        <p class="mt-4">{{description1}}</p>
        <img :src=imageURL class="img-fluid mt-4" alt="..."/> 
        <p class="mt-4">{{description2}}</p>
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
img {
    max-width: 70%;
    max-height: 50%;
}
</style>