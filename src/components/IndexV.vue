<template>
  <div>
    <el-button type="" @click="click1">动态table demo</el-button>
    <el-button type="" @click="click2">动态table表头 demo</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    click1(){
      window.location.href = '/table';
    },
    click2(){
      window.location.href = '/testTable';
    }
  }
}
</script>