<template>
  <div>
    <div>
      <h1>使用transition组件开放的api实现css过渡</h1>
    </div>
    <h3>在 CSS 过渡和动画中自动应用 class</h3>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <h3>常用的过渡都是使用 CSS 过渡</h3>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div>
      <h3>多个元素的过渡</h3>
      <div>
        <p>
          关于多元素过渡。同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了过渡模式
        </p>

        <p>in-out：新元素先进行过渡，完成之后当前元素过渡离开。</p>

        <p>out-in：当前元素先进行过渡，完成之后新元素过渡进入</p>
      </div>
      <transition name="fade" mode="in-out">
        <button v-if="show" key="save">Save</button>
        <button v-else key="edit">Edit</button>
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
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */

.fade-enter-active {
  transition: opacity 0.5s;
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
