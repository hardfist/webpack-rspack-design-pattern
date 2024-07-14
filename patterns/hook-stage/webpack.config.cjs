const { ConcatSource} = require('webpack-sources')
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
               stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE-1
            }, (assets) => {
               for (const [file,asset] of Object.entries(assets)) {
                  const inject_code = `console.log('1+1=', 1+1);\n`
                  const new_asset = new ConcatSource(inject_code,asset);
                  console.log('file:', file,'\n\n\n', asset.source(),'\n\n\n',new_asset.source())
                  compilation.updateAsset(file, new_asset)
               }
               
            })
         })
      }
   }]
}