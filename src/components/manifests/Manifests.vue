<template>
  <el-container>
    <el-main>
      <div style="background-color: #EBEBEB;min-height:800px">
        <div style="width:100%;background-color: #636363; overflow: hidden">
          <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%"> 网站首页 </span>
          <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
            <el-input placeholder="请输入" icon="search" v-model="searchCriteria" :on-icon-click="handleIconClick"></el-input>
          </span>
          <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="color:white"><i class="el-icon-caret-bottom el-icon--right">Admin</i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
        <div style="margin-top:5px">
          <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
              <div>
                <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px"
                         @select="handleSelect">
                  <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
                  <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                  <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
              </div>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :lg="20">
              <div>
                <div
                  style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item">{{item}}</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
              </div>
              <div style="margin-top:10px">
                <router-view></router-view>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>

    <el-footer>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in pictures" :key="item">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </el-footer>

  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        searchCriteria: '搜索',
        breadcrumbItems: ['导航一'],
        pictures: [
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506051959mom1-cn30.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506051958mom1-cn59.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052007mom1-cn99.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052005mom1-cn15.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052004mom1-cn56.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052003mom1-cn58.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052002mom1-cn54.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506052000mom1-cn82.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506051850mom1-cn62.jpg",
          "https://www.mom1.cn/wp-content/uploads/2019/05/20190506051849mom1-cn11.jpg"
        ],
        netPictures: []
      }
    },
    created() {

    },
    methods: {
      getPictures() {
        var that = this;
        that.$axios({
          method: "get",
          url: ""
        }).then(response => {
          console.log(response.data);
        })
      },
      handleIconClick(ev) {
        alert("点击");
      },
      handleSelect(key,keyPath){
        switch (key) {
          case "1":
            this.$router.push('/daily');
            this.breadcrumbItems = ["日晚倦梳头"];
            break
          case "2":
            this.$router.push('/monthly');
            this.breadcrumbItems = ["月上西楼"];
            //
            break
          case "3":
            this.$router.push('/yearly');
            this.breadcrumbItems = ["年去岁来"];
            break
        }
      }
    }
  }

</script>

<style>

  .el-carousel__item img {
    opacity: 1;
    width: 80%;
  }

  /*背后显示的*/
  .el-carousel__item:nth-child(2n) {
    background-color: #b3c0d1;
    height: 300px;
  }

  /*当前显示的*/
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    height: 300px;
  }

  img {
    width: 100%;
    height: 300px;
  }


</style>
