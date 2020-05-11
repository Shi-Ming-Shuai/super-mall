//自己封装的插件

//导入封装好的组件
import Toast from 'components/common/toast/Toast'

//步骤一： 创建一个对象
const obj = {}

//步骤二： 配置对象的install方法 （这个方法可以传递Vue作为参数）
obj.install = function (Vue) {
  //1. 在body的元素节点上 添加Toast.$el 元素节点

    //1.1 创建组件构造器
    const ToastConstructor = Vue.extend(Toast)
    //1.2 创建组件对象 new  创建组件构造器实例对象
    const toast = new ToastConstructor()
    //1.3 将组件对象,手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    //1.4 在调用这个插件的body上 添加toast 组件标签
    document.body.appendChild(toast.$el)
  
  //2. 在Vue原型链上添加 一个属性  Toast
  Vue.prototype.$toast = toast
}

//步骤三： 导出对象   在 main.js文件中导入
export default obj;