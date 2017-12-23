'use strict';

var _console;

//函数参数的默认值

// 1. arrow function

var another = function another() {
	// function body
	return {
		a: 'hello world'
	};
};
// ==>
var C = 'c';
var s = function s() {
	var C = 's';
	return {
		a: 'hello world'
	};
};

// 一个function （入参 + 返回值）
var pa = function pa() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	console.log(args);
	return args.reduce(function (pre, cur) {
		return pre + cur;
	}, 0);
};
pa.apply(undefined, [1, 2, 45]);

var a = [1, 2, 3];
var c = a[0],
    d = a.slice(1);

console.log(d);

// 参数 初始值
function log(x) {
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';

	console.log(x, y);
}
log('hello'); // log('Hello') // Hello World


//rest参数
function add(a, b) {
	for (var _len2 = arguments.length, values = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		values[_key2 - 2] = arguments[_key2];
	}

	console.log(values);
}
add(2, 5, 3); // 10

(_console = console).log.apply(_console, [5].concat([1, 2, 3]));

// const s = function(){
// 	return () => {
// 		console.log(this)
// 	}
// };
// s.apply({a:1})()

// //箭头函数 {}
// var f = v => v;
// var f1 = v=>{
// 	console.log(this)
// }
var f3 = function f3(v) {
	var _this = this;

	//this
	return function (v) {
		console.log(_this);
	};
};

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。