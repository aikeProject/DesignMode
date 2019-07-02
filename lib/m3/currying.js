/**
 * @author 成雨
 * @date 2019/7/2 0002$
 * @Description: 柯里化
 */
// --------------- 1 柯里化 ---------------
// ES5 实现
function currying(fn) {
  var rest1 = Array.prototype.slice.call(arguments);
  rest1.shift();
  return function () {
    var rest2 = Array.prototype.slice.call(arguments);
    return fn.apply(null, rest1.concat(rest2));
  };
}

function currying2(fn) {
  for (var _len = arguments.length, rest1 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest1[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, rest2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      rest2[_key2] = arguments[_key2];
    }

    return fn.apply(null, rest1.concat(rest2));
  };
}

function sayHello(name, age, fruit) {
  console.log(console.log("\u6211\u53EB ".concat(name, ",\u6211 ").concat(age, " \u5C81\u4E86, \u6211\u559C\u6B22\u5403 ").concat(fruit)));
} // es5


console.log('------ es5 -----');
var curryingShowMsg1 = currying(sayHello, '小明');
curryingShowMsg1(22, '苹果'); // 输出: 我叫 小明,我 22 岁了, 我喜欢吃 苹果

var curryingShowMsg2 = currying(sayHello, '小衰', 20);
curryingShowMsg2('西瓜'); // 输出: 我叫 小衰,我 20 岁了, 我喜欢吃 西瓜
// es6

console.log('------ es6 -----');
var curryingShowMsg3 = currying2(sayHello, '小明');
curryingShowMsg3(22, '苹果'); // 输出: 我叫 小明,我 22 岁了, 我喜欢吃 苹果

var curryingShowMsg4 = currying2(sayHello, '小衰', 20);
curryingShowMsg4('西瓜'); // 输出: 我叫 小衰,我 20 岁了, 我喜欢吃 西瓜