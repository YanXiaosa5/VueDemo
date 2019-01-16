<template>

  <div id="manifests">
    <div>
      开始日期：
      <el-date-picker v-model="start" type="date" placeholder="选择日期"></el-date-picker>
      结束日期：
      <el-date-picker v-model="end" type="date" placeholder="选择日期"></el-date-picker>
      <el-button type="primary" size="small" v-on:click="fetchData" icon="search">查 询</el-button>
      <el-button type="primary" size="small" @click="add" icon="plus">添 加</el-button>
    </div>
    <div class="table">
      <el-table v-bind:data="manifests" highlight-current-row border height="500">
        <el-table-column prop="Date" label="日期"></el-table-column>
        <el-table-column prop="Cost" label="金额"></el-table-column>
        <el-table-column prop="Remark" label="备注"></el-table-column>
        <el-table-column inline-template label="操作">
            <span>
                <el-button type="text" size="small" v-on:click="edit(row.ID)" icon="edit">编 辑</el-button>
                <el-button type="text" size="small" v-on:click="del(row.ID)" icon="delete">删 除</el-button>
            </span>
        </el-table-column>
      </el-table>
    </div>

    <div class="pager">
      <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                     layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
                     v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">

      </el-pagination>

    </div>
    <div>
      <el-dialog v-bind:title="title" v-bind:close-on-click-modal="false" v-show="showOperateManifest">
        <el-form v-bind:model="manifest" v-bind:rules="rules" label-position="left"
                 label-width="80px">
          <!--<el-form-item label="日  期" prop="Date">-->
          <!--<el-date-picker v-model="manifest.Date"></el-date-picker>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="金  额" prop="Cost">-->
          <!--<el-input v-model="manifest.Cost"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="备  注" prop="Remark">-->
          <!--<el-input v-model="manifest.Remark"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
          <!--<el-button type="primary" v-on:click="save">确 定</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    template: "#manifests",
    created: function () {
      this.fetchData();
    },
    data: function () {
      let currentDate = new Date();
      let costValidator = (rule, value, callback) => {
        if (!/^[0-9]+(.[0-9]{2})?$/.test(value)) {
          callback(new Error("请输入合法金额"));
        }
        else {
          callback();
        }
      };
      return {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1),
        end: new Date(),
        manifests: [],
        title: "",
        manifest: {},
        showOperateManifest: true,
        isAdd: false,
        rules: {
          Date: [
            {type: "date", required: true, message: "请选择消费日期", trigger: "change"}
          ],
          Cost: [
            {required: true, message: "请填写消费金额", trigger: "blur"},
            {validator: costValidator, trigger: "change"}
          ],
          Remark: [
            {required: true, message: "请填写消费明细", trigger: "blur"}
          ]
        },
        pageIndex: 0,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 20, 50, 100]
      }
    },
    methods: {
      fetchData() {

      },
      add() {
        this.title = "添加消费明细";
        // this.manifest = {
        //   ID:"1",
        //   Date: new Date(),
        //   Cost: "",
        //   Remark: ""
        // };
        this.isAdd = true;
        this.showOperateManifest = true;
      }
    }
  }
</script>

<style scoped>

</style>
