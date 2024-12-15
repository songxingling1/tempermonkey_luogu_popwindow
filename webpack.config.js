const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const header = fs.readFileSync('src/header.js').toString()
module.exports = {
    entry:'./src/main.js',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.svg$/,
                type: 'asset/source'
            }
        ]
    },
    output: {
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    },
    optimization: {
        minimize: false
    },
    externals: {
        jquery:'jQuery',
        sweetalert2:'Sweetalert2'
    },
    plugins:[new webpack.BannerPlugin({banner:header,raw:true})]
}