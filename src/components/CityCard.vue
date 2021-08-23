<template>
  <div class="city-card">
    <header class="header">
      <h3 class="title">{{ city.name || 'Sin City' }}, {{ city.country || '' }}</h3>
    </header>
    <section class="main">
      <img class="city-img" src="../assets/cloud.png"/>
    </section>
    <footer class="footer">
      <h1> {{ temperature || '~30' }}°C</h1>
      <h4> Feels like: {{ feelLike }}°C</h4>
      <a target="_blank"
         href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
         class="link">Metric system</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    city: {
      type: Object
    },
    parameter: {
      type: Object
    }
  },
  computed: {
    temperature() {
      return this.parameter.temperature?.toFixed( 0 )
    },
    feelLike() {
      return this.city.felt?.toFixed( 1 )
    }
  }
}
</script>

<style scoped>
.city-card {
  display: flex;
  flex-direction: column;
}

.link {
  text-decoration: none;
  font-size: 12px;
  color: green;
}
.header {
  width: 145px;
}
.city-img {
  height: 54px;
  width: 90px;
}
.title{
  font-family: 'Roboto', sans-serif;
}
</style>