<template>
<div class="container">
    <h1>我的文章</h1>
</div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'adminIndex',
    components:{
      "vue-markdown":VueMarkdown
    },
    data() {
      return {
        text:`# h1 Heading 8-)
<h2> h2 Heading by HTML</h2>
## h2 Heading
### h3 Heading

## Horizontal Rules`
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
