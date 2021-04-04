<template>

  <!-- Este es el componente que utilizamos para puntuar comentarios, hoteles... -->
  <div class="rating-container">
    <font-awesome-icon icon="star"  v-for="idx in completeRange" v-bind:key="idx + 'st'" />
    <font-awesome-icon :icon="['fas', 'star-half-alt']"  v-for="idx in halfRange" v-bind:key="idx + 'stt'" />
    <font-awesome-icon :icon="['far', 'star']"  v-for="idx in totalRange" v-bind:key="idx" />
</div>
</template>

<script>

  // Crea un array con los valores de inicio y final (para calcular las estrellas)
  // completas, las medias y las vacías
  const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)

  export default {
    name: 'RatingComponent',
    props: {
      value: Number,
      total: {
        type: Number,
        default: 5
      }
    },
    data () {
      return {
        // Calculamos los números de estrellas completos, medios y vacíos. 
        completeRange: range(0, this.value - 1),
        halfRange: range(0, (this.value % 1 === 0 ? 0 : 1)-1),
        totalRange: range(0, this.total - this.value - 1)
      }
    },
    created: function () {
      if (this.value > this.total) {
        throw new Error('total lower than value')
      }
    }
  }
</script>

<style scoped>
  .rating-container {
    display:flex;
    justify-content: right;
  }

@media (min-width: 576px) {

}

@media (min-width: 768px) {
  .rating-container{
    font-size: 0.875em;
    margin-top: 1rem;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .rating-container{
    font-size: 1em;
  }
}
</style>