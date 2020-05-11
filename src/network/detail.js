// 关于详情页的请求 配置
import { request } from 'network/request'
//详情页数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
//推荐页数据
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//导出一个类  把请求回来的数据中 进行统一保存（详情页的Goods页面）
export class Goods {
  constructor(itemInfon, columns, services) {
    //itemInfon 商品描述 价格 标题 等等
    this.title = itemInfon.title
    this.desc = itemInfon.desc
    this.newPrice = itemInfon.price
    this.oldPrice = itemInfon.oldPrice
    this.discount = itemInfon.discountDesc
    this.realPrice = itemInfon.lowNowPrice
    //columns  销量 收藏  默认快递 等等
    this.columns = columns
    //services  退货补运费
    this.services = services
  }
}

//导出一个类  把请求回来的数据中 进行统一保存（详情页的商家信息页面， 图标）
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParam{
   constructor(info, rule){
     this.image = info.images ? info.images[0] : ''
     this.info = info.set
     this.size = rule.tables
   }
}