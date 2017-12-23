'use strict';

var p = new Promise(function (resolve, reject) {
	setTimeout(resolve, 3000, 1);
});
var q = new Promise(function (resolve, reject) {
	reject('not good time');
});
var pending = new Promise(function (resolve, reject) {});

// p ==> fulfilled 1
// Promise的状态 fulfilled pending rejected
// Promise的值  

// 3s 后
var p1 = p.then(function (val) {
	val += 2;
	return new Promise(function (res, rej) {
		res(2);
	});
}).then(function (val) {
	console.log(val);
});