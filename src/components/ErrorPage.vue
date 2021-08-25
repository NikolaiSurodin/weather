<template>

  <div class="wrap">
    <div class="popup">
      <header class="header">
        <img src="../assets/info.svg">
      </header>
      <section class="section">
        {{ error }}
        <p>Please, await..</p>
      </section>
      <footer class="footer">
        <button class="button" type="button" @click="close">Await</button>
        <button class="button restart" type="button" @click="restart">Restart</button>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    error: Error
  },
  methods:{
    close() {
      this.$emit('close')
    },
    restart() {
      this.$emit('restart')
    }
  }
}
</script>

<style scoped>
.wrap {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.button {
  background-color: #8b4cf9;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 13px 35px;
  color: #ffff;
}
.restart {
  background-color: #8ef68e;
}
.button:hover {
  background-color: #ab81fd;
  cursor: pointer;
}
.popup{
  padding: 150px;
  position: center;
  top: 500px;
  width: 700px;
  background: linear-gradient(#e6e6e6, #9198e5);
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 9999;
}
</style>