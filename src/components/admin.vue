<template>
<div class="container">
  <el-row>
    <el-col :span="6">
      <div class="title">
        博客后台
      </div>
    </el-col>
    <el-col :span="18">
      <div class="title title-content"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
        <el-submenu index="1">
          <template slot="title">导航一</template>
          <el-menu-item-group title="分组一">
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">导航二</el-menu-item>
        <el-menu-item index="3">导航三</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>
</div>
</template>
<script>
  export default {
    name: 'admin',
    data() {
      return {
        login:{
          username:"",
          password:''
        }
      }
    },
    methods: {
      cancelLogin(){
        this.$router.push('/index')
      }

    },
    created() {

    }

  }

</script>
<style scoped>

  div.container{
    width: 100%;
    /*height: 100%;*/
  }
  div.title{
    background: #20a0ff;
    color: white;
    font-size: 36px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    font-family: "Microsoft YaHei,Helvetica";


  }
  div.title-content{
    border-left: 1px solid #eeeeee;
  }

</style>
