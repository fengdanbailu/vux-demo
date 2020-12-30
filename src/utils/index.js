/*
 * @Author: gm.chen
 * @Date: 2020-12-30 22:06:09
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-30 22:38:24
 * @Description: file content
 * @FilePath: /vux-demo/src/utils/index.js
 */

/**
 * 这种直接用的函数，真的没有必要在放到utils中了，一般自定义的常用工具函数在放到utils中；
 * 建议哪里用，哪里引用即可；
 * vux提供了不是很多的工具函数，也说明移动端不能像客户端那样占那么多的资源；
 */
import { base64, cookie, dateFormat, debounce, throttle, md5, numberComma, numberPad, numberRandom, querystring, trim } from 'vux'

md5('VUX')
base64.encode('VUX')
base64.decode('VUX')

document.cookie = 'foo=1'
document.cookie = 'bar=2'

cookie.get('foo')
cookie.set('foo', 3)
cookie.remove('foo')

cookie.get('bar', function(s) { return parseInt(s) })
cookie.set('bar', 4, {
  domain: 'example.com',
  path: '/',
  expires: 30
})
cookie.remove('bar', {
  domain: 'example.com',
  path: '/'
})

dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')

debounce(function() { console.log('debounce') }, 1000)
throttle(function() { console.log('throttle') }, 1000)

numberComma(21342132) // 21,342,132
numberComma(21342132, 4) // 2134,2132
numberComma(21342132.234) // 21,342,132.234

numberPad(1) // 01
numberPad(234, 4) // 0234

numberRandom(1, 7) // 2

querystring.parse('a=b&c=d') // {a:'b',c:'d'}, 默认参数为 location.search
querystring.stringify({ a: 'b', c: 'd' }) // 'a=b&c=d'，注意不支持复杂嵌套的结构

trim(' 1024 ') // 1024
