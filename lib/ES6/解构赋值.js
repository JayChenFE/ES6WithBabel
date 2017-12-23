'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// 基本用法  Destructuring

var a = 1,
    b = 2,
    c = 3;
var _d$e = { d: 1, e: 2

  // 深度解构 deep destructuring
},
    d = _d$e.d,
    e = _d$e.e;
var obj = {
  p: ['Hello', { y: 'World' }]
};

var _obj$p = _slicedToArray(obj.p, 2),
    x = _obj$p[0],
    y = _obj$p[1].y;

//应用


function add(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  return x + y;
}
add([1, 2]); // 3


//字符串的解构赋值 

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a1 = _hello2[0],
    b1 = _hello2[1],
    c1 = _hello2[2],
    d1 = _hello2[3],
    e1 = _hello2[4];

//rest解构 spread destructuring


var _p$a$c = { p: 1, a: 2, c: 2 },
    p = _p$a$c.p,
    rest = _objectWithoutProperties(_p$a$c, ['p']);

console.log(rest); // {a:2, c:2}
// 默认值 ,如果一个数组成员不严格等于undefined

// //函数参数的解构赋值