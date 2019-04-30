<template>
  <!--http://www.cnblogs.com/guokun/p/6068652.html-->
  <!--http://idea.lanyus.com/-->
  <el-container>
      <el-menu style="align-content: space-around; align-self: center; color: white" v-bind:router="true" mode="horizontal">
        <el-menu-item class="menu" index="/manifests">日消费明细</el-menu-item>
        <el-menu-item class="menu" index="/daily">日消费清单</el-menu-item>
        <el-menu-item class="menu" index="/monthly">月消费清单</el-menu-item>
        <el-menu-item class="menu" index="/yearly">年消费清单</el-menu-item>
      </el-menu>
    <el-container>
      <el-main>

      </el-main>
    </el-container>
  </el-container>

</template>
<style>
   .menu{
     background: #8cc5ff;
     width: 200px;
     height: 200px;
     color: white;
     text-align: center;
   }
</style>
<script>
  export default {
    data() {
      return {
      }
    },

    watch: {

    },
    mounted() {

    },
    methods: {}
  }
</script>
