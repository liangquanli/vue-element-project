import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import IndexV from '@/components/IndexV'
import TestTable from '@/components/TestTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexV
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/testTable',
      name: 'TestTable',
      component: TestTable
    }
  ]
})
