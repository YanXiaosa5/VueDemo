<template>
<!--http://www.cnblogs.com/guokun/p/6068652.html-->
  <!--http://idea.lanyus.com/-->
  <section id="login">
    <el-menu default-active="manifests" theme="dark" v-bind:router="true">
      <el-menu-item index="manifests">日消费明细</el-menu-item>
      <el-menu-item index="daily">日消费清单</el-menu-item>
      <el-menu-item index="monthly">月消费清单</el-menu-item>
      <el-menu-item index="yearly">年消费清单</el-menu-item>
    </el-menu>
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
