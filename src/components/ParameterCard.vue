<template>
  <div class="wrapper">
    <div class="info">
      <slot class="icon-picture" name="img"></slot>
    </div>

    <div class="info-values">
      <p class="info-values-name">
        <slot name="parameter"></slot>
      </p>
      <p class="value">
        <slot name="value"></slot>
      </p>
      <slot class="sign" name="sign"></slot>

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
  width: 180px;
  border: 1px solid transparent;
  height: 111px;
  border-radius: 10px;
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
  margin: 0 11px;
}

.info-values {
  position: inherit;
  flex-direction: column;
  line-height: 0.1;
  text-align: end;
  margin: 5px;
}
.sign {
  font-weight: 100;
  font-size: 13px;
}
.value {
  font-weight: bold;
  font-size: 21px;
}
</style>