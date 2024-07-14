/** @type {import('webpack').Configuration} */
module.exports = {
   extends: [require.resolve('@pattern/config/webpack')],
   entry: {
    main: './src/index.js'
   },
   plugins: [{
      name: 'before-minify',
      /**
       * 
       * @param {import('webpack').Compiler} compiler 
       */
      apply(compiler){
         compiler.hooks.thisCompilation.tap('compilation', (compilation) => {
            compilation.hooks.processAssets.tap({
               name: 'before-minify',
               stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
            }, (assets) => {
               console.log('assets:', assets);
            })
         })
      }
   }]
}