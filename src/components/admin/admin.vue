<template>
<div class="container">
  <el-row>
    <el-col :span="4">
      <div class="title">
        <router-link to="/">blog后台</router-link>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="title title-content">
        <div class="btn-box">
           <span class="wrapper">
    <el-button size="small" type="info" @click="gotoIndex">返回首页</el-button>
  </span>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <el-menu :defaultActive="currentUrl" router theme="dark">
        <el-menu-item index="/admin/index">我的文章</el-menu-item>
        <el-menu-item index="/admin/add">添加文章</el-menu-item>
        <el-menu-item index="/admin/pictures">图床</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="admin-router-view">
        <router-view></router-view>
      </div>
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
        },
        currentUrl:''
      }
    },
    methods: {
      cancelLogin(){
        this.$router.push('/index')
      },
      gotoIndex(){
        this.$router.push('/')
      }
    },
    created() {
      let context=this;
      context.currentUrl=context.$router.history.current.path

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
    font-size: 22px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    font-family: "Microsoft YaHei,Helvetica";
  }
  div.title a{
    text-decoration: none;
    color: white;
    font-size: 22px;
  }
  div.title-content{
    border-left: 1px solid #eeeeee;
    padding-right: 30px;
  }
  div.admin-router-view{
    padding: 12px;
  }
  div.btn-box{
    width: 70px;
    line-height: 50px;
    height: 50px;
    float: right;
  }
</style>
