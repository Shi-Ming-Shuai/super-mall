export default {
  //1. 修改state 状态中的计数 count
  addCount(state, payload) {
    payload.count += 1
  },
  //2. 修改state 中存放的数据 添加队友的iid 商品数据
  addToCart(state, payload) {
    payload.checked = true
    state.shoppingCartList.push(payload)
  }
}