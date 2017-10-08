<template>
  <div class="hello">
    <h1>{{article.title}}</h1>
    <div>{{article.content}}</div>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'articleDetail',
  data () {
    return {
      article:{
        title:"地图投影",
        content:"从地球球面到地图平面建立点与点对应关系的数学法则"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
