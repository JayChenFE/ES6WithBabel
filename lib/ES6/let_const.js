'use strict';

// let 和 const

var a = 0;

// 适用for 循环
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// //比对

// 块级作用域
function f1() {
  var n = 5;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}
f1();

var C = 'C'; // readonly 

var c = { // point to a reference
  a: 1
};
// c={a: 2}; // point to another reference
c.a = 2;

// //块级作用域返回值 do expression
// let x = do{
// 	1
// }

// //const read only 

// const p = 1;