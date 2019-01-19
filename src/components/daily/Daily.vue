<template>
  <section>
    <div>

      <div><p style="text-align: center; line-height: 1.4;"><span
        style="font-weight: 700; font-size: 18px;">高德服务条款</span></p>
        <p style="line-height: 1.4;"><b><u>请您务必认真阅读并充分理解《高德服务条款》、<a
            href="http://cache.amap.com/h5/h5/publish/238/index.html" target="_blank"><font
            color="#0000ff">《高德隐私权政策》</font></a>以及开通或使用某项服务的附加条款（统称为“高德服务协议”），</u></b>
        </p>
        <p style="line-height: 1.4;"><span style="font-weight: 700;">2.1<span style="white-space: pre;">	</span><u>在您使用高德产品或服务的过程中，我们会基于您需求的服务，收集和使用您的个人信息，包括您的位置信息、设备信息，部分功能中还会包括您的身份信息、联系方式及交易信息。请您认真阅读<a
          href="http://cache.amap.com/h5/h5/publish/238/index.html" target="_blank"><font
          color="#0000ff">《高德隐私权政策》</font></a>并在确认同意后使用相关服务</u>。</span></p>
        <p style="line-height: 1.4;">3.2<span style="white-space: pre;">	</span><span style="font-weight: 700;"><u><a
          href="http://cache.amap.com/h5/h5/publish/238/index.html" target="_blank"><font
          color="#0000ff">《高德隐私权政策》</font></a>介绍了您在使用我们的服务时，我们会如何处理您的个人信息及数据。请您务必认真阅读，在确认充分了解并同意后使用高德产品或服务</u>。</span>
        </p>
        </div>

      <el-dialog
        id="dialog"
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

    </div>
    <button id="btn" v-on:click="aaa">点击</button>
  </section>
</template>

<script>
  export default {

    name: "Daily",
    data() {
      return {
        dialogVisible:true,
        tableData:[]
      };
    },

    beforeUpdate(){
      this.dragDialog()
    },

    methods: {
      aaa(){
        var alinks = document.getElementsByTagName("a");
        if(alinks.length > 0){
          for (let i = 0; i < alinks.length; i++) {
            alinks[i].style.color = "#ff0000"
            this.forNode(alinks[i]);
          }
        }
      },
      forNode(childNode) {
        var children = childNode.childNodes;
        if(children.length > 0){
          for (let j = 0; j < children.length; j++) {
            if (children[j].childNodes > 0) {
              if(childNodes[j].nodeType == 1) {
                this.forNode(childNodes[j]);
              }
            }else{
              children[j].style.color = "#a3ff7d"
            }
          }
        }
      },
      dragDialog(){
        $("#btn").click(function () {
          alert("点击了")
        })
      }
    }
  }
</script>

