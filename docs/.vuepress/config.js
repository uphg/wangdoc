var nav = require("./navbar/index")
var sidebar = require("./sidebar/index")

module.exports = {
  theme: 'vuepress-theme-uphg',
  base: '/wangdoc/',
  lang: 'zh-CN',
  title: 'WangDoc',
  // description: '搬运自阮一峰的网道（WangDoc.com）',
  description: 'Carried from Ruan Yifeng',
  head: [
    ['link', {rel: 'stylesheet', href: '/font/index.css'}],
  ],
  themeConfig: {
    searchMaxSuggestions: 20,
    nav,
    lastUpdated: '上次更新',
    sidebarDepth: 0,
    sidebar,
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ]
  ]
}
