// Packages
import path from 'path'
import webpack from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

// Webpack Config
export default [{
    target: 'web',
    watch: true,
    context: path.resolve(__dirname, './'),
    entry: {
        client: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.ejs'),
            title: 'Webpack Index',
            filename: 'index.html',
            inject: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    }
}, {
    target: 'node',
    watch: false,
    context: path.resolve(__dirname, './'),
    entry: {
        server: path.resolve(__dirname, './server/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },
    node: {
        path: true,
        __dirname: false,
        __filename: false
    }
}]