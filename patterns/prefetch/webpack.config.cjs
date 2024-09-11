const  HtmlWebpackPlugin = require('html-webpack-plugin');
const { RuntimeGlobals } = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: {
        main: './src/index.js'
    },
    devtool:false,
    plugins: [new HtmlWebpackPlugin(), {
        /**
         * 
         * @param {import('webpack').Compiler} compiler 
         */
        apply(compiler){
            compiler.hooks.thisCompilation.tap('preload', compilation => {
                compilation.hooks.additionalTreeRuntimeRequirements.tap('register chunk', (_,set) =>{
                    set.add(RuntimeGlobals.preloadChunk)
                    set.add(RuntimeGlobals.prefetchChunk)
                })
            })
        }
    }]
}