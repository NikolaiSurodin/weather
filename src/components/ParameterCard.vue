<template>
  <div class="wrapper">
    <div class="info">
      <slot class="icon-picture" name="img"></slot>
    </div>

    <div class="info-values">
      <p>
        <slot name="parameter"></slot>
      </p>
      <p class="value">
        <slot name="value"></slot>
      </p>
      <slot name="sign"></slot>

    </div>
  </div>
</template>

<script>

export default {
  name: "ParameterCard",
  props: [ 'parameter', 'value' ]
}
</script>

<style scoped>

.icon-picture {
  height: 50px;
}

.wrapper {
  width: 170px;
  border: 1px solid transparent;
  height: 102px;
  border-radius: 5px;
  background-color: #ffff;
  margin: 6px 7px;
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  line-height: 5px;
  text-align: end;
  font-weight: bold;
  font-size: 12px;
  justify-content: space-around;
}

.info-values {
  position: inherit;
  flex-direction: column;
  line-height: 0.1;
  display: inline-flex;
  text-align: end;
}

.value {
  font-weight: bold;
  font-size: 20px;
}
</style>