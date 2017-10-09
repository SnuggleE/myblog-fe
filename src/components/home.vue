<template>
  <div class="person-page">
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: 'Welcome to Your Vue.js App',
      desc:'大家好，给大家介绍一下，这是我！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
