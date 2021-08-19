<template>
  <div class="wrapper">
    <div class="info">
      <slot class="icon-picture" name="img"></slot>
      <p>
        <span><slot name="parameter"></slot></span>
      </p>
    </div>
    <div class="info">
      <p>
        <slot name="value"></slot>
        <slot name="sign"></slot>
      </p>
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
  justify-content: space-around;
  border: 1px solid transparent;
  height: 102px;
  border-radius: 5px;
  background-color: #ffff;
  margin: 6px 7px;
}

.info {
  display: flex;
  line-height: 5px;
  text-align: end;
  font-weight: bold;
  font-size: 20px;

}
</style>