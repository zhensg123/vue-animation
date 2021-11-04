<template>
    <div>
        <h1>初始渲染过渡（只是在第一次进度时候过渡）</h1>
          <transition appear appear-class="custom-appear-class" appear-to-class="custom-appear-to-class"
            appear-active-class="custom-appear-active-class" v-on:before-appear="customBeforeAppearHook"
            v-on:appear="customAppearHook" v-on:after-appear="customAfterAppearHook"
            v-on:appear-cancelled="customAppearCancelledHook">
            <div v-if="show">初始渲染的过渡</div>
        </transition>
        <button @click="change">Change</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    customBeforeAppearHook: function () {
      console.log('customBeforeAppearHook')
    },
    customAppearHook: function () {
      console.log('customAppearHook')
    },
    customAfterAppearHook: function () {
      console.log('customAfterAppearHook')
    },
    customAppearCancelledHook: function () {
      console.log('customAppearCancelledHook')
    },
    change: function () {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
.custom-appear-class {
            opacity: 0
        }

        .custom-appear-active-class {
            transition: opacity 2s;
        }

        .custom-appear-to-class {
            opacity: 1
        }
</style>
