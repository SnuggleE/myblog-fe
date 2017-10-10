<template>
  <div id="app">
   <transition name="route">
     <router-view></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'blog',
  watch: {

  }
}
</script>

<style scoped>
  .route-enter-active {
    transition: opacity 1s
  }
  .route-enter/* .route-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  div#app{
    width: 1020px;
    margin: 0 auto;
    box-sizing: border-box;
    /*border: 1px solid #666;*/
  }
</style>
