

//npm  install  path  --save
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("views", resolve("src/views"))
      .set("common",resolve("src/common"))

  },
}
// module.exports = {
//     configureWebpack: {
//       resolve: {
//         alias: {
//           'components': '@/components',
//           'content': 'components/content',
//           'common': 'components/common',
//           'assets': '@/assets',
//           'network': '@/network',
//           'views': '@/views',
//         }
//       }
//     }
//   }