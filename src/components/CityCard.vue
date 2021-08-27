<template>
  <div class="city-card">
    <header class="header">
      <h3 class="title">{{ city.name || 'Sin City' }}, {{ city.country || '' }}</h3>
      <p>{{ city.Description }}</p>

    </header>
    <section class="main">
      <img :src="city.icon" class="city-img">
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

.city-card {
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 0 15px;
}
.header {
  width: 178px;
  line-height: 0.5;
}
.header p {
  font-family: 'Nunito', sans-serif;
}

.city-img {
  padding: 36px 0;
}

.title {
  font-family: 'Nunito', sans-serif;
  font-size: 23px;
  font-weight: bold;
}

h1 {
  font-size: 40px;
  display: block;
  position: relative;
  top: 28px;
  font-family: 'Nunito', sans-serif;
}

.footer {
  position: relative;
  top: -12px;
}
.footer h4 {
  font-size: 11px;
  font-weight: 100;
}
</style>