import Vue from 'vue'
import Vuex from 'vuex'

//抽离出去的 对象
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//使用vue.use安装
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shoppingCartList: []
  },
  mutations,
  actions,
  getters,
  modules: {}
})

export default store