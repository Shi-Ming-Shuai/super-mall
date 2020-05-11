export function formatDate(date, fmt) {
  // 获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //获取日期 等等
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = o[key] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

// 函数 padLeftZero 的作用：如果月份为1位（如9），则在其左边补0（变为09）
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

// // 举例
// let a = new Date('1537932123' * 1000)
// let res = formatDate(a, 'yyyy-MM-dd hh:mm:ss');
// console.log(res); // 2016-07-06 16:19