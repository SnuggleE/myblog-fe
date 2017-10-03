<template>
  <div id="app">
   <transition name="route">
     <router-view></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route'(to, from) {
      console.log(to,from)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
  .route-enter-active, .route-leave-active {
    transition: opacity 2s
  }
  .route-enter, .route-leave-to /* .route-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
