'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(helloWorldGenerator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(foo);

// 一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）。
function helloWorldGenerator() {
  return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'hello';

        case 2:
          _context.next = 4;
          return 'world';

        case 4:
          return _context.abrupt('return', 'ending');

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
};
var hw = helloWorldGenerator();
var a = hw.next();
var b = hw.next();
var c = hw.next();
console.log(a, b, c, d);

function foo(x) {
  var y, z;
  return regeneratorRuntime.wrap(function foo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return x + 1;

        case 2:
          _context2.t0 = _context2.sent;
          y = 2 * _context2.t0;
          _context2.next = 6;
          return y / 3;

        case 6:
          z = _context2.sent;
          return _context2.abrupt('return', x + y + z);

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// var a = foo(5);
// a.next() // Object{value:6, done:false}
// a.next() // Object{value:NaN, done:false}
// a.next() // Object{value:NaN, done:true}


// //通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值
// var b = foo(5);
// b.next() // { value:6, done:false }
// b.next(12) // { value:8, done:false }
// b.next(13) // { value:42, done:true }