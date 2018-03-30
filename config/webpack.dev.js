let baseConfig = require('./webpack.base')
const webpack = require('webpack');
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new DefinePlugin({
    "process.env.NODE_ENV":'"development"'
}))

module.exports ={
        ...baseConfig,
        devServer:{
            historyApiFallback:true,
            inline:true,
            open:true,
            port:8080,
            noInfo:true
        },
        devtool:"eval-source-map"
}