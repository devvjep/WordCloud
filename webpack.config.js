const path = require('path');

module.exports = {
    entry: { // 엔트리 포인트 설정
        main : ['./src/main.js']
    },
    output : { // 빌드 폴더 설정
        path : path.resolve(__dirname, './build'),
        filename : '[name].js'
    },
    module : {
        rules : [{
            test : /\.js$/,
            include : path.resolve(__dirname, './src'), // 모든 자바스크립트 폴더 설정
            loaders : 'babel-loader' // 바벨 설정 (낮은버전 자바스크립트 버전에서도 동작가능하도록)
        }]
    },
    plugins : [],
    devServer : {
        contentBase : './public', // 사용자 화면 폴더
        host : 'localhost',
        port : 8080
    }
}