const Mock = require('mockjs')

// 配置mick路径
Mock.mock('lql/liangquanli/test',  function(options){
  var data = JSON.parse(options.body);
  var size = data.size;
  var page = data.page;
  var dataStr = 'tableData|' + size;
  console.log(dataStr);
  var templateData = {
  }

  templateData[dataStr] =  [{
    'status': '通过|失败',
    'name|2-8': '@ctitle(1, 3)',
    'year':'1991',
    'date': '@date',
    'phone': /^1[385][1-9]\d{8}/,
    'creator_name': '@cname()'
  }]
  var data = Mock.mock(templateData)
  return data  
})