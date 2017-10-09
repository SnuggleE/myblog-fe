<template>
<div class="container">
    pics
</div>
</template>
<script>
  export default {
    name: 'pictures',

    data() {
      return {

      }
    },
    methods: {
      gotoHello(){
        this.$router.push({
          path:'/hello'
        })
      },
      textChange(){
        console.log(this.text)
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
