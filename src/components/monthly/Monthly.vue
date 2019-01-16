<template>
  <section>
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
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">收藏管理</a></el-menu-item>
          </el-menu>
        </el-header>

        <el-main>
          <el-table v-bind:data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
              <!--<span>-->
                <!--<el-button type="text" size="small" v-on:click="" icon="edit">编 辑</el-button>-->
                <el-button type="text" size="small" v-on:click="" icon="delete">删 除</el-button>
              <!--</span>-->
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tableData:[
          {
            date: '2016-05-02',
            name: '燕潇洒',
            address: '苏州市工业园区'
          },{
            date: '2016-05-02',
            name: '袁泽重',
            address: '上海市宝山区'
          },{
            date: '2016-05-02',
            name: '纵曼曼',
            address: '合肥市瑶海区'
          },{
            date: '2016-05-02',
            name: '赵发祥',
            address: '合肥市庐阳区'
          },{
            date: '2016-05-02',
            name: '胡月',
            address: '合肥市蜀山区'
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);

      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);

        //遍历所有元素,修改背景颜色
        var allElement=document.getElementsByTagName("*"); //得到所有元素
        for (let i = 0; i < allElement.length; i++) {
           var element = allElement[i];
           element.style.background = "#0f0";
        }
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
