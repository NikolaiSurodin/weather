<template>
  <div class="city-card">
    <header class="header">
      <h3 class="title">{{ city.name || 'Sin City' }}, {{ city.country || '' }}</h3>
      <p>{{ city.description }}</p>
    </header>
    <section class="main">
      <img class="city-img" src="../images/cloud.png"/>
      <h1> {{ temperature || '~30' }}°C</h1>
    </section>

    <footer class="footer">
      <h4> Feels like: {{ feelLike }}°C</h4>
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
      return this.city.temperature?.toFixed( 0 )
    },
    feelLike() {
      return this.city.felt?.toFixed( 1 )
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap');
.city-card {
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 0px 15px;
}
.header {
  width: 178px;
  line-height: 0.5;
}

.city-img {
  height: 83px;
  width: 136px;
  padding: 36px 0;
}

.title {
  font-family: 'Work Sans', sans-serif;
  font-size: 23px;
  font-weight: bold;
}

h1 {
  font-size: 40px;
  display: block;
  position: relative;
  top: 28px;
}

.footer {
  position: relative;
  top: -12px;
}
.footer h4 {
  font-size: 11px;
}
</style>