<template>

  <section id="login">
    <el-button>子节点2</el-button>
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

      }
    }
  }
</script>
