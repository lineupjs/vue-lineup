module.exports = {
  configureWebpack: {
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
