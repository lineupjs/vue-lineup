module.exports = {
  configureWebpack: {
    output: {
      library: 'VueLineUp'
    },
    externals: {
      lineupjs: {
        amd: 'lineupjs',
        root: 'LineUpJS',
        commonjs: 'lineupjs',
        commonjs2: 'lineupjs'
      }
    },
  }
}
