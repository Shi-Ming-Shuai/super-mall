export default {
  cartList2(state){
    return state.shoppingCartList.length
  },
  getCartList(state,payload){
    return state.shoppingCartList
  }
}