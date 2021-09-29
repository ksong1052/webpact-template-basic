// 이것은 Brower환견에서 작용하는 것이 아니라 Nodejs환경에서 작동하는 것이다.
// Webpack Bundler는 중,대형 프로젝트에 적합하다.

// Nodejs환경에서 사용할 수 있는 전역모듈
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 파일을 읽어 들이기 시작하는 진입점 설정 => 자바 스크립트 파일 의미
  entry: './js/main.js',
  
  // 결과물(번들)을 반환하는 설정
  // path는 절대 경로를 넣어야 한다. 
  // __dirname : 현재 파일이 있는 그 경로를 의미
  // clean: true: 기존의 파일을 삭제 후에 생성
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}