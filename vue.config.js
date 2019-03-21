const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  filenameHashing: true,
  devServer: {
    port: 5000,
    contentBase: path.resolve(__dirname, 'public'),
    host: 'localhost',
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    plugins: [
      new PrerenderSpaPlugin(
        path.join(__dirname, 'dist'),
        [ '/guide', '/event', '/contact' ]
      ),
      new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './root'),
        to: path.resolve(__dirname, './dist'),
      }
    ])
    ]
  }
}
