var nav = require("./navbar/index")
var sidebar = require("./sidebar/index")

module.exports = {
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
    /* [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(0, 0, 0, 0.6)',
          scrollOffset: 0,
        },
      },
    ], */
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
    ],
    ['container', {
      type: 'info',
      before: text => `<div class="custom-block info"><p class="custom-block-title">${text}</p>`,
      after: '</div>',
    }],
  ],
  markdown: {
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
