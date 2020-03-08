module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置mint-ui
  "plugins": [
    ["component", {
      "libraryName": "mint-ui",
      "style": true
    }]
  ]
}
