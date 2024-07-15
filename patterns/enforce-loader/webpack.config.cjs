

/** @type {import('webpack').Configuration} */
module.exports = {
    extends: [require.resolve('@pattern/config/webpack')],
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                enforce: 'post',
                test: /\.js$/,
                loader: require.resolve('./post-loader')
            }
        ]
    }
}