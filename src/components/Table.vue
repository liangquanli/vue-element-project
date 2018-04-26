<template>
<div>
  <el-button type="" @click="back" style="float:right">返回</el-button>
  <comVariableTable :tableData='tableData' :tableHeadData='tableHeadData' :sizeChange='sizeChange' :currentChange='currentChange' :total='total' :tableHandleData='tableHandleData' @saveData="saveData" @editData="editData" :tableHeight="tableHeight" :clientWidth="clientWidth">
  </comVariableTable>
</div>
</template>

<script>
import comVariableTable from '@/module/common/ComVariableTable'
import mock from '@/mock/mock'
export default {
  name: 'HelloWorld',
  data () {
    return {
      topHeight: 100,
      tableHeight: document.body.clientHeight - 100,
      clientWidth:document.documentElement.clientWidth,
      tableHandleData: {
        isHaveHandle: true,
        handleName: '操作',
        width: 150,
        handleBtnData:[
          {type: 'primary', clickAction:'saveData', title: '保存' },
          {type: 'primary', clickAction: 'editData', title: '编辑' }
        ]
      },
      tableData:[
        {name: '张三', age: '28', birthday: '1991-10-18', sex: '男'},
        {name: '李晓', age: '18', birthday: '1991-10-18', sex: '女'},
        {name: '丽丽', age: '28', birthday: '1991-10-18', sex: '女'},
        {name: '李四', age: '30', birthday: '1991-10-18', sex: '男'}
      ],
      tableHeadData:[
        {prop: 'name', title: '姓名', width: 150},
        {prop: 'age', title: '年龄', width: 120},
        {prop: 'birthday', title: '生日', width: 200},
        {prop: 'sex', title: '性别', width: 200},
      ],
      total: 10
    }
  },
  methods: {
    sizeChange(){
      this.tableData.push({name: '张三', age: '28', birthday: '1991-10-18', sex: '男'})

    },
    currentChange(){

    },
    saveData(val){
      console.log(val);
      this.showLoadingAct('保存成功', '玩命加载中');
    },
    editData(val){
      console.log(val);
      this.showLoadingAct('编辑成功', '玩命加载中');
    },
    serachData(){
      this.apGet({
        url: 'lql/liangquanli/test',
        params: {
          size: 10,
          page: 1,
          suc: 'suc'
        }
      })
    },
    back(){
      window.history.back();
    },
    suc(res){
      console.log(res);
    }
  },
  components: {
    comVariableTable
  },
  mounted() {
    console.log('clientHeight', document.documentElement.clientHeight);
    console.log('clientWidth', document.documentElement.clientWidth);
    // 监听窗口高度变化
    const that = this
    window.onresize = () => {
      return (() => {
        that.tableHeight = document.documentElement.clientHeight - that.topHeight;
      })()
    }
  },
  created(){
    this.serachData();
  }
}
</script>
