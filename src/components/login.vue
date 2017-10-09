<template>
<div class="container">
  <div class="login-box">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-input v-model="login.username" placeholder="用户名"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-input v-model="login.password" type="password" placeholder="密码"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click="gotoAdmin">登陆</el-button>
      </el-col>
      <el-col :span="12">
        <el-button @click="cancelLogin">取消</el-button>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
  export default {
    name: 'Login',
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
      },
      gotoAdmin(){
        this.$router.push('/admin')
      }

    },
    created() {

    }

  }

</script>
<style scoped>
h3.warning-info{
  text-align: center;
  color: aqua;
  font-size: 32px;
}
  div.login-box{
    width: 300px;
    border: 1px solid #eee;
    box-shadow:0 0 10px #999;
    padding: 20px;


  }
  div.container{
    width: 100%;
    /*height: 100%;*/
  }
.el-row {
  margin-bottom: 20px;

}
.el-row:last-child {
   margin-bottom: 0;
 }
</style>
