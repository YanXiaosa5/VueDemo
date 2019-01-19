<template>
  <section>
    <!--<a href="Monthly.vue"><span>这是超链接</span></a>-->
    <el-container>
      <el-aside>
        <el-menu
          class="el-menu-vertical-demo"
          style="text-align: left;"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的主页</span>
            </template>
            <!--子菜单距离一级菜单的间距-->
            <el-menu-item-group style="margin-top: -10px;">
              <el-menu-item style="padding-left: 60px" index="1-1">选项1</el-menu-item>
              <el-menu-item style="padding-left: 60px" index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">我的收藏</span>
          </el-menu-item>
          <el-menu-item index="3" disabled><!--disabled 不可用-->
            <i class="el-icon-document"></i>
            <span slot="title">我的最爱</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">尹山湖韵</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-question"></i>
            <span slot="title">阳光天地</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-location"></i>
            <span slot="title">弘扬上湖</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-edit"></i>
            <span slot="title">庐州月光</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">个人中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">诗句鉴赏</template>
              <el-menu-item index="2-1">评价</el-menu-item>
              <el-menu-item index="2-2">点赞</el-menu-item>
              <el-menu-item index="2-3">收藏</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">更多</template>
                <el-menu-item index="2-4-1">修改</el-menu-item>
                <el-menu-item index="2-4-2">删除</el-menu-item>
                <el-menu-item index="2-4-3">增加</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
          </el-menu>
        </el-header>

        <el-main>
          <el-table v-bind:data="tableData" :row-class-name="tableColor">
            <el-table-column prop="title" label="标题" width="200"></el-table-column>
            <el-table-column prop="content" label="内容" width="200"></el-table-column>
            <el-table-column width="200"></el-table-column>
            <el-table-column prop="authors" label="作者"></el-table-column>
          </el-table>
          <div class="pager">
            <el-pagination v-bind:page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper" v-bind:page-sizes="pageSizes"
                           v-bind:current-page="currentPage"
                           :total="1000"
                           v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">

            </el-pagination>
          </div>
        </el-main>

      </el-container>
    </el-container>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        pageSize: 10, //每页数量
        pageSizes: [10, 20, 50, 100],
        currentPage: 1,//页码
        activeIndex: '1',
        activeIndex2: '1',
        dialogVisible: false,
        tableData: []
      };
    },
    mounted: function () {
      var self=this;
      self.$nextTick(function(){
        self.requestData();
      });
    },
    methods: {
      tableColor({row, rowIndex}) {
        console.log("row="+rowIndex)
        if (rowIndex % 2 === 1) {
          return 'warning-row';
        } else if (rowIndex % 2 === 0) {
          return 'success-row';
        }
        return '';
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      sizeChange(val){ //每页数量改变,
        this.pageSize = val;
        this.requestData();
      },
      pageIndexChange(val){//页码改变
          this.currentPage = val;
          this.requestData();
      },
      requestData() {
        //加载框设置
         var mLoading = this.$loading({fullscreen: true,
          text: '数据加载中',
          background: 'rgba(255, 255, 255, 0.5)'});

         //接口请求
        var self = this;
        self.$axios({
          method: 'get',
          url: 'https://api.apiopen.top/getTangPoetry?page='+this.currentPage+'&count='+this.pageSize
        })
          .then(function (response) {
            mLoading.close();
            self.tableData = response.data.result;
          }).catch(function (error) {
            this.$alert(error.message+"", '网络错误', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
        });
        //请求结束
      }
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .pager{
    padding: 10px;
    background-color: lightgray;
  }
</style>
