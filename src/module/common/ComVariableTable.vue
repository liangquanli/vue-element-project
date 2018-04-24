<template>
  <div :style="{'width': width, 'margin-left': left}">
    <el-table :data="tableData" border highlight-current-row :height="tableHeight" >
        <el-table-column v-if="tableHandleData && tableHandleData.isHaveHandle" :label="tableHandleData.handleName" align="center" fixed :width="tableHandleData.width">
          <template slot-scope="scope">
            <el-button v-for="(item, index) in tableHandleData.handleBtnData" :key="index" :type=' item.type' @click="shareFunc(item.clickAction, scope.row)" size="mini">{{ item.title }}</el-button>
          </template>
        </el-table-column>
        <el-table-column v-for="(item, index) in tableHeadData" :key="index" :prop="item.prop" :label="item.title" align="center" :width="item.width">
        </el-table-column>
    </el-table>
    <el-pagination class="ap-pagination" @size-change="sizeChange" @current-change="currentChange" layout="total,->, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'comVariableTable',
  data(){
    return {
      size: 10,
      page: 0,
      width: '300px',
      left: '0px'
    }
  },
  props: {
    // 表数据
    tableData: {
      type: Array
    },
    // 表头
    tableHeadData: {
      type: Array
    },
    // top 表格数据距顶部高度
    tableHeight: {
      // type: Number
    },
    sizeChange: {
      type: Function
    },
    currentChange: {
      type: Function
    },
    total: {
        type: Number
    },
    // 操作
    tableHandleData: {
        type: Object
    },
    clientWidth: {
      type: Number,
    }
  },
  mounted(){
    this.$nextTick(function(){
      let totalWidth = 0;
      this.tableHeadData.forEach(item => {
        totalWidth += item.width;
      });
      console.log('left', this.left);
      let totalWid = this.tableHandleData && this.tableHandleData.isHaveHandle ? (this.tableHandleData.width + totalWidth + 1): (totalWidth + 1);
      this.width = totalWid + 'px';
      console.log('this.clientWidth', this.clientWidth);
      console.log('totalWid', totalWid);
      this.left = (this.clientWidth - totalWid) / 2 + 'px';
      console.log('left', this.left);
      console.log(this.width);
    })
  },
  watch:{
    tableHeight: {
      handler: function(val){
        this.tableHeight = val;
        console.log('tableHeight', this.tableHeight);
        },
        deep:true
    }
  },
  methods: {
    shareFunc(funcName, param){
      this.$emit(funcName, param);
    }
  }
}
</script>
<style>
.el-pagination__total{
  float: left;
}
</style>


