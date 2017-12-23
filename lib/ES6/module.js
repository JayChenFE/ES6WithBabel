'use strict';

var _let_const = require('./let_const.js');

console.log('=------started');

//webpack/gulp ==> 处理require

console.log(_let_const.a);
console.log('=------ ended');

// a.js ==>  require('./b.js').kkkkk
// b.js ==>  require('./c.js').kkkkk
// c.js ==>  require('./a.js').kkkkk

// AMD  define + require

// webpack ==> node.js的fs io体系来把所有的require依赖放在一个文件里面
// bundle.js

// (function(moduleArr) {
//     // XXX
// }[
//     a.js ,
//     c.js,
//     d.js
// ])()