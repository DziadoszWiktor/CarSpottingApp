module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  loaders: [
    { test: /\.js$/, loader: 'babel', query: {compact: false} }
]
}
