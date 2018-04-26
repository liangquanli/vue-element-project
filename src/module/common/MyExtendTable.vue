<template>
  <el-table :data="tableData">
    <el-table-column label="项目" width="">
      <template slot-scope="scope">
        <div>{{ scope.row.projectName }}</div>
      </template>
    </el-table-column>
    <el-table-column label="分项" width="">
      <template slot-scope="scope">
        <div>目标值</div>
        <div>实际值</div>
        <div>完成率</div>
      </template>
    </el-table-column>
    <template v-for="(item, index) in tableHeadData">
      <el-table-column :label="item.brandName" align="center">
        <el-table-column v-for="(data, index) in item.storeNameData" :current-row-key="index" :prop="data.prop" :label="data.label" width="">
          <template slot-scope="scope">
            <div v-for="(val, key) in scope.row[data.prop]">{{val}}</div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="合计"></el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  name: 'extendTable',
  data(){
    return {
    }
  },
  props: {
    data: {
      type: Array
    },
    projectData:{
      type: Object
    },
    tableHeadData: {
      type: Array
    },
    tableData: {
      type: Array
    }
  },
  mounted(){
    console.log(this.tableHeadData);
    console.log(this.tableData);
  },
  components: {
    
  }
}
</script>
