/**
 * @author 成雨
 * @date 2019/7/2 0002$
 * @Description: 反柯里化
 */

// ES5 方式
function unCurrying(fn) {
    return function (tar) {
        var rest = Array.prototype.slice.call(arguments)
        rest.shift()
        return fn.apply(tar, rest)
    }
}

// ES6 方式
function unCurrying2(fn) {
    return function (tar, ...argu) {
        return fn.apply(tar, argu)
    }
}


var push = unCurrying(Array.prototype.push)

function execPush() {
    push(arguments, 4)
    console.log(arguments)
}

execPush(1, 2, 3)    // 输出: [1, 2, 3, 4]
