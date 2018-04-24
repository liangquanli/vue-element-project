const Mock = require('mockjs')
var templateData = {
  'tableData|20': [{
    'name': '@cname()',
    'phone': /^1[385][1-9]\d{8}/,
    'address': '@province' + '@city' + '@county',
    'bz': '我是备注，我是备注！',
    'date': '@date("yyyy-MM-dd")'
  }]
}

// 配置mick路径
Mock.mock('api/liangquanli/test', templateData)