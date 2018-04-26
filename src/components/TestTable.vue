<template>
  <extendTable :projectData='projectData' :tableHeadData='tableHeadData' :tableData='tableData'></extendTable>
</template>
<script>
import extendTable from '@/module/common/MyExtendTable'
export default {
  data(){
    return {
      tableHeadData:[
        {
          brandName: '宝马',
          projectNameProp: 'projectName',
          storeNameData: [
            {
              label: '运通兴奥',
              prop: 'data1'
            },
            {
              label: '运通嘉宝',
              prop: 'data2'
            },
            {
              label: '运通嘉兴',
              prop: 'data3'
            }
          ]
        },
        {
          brandName: '奥迪',
          storeNameData: [
            {
              label: '运通兴奥',
              prop: 'data1'
            },
            {
              label: '运通嘉宝',
              prop: 'data2'
            },
            {
              label: '运通嘉兴',
              prop: 'data3'
            }
          ]
        },
        {
          brandName: '奔驰',
          storeNameData: [
            {
              label: '运通兴奥',
              prop: 'data1'
            },
            {
              label: '运通嘉宝',
              prop: 'data2'
            },
            {
              label: '运通嘉兴',
              prop: 'data3'
            }
          ]
        }
      ],
      tableData: [
        {
          item: {
            plan: '目标值',
            act: '实际值',
            finish: '完成率'
          },
          projectName: '销量',
          data1: {
            plan: '1',
            act: '1',
            finish: '100%'
          },
          data2: {
            plan: '3',
            act: '3',
            finish: '100%'
          },
          data3: {
            plan: '12',
            act: '12',
            finish: '100%'
          }
        },
        {
          projectName: '其中直客',
          data1: {
            plan: '11',
            act: '11',
            finish: '100%'
          },
          data2: {
            plan: '13',
            act: '13',
            finish: '100%'
          },
          data3: {
            plan: '112',
            act: '112',
            finish: '100%'
          }
        },

      ],
      projectData: {
        1: '销量',
        2: '其中直客',
        3: '综合毛利率',
        4: '裸车毛利率',
        5: '衍生毛利率',
        6: '单车衍生利润',
        7: '单车用品产值（万元）',
        8: '用品毛利率',
        9: '新车投保率',
        10: '分期渗透率',
        11: '延保渗透率',
        12: '库存深度',
        13: '大库龄车占比',
        14: '现金车金额占比',
        15: '超报车月末库存量',
      },
    }
  },
  components: {
    extendTable
  }
}
</script>
