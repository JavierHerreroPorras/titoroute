<template>
  
  <!-- Tarjeta con la información esencial de la card (imagen, titulo, descripción, nota media...) -->
  <div class="card border-secondary h-100">
    <img :src=imageURL class="card-img-top rounded p-1" alt="Imagen de la ruta"> 
    <div class="card-body px-1 py-2">
      <div class="row align-items-start">
        <router-link 
          :to="{ name: 'Ruta', params: { id: id }}" 
          class="card-title h4 stretched-link col-11"
          style="color: #483232;"
        >
          {{name}}
        </router-link>

        <span class="badge badge-pill badge-primary" style="position: absolute; right: 5px; font-size: 13px;">{{score}}</span>

      </div>
      
      <p class="card-text small mt-1 crop-text px-1">{{description}}</p>
    
      <div class="row align-items-center">
        <span class="col-7 pl-2 pr-0 text-left" style="font-size: 15px; font-weight: bold; color: #3e0771;">{{duration}} dias ({{people}} personas)</span>
        <span class="col-5 pl-0 pr-0" style="font-size: 15px; font-weight: bold; color: #3e0771;">Precio: {{price}} €</span>
      </div>

      <div class="align-items-center">
        <button type="button" class="btn btn-outline-secondary float-right py-0 mt-3" style="border-radius: 15px;">
          <router-link 
          :to="{ name: 'Ruta', params: { id: id }}"
          id="detalles" 
          >
            Ver detalles
          </router-link>
        </button>
      </div>

    </div>
  </div> 
  
</template>

<script>
  export default {
    name: 'Route',
    props: {
      name: String,
      description: String,
      imageURL: String,
      duration: Number,
      people: Number,
      price: Number,
      score: Number,
      id: String
    },
  }
</script>

<style scoped>

.card-title:hover{
  text-decoration: none;
}

#detalles{
  color: rgb(143, 143, 66);
}

#detalles:hover{
  text-decoration: none;
  color: white;
}

.row{
  margin-left: 0px;
  margin-right: 0px;
}

.col-12{
  padding-right: 0px;
  padding-left: 0px
}
.badge {
  font-size: 16px
}

.crop-text {
  /*Se han utilizado las siguientes propiedades: 
    - -webkit-line-clamp: permite limitar el contenido a un número de líneas (en nuestro caso 7)
    - overflow: Permite especificar que el contenido se recorta y no se muestran barras de posición
    - text-overflow: ellipsis: recorta el contenido. Además, muestra que hay contenido desborado (overflowed)
      mediante la propiedad ellipsis (...)
    - display nos permite establecer el comportamiento del elemento cuando se renderiza. Con la propiedad
      -webkit-box  --> Investigar más
  */
  -webkit-line-clamp: 7;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.col-10 {
  flex: 0 0 80%;
  max-width: 80%;
}

.col-2 {
  flex: 0 0 20%;
  max-width: 20%;
}
</style>