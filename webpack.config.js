const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'bundle',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader', options: { configFile: 'tsconfig.json' } }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
      new BundleAnalyzerPlugin({ generateStatsFile: true }),
    ],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 3000000,
  },
  target: 'node',
  externals: [nodeExternals()],
};
