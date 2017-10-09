<template>
<div class="container">
    <el-row>
      <el-col :span="22">
        <h1>文章列表</h1>
      </el-col>
      <el-col :span="2">
        <router-link to="/login">管理员登陆</router-link>
      </el-col>
    </el-row>
  <el-table :data="articles" >
    <el-table-column width="80px" type="index" label="序号"></el-table-column>
    <el-table-column align="center" label="标题">
      <template scope="scope">
        <router-link :to="scope.row.path">{{scope.row.title}}</router-link>
      </template>
    </el-table-column>
  </el-table>
  <el-row>
    <el-col :span="6" :offset="6">
      <router-link to="/home">作者主页</router-link>
    </el-col>
  </el-row>
</div>
</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {
        articles:[
          {
            id:1,
            title:"地图投影",
            path:'article/1'
          },
          {
            id:1,
            title:"地图投影",
            path:'article/2'
          }
        ]
      }
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
div.container{

}
</style>
