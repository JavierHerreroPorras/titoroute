<template>
<div>
  <div class="embed-responsive embed-responsive-16by9">
  <iframe :src=mapURL ></iframe>
  </div>

</div>
</template>

<script>
export default {
  name: 'RouteMap',
  data() {
    return {
      mapURL: this.$store.state.route.routeInfo.RouteDetails.route_map_URL,
    }
  },
}
</script>