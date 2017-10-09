<template>
<div class="container">
    <el-row>
        <el-col :span="24">
            <div class="button-container">
                <input type="checkbox" name="vehicle" v-model="showPre"> 是/否预览
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="textarea-container">
                <textarea
                        spellcheck="false"
                        type="textarea"
                        placeholder="请输入内容"
                        style="width:100%;min-height:450px;font-size:18px;
                        padding: 12px;
                        background: rgba(222,222,222,0.5);
                    outline:none;font-family: 'Times New Roman';border: none;"
                        @change="textChange"
                        v-model="text"></textarea>
            </div>

        </el-col>
        <el-col :span="12">
            <div v-show="showPre" class="markdown-container">
                <vue-markdown :source="text"></vue-markdown>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8" :offset="8">
            <div style="padding: 8px">
                <el-button @click="submitArticle" type="success">发布</el-button>
                <el-button type="warning">取消</el-button>
            </div>
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

## Horizontal Rules`,
        showPre:true
      }
    },
    methods: {
      gotoHello(){
        this.$router.push({
          path:'/hello'
        })
      },
      textChange(){
//        console.log(this.text)
      },
      submitArticle(){
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
    div.markdown-container{
        padding: 12px;
        border: 1px dashed #aaa;
        height: 450px;
        overflow: auto;
    }
    div.textarea-container{
        /*padding: 0 12px;*/
        border: 1px solid #bbb;
        background: rgba(222,222,222,0.5);
        overflow: hidden;
        box-sizing: border-box;
    }
</style>
