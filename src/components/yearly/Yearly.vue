<template>
  <section>
    <el-container>
      <el-main>
        <!--列表-->
        <el-table :data="tableData">
          <!--头像-->
          <el-table-column prop="profile_image" header-align="center" align="center" label="头像" width="300">
            <template slot-scope="scope">
              <el-popover
                placement="right"
                title=""
                trigger="hover">
                <!--放大的图片-->
                <div><img :src="scope.row.profile_image"/></div>
                <!--显示的图片-->
                <img slot="reference" :src="scope.row.profile_image" :alt="scope.row.profile_image" style="width: 100px; height: 100px;">
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="视频">
            <template slot-scope="scope">
              <video :src="scope.row.videouri" controls width="200px" height="120px"/>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click.native.prevent="">编辑</el-button>
              <el-button
                size="mini"
                type="success"
                @click.native.prevent="">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 2,
        tableData: []
      }
    },
    mounted: function () {
      var self = this;
      self.$nextTick(function () {
        self.requestData();
      });
    },
    methods: {
      requestData() {
        //加载框设置
        var mLoading = this.$loading({
          fullscreen: true,
          text: '数据加载中',
          background: 'rgba(255, 255, 255, 0.5)'
        });

        //接口请求
        var self = this;
        self.$axios({
          method: 'get',
          url: 'https://www.apiopen.top/satinApi?type=4&page=' + this.currentPage
        })
          .then(function (response) {
            mLoading.close();
            self.tableData = response.data.data;
          }).catch(function (error) {
          this.$alert(error.message + "", '网络错误', {
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
  };
</script>

<style>
  /*https://blog.csdn.net/qq_41485414/article/details/81061576*/
  div img{max-width: 100%;height: auto;}
</style>
