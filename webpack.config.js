var config = {
    entry: './main.js'
    , output: {
        path: './'
        , filename: 'index.js'
        , }
    , devServer: {
        inline: true
        , port: 8080
    }
    , module: {
        loaders: [
            {
                test: /\.jsx?$/
                , exclude: /node_modules/
                , loader: 'babel'
                , query: {
                presets: ['es2015', 'react', 'stage-1']
            }
            }
            , {
                test: /\.json$/
                , exclude: /node_modules/
                , loader: 'json-loader'
            }
            , {
                test: /\.(css)$/
                , loader: 'style!css'
            }
            , {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}
module.exports = config;