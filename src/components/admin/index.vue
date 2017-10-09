<template>
<div class="container">
    <el-row>
        <el-col :span="12">
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 20, maxRows: 22}"
                    placeholder="请输入内容"
                    style="font-family: 'Times New Roman';border: none"
                    @change="textChange"
                    v-model="text">
            </el-input>
        </el-col>
        <el-col :span="12">
            <vue-markdown :source="text">

            </vue-markdown>
        </el-col>
    </el-row>
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
