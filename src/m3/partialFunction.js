/**
 * @author 成雨
 * @date 2019/7/2 0002$
 * @Description: 偏函数
 */

var isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
};

var isString = isType('String')
var isFunction = isType('Function')

console.log(isString(12));
console.log(isFunction('12'));
