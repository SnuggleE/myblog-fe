<template>
  <div class="hello">
    <h1>我的博客网站</h1>
    <el-button type="success">不同ton</el-button>
    <el-tag type="success">WEB前端</el-tag>
    <el-tag type="success">GIS</el-tag>
    <p>
      <router-link to="/index">index</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
