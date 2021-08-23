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
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');

#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  margin: 30px 50px;
  border-radius: 10px;
  width: 68%;
  position: absolute;
  flex-wrap: nowrap;
}
</style>
