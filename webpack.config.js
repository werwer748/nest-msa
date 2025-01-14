// 번들러 설정 - 어디서 에러가 발생했는지 확인하기 위해 소스맵을 생성
module.exports = function(options) {
  return {
    ...options,
    devtool: 'source-map',
  }
}