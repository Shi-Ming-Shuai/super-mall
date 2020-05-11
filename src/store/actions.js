export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
          //判断数组中是否已经有了相同iid 的数据   如果有 count +1
    let product = context.state.shoppingCartList.find(item => {
      return item.iid === payload.iid
    })
    if (product) {
       //修改mutations   使用addCount方法 给shoppingCartList中的count加一
      context.commit('addCount',product)
      resolve('当前商品 +1')
    }
    else {
      //上面条件不成立  数组中没有这个iid的数据  向添加push数据
      payload.count = 1
      context.commit('addToCart',payload)
      resolve('已添加商品到购物车')
    }
    })
  }
}