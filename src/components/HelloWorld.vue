<template>

  <section class="section">
    <el-button class="el-button" @click="submitLogin">默认按钮</el-button>

  </section>

</template>
<script>
  export default {
    name:'login',
    data(){
      return {
        userName:'admin',
        password:'123456',
        rememberPassword:false
      }
    },
    mounted(){

    },
    methods:{
      submitLogin(){

        alert("点击了")
        var self = this;
        self.$axios({
          method: 'post',
          url: 'http://10.0.0.124/api/public/login/v1',
          data: {
            account: "admin",
            password: "123456"
          }
        })

          .then(function (response) {
            if(response.data.code==200){
              this.$message({
                showClose: true,
                message: "请求成功",
                type: type,
                duration:1500
              })
            }else{//请求失败
              this.$message({
                showClose: true,
                message: "请求失败",
                type: type,
                duration:1500
              })
            }
          })
          .catch(function (error) {
            this.$message({
              showClose: true,
              message: "请求错误",
              type: type,
              duration:1500
            })
          });
      }
    }
  }
</script>

<style>
  .section{
    width: 100%;
    height: 100px;
    align-content: flex-start;
    line-height: 100px;
    background-color: aliceblue;
  }
  .el-button{
    margin: 10px;
    align-self: flex-start;
  }
</style>
