<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');

#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
