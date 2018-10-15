module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: (config) => {
    config.output.library = 'VueLineUp';
    if (process.env.NODE_ENV === 'production') {
      config.externals = Object.assign(config.externals ||{}, {
        lineupjs: {
          amd: 'lineupjs',
          root: 'LineUpJS',
          commonjs: 'lineupjs',
          commonjs2: 'lineupjs'
        }
      })
    }
  }
}
