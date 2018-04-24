import Vue from 'vue';

Vue.mixin({
  methods: {
    showLoadingAct(message, loadingMessage){
      const loading = this.$loading({
        lock: true,
        text: loadingMessage,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          message: message,
          type: 'success'
        });
      }, 2000);
    },
    getAxios() {
      return axios;
    },

    /*
      params 参数
      url 地址
      suc  成功回调
      err 失败回调
      loading 延迟开关
      total 分页总数
      target 目标赋值
    */

    // get 请求
    apGet(queryObj) {
      var params = { params: {} };
      if (queryObj.params) {
        for (var key in queryObj.params) {
          if (util.isEmpty(queryObj.params[key])) {
            delete queryObj.params[key];
          }
        }
        params.params = queryObj.params;
      }
      if (queryObj.loading) {
        this[queryObj.loading] = true;
      }
      this.getAxios().get(queryObj.url, params).then(res => {
        if (res.data.success) {
          if (queryObj.target) {
            this[queryObj.target] = res.data.data;
          }
          if (queryObj.total) {
            this[queryObj.total] = res.data.total;
          }
          if (queryObj.suc) {
            this[queryObj.suc](res);
          }
          if (queryObj.loading) {
            this[queryObj.loading] = false;
          }

        } else {
          if (queryObj.loading && !obj.strict) {
            this[queryObj.loading] = false;
          }
          this.apError(res.data.msg);
          if (queryObj.err) {
            this[queryObj.err](res);
          }
          
        }
      }).catch(err => {
        if (queryObj.loading && !queryObj.strict) {
          this[queryObj.loading] = false;
        }
        console.log(err);
        this.apError('发生错误');
        if (queryObj.err) {
          this[queryObj.err](err);
        }
      })
    },
    // post 提交
    apNewPost(obj) {
      if (obj.loading) {
        this[obj.loading] = true;
      }
      var params = {};
      if (obj.params) {
        params = obj.params
      }
      axios.post(obj.url, params).then(res => {
        if (res.data.success) {
          this.apSuccess();
          if (obj.suc) {
            this[obj.suc](res);
          }
          if (obj.loading) {
            this[obj.loading] = false;
          }
        } else {
          if (obj.loading && !obj.strict) {
            this[obj.loading] = false;
          }
          if (obj.err) {
            this[obj.err](res)
          }
          this.apError(res.data.msg)
          
        }
      })
      .catch(error => {
        if (obj.loading && !obj.strict) {
          this[obj.loading] = false;
        }
        console.log(error)
        this.apError('发生错误');
        
        if (obj.err) {
          this[obj.err](err);
        }
      })
    }
  }
})