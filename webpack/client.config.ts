import path from 'path'

import {
  Configuration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance
} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CssoWebpackPlugin from 'csso-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import 'webpack-dev-server'

import { ALIAS, DEV_SERVER_PORT, DIST_DIR, IS_DEV, IS_LAZY_COMPILATION, SRC_DIR } from './constants'
import * as Loaders from './loaders'

const withReport = Boolean(process.env.npm_config_withReport)

const entry: string[] = [
  path.resolve(SRC_DIR, 'index.tsx'),
  ...(IS_DEV
    ? [
        'webpack-hot-middleware/client',
        'css-hot-loader/hotModuleReplacement'
      ]
    : [])
]

const filename = (ext: string): string =>
  IS_DEV ? `[name].${ext}` : `[name].[chunkhash].${ext}`

const plugins: WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    title: 'My App',
    template: `${SRC_DIR}/assets/index.html`
  }),
  new ForkTsCheckerWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: IS_DEV ? '[name].css' : '[name].[contenthash].css'
  }),
  ...(IS_DEV
    ? [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
    : [
        new CssoWebpackPlugin(),
        new BundleAnalyzerPlugin({
          analyzerMode: withReport ? 'server' : 'disabled'
        })
      ])
]

const clientConfig: Configuration = {
  name: 'client',
  target: 'web',
  entry,
  plugins,
  output: {
    path: DIST_DIR,
    filename: filename('js'),
    publicPath: '/'
  },
  devtool: IS_DEV ? 'source-map' : false,
  resolve: {
    alias: ALIAS,
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
    fallback: {
      url: false,
      path: false
    }
  },
  module: {
    rules: Object.values(Loaders).map((el) => el.client)
  },
  devServer: {
    historyApiFallback: true,
    port: DEV_SERVER_PORT
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  experiments: {
    lazyCompilation: IS_LAZY_COMPILATION
  }
}

export { clientConfig }
