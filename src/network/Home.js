import {request} from "network/request"

//获取多个数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
//获取goods数据   对象增强语法
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}