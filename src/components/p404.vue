<template>
<div>
    <h3 class="warning-info">未找到相关页面,<router-link to="/">返回首页</router-link></h3>

</div>
</template>
<script>
  export default {
    name: 'P404',
    data() {
      return {}
    },
    methods: {

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
</style>
