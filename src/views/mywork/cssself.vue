<template>
  <div>
    <h1>自定义类名可以name 这是使用第三方动画库的方式</h1>
    <div id="example-3">
      <button @click="show = !show">Toggle render</button>
      <transition
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
<style scoped>

</style>
