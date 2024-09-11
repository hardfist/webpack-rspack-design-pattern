console.log('webpack:',__webpack_require__.E)
console.log('webpack:',__webpack_require__.G)
import(/* webpackPrefetch: true */ 'react').then(x => {
    console.log('x:',x);
})