<template>
<div>
    <h1>文章首页</h1>
    <p>
        <el-button type="success">首页</el-button>
    </p>
    <p>
        <el-button type="primary" @click="gotoHello">Hello</el-button>
    </p>
    <p>
        <router-link to="/hello">hello</router-link>
    </p>
</div>
</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {}
    },
    methods: {
      gotoHello(){
        this.$router.push({
          path:'/hello'
        })
      }

    },
    created() {

    }

  }

</script>
<style scoped>

</style>
