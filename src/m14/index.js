/**
 * @author 成雨
 * @date 2019-07-15
 * @Description: 装饰者模式（装饰器模式）
 *  （Decorator Pattern）又称装饰器模式，在不改变原对象的基础上，通过对其添加属性或方法来进行包装拓展，使得原有对象可以动态具有更多功能。
 */

/* 毛坯房 - 目标对象 */
function OriginHouse() {
}

OriginHouse.prototype.getDesc = function () {
    console.log('毛坯房')
}

/* 搬入家具 - 装饰者 */
function Furniture(house) {
    this.house = house
}

Furniture.prototype.getDesc = function () {
    this.house.getDesc()
    console.log('搬入家具')
}

/* 墙壁刷漆 - 装饰者 */
function Painting(house) {
    this.house = house
}

Painting.prototype.getDesc = function () {
    this.house.getDesc()
    console.log('墙壁刷漆')
}

var house = new OriginHouse()
house = new Furniture(house)
house = new Painting(house)

house.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆

// ES6 语法实现
/* 毛坯房 - 目标对象 */
class OriginHouse {
    getDesc() {
        console.log('毛坯房')
    }
}

/* 搬入家具 - 装饰者 */
class Furniture {
    constructor(house) {
        this.house = house
    }

    getDesc() {
        this.house.getDesc()
        console.log('搬入家具')
    }
}

/* 墙壁刷漆 - 装饰者 */
class Painting {
    constructor(house) {
        this.house = house
    }

    getDesc() {
        this.house.getDesc()
        console.log('墙壁刷漆')
    }
}

let house = new OriginHouse()
house = new Furniture(house)
house = new Painting(house)

house.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆

/* 毛坯房 - 目标对象 */
var originHouse = {
    getDesc() {
        console.log('毛坯房 ')
    }
}

/* 搬入家具 - 装饰者 */
function furniture() {
    console.log('搬入家具 ')
}

/* 墙壁刷漆 - 装饰者 */
function painting() {
    console.log('墙壁刷漆 ')
}

/* 添加装饰 - 搬入家具 */
originHouse.getDesc = function () {
    var getDesc = originHouse.getDesc
    return function () {
        getDesc()
        furniture()
    }
}()

/* 添加装饰 - 墙壁刷漆 */
originHouse.getDesc = function () {
    var getDesc = originHouse.getDesc
    return function () {
        getDesc()
        painting()
    }
}()

originHouse.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆


// ------ 实战中的装饰者模式 -------

// 给浏览器事件添加新功能
window.onload = function () {
    console.log('原先的 onload 事件 ')
}

/* 发送埋点信息 */
function sendUserOperation() {
    console.log('埋点：用户当前行为路径为 ...')
}

/* 将新的功能添加到 onload 事件上 */
window.onload = function () {
    var originOnload = window.onload
    return function () {
        originOnload && originOnload()
        sendUserOperation()
    }
}()

// 输出： 原先的 onload 事件
// 输出： 埋点：用户当前行为路径为 ...

// 提取出来做一个工具方法
window.onload = function () {
    console.log('原先的 onload 事件 ')
}

/* 发送埋点信息 */
function sendUserOperation() {
    console.log('埋点：用户当前行为路径为 ...')
}

/* 给原生事件添加新的装饰方法 */
function originDecorateFn(originObj, originKey, fn) {
    originObj[originKey] = function () {
        var originFn = originObj[originKey]
        return function () {
            originFn && originFn()
            fn()
        }
    }()
}

// 添加装饰功能
originDecorateFn(window, 'onload', sendUserOperation)

// 输出： 原先的 onload 事件
// 输出： 埋点：用户当前行为路径为 ...


// TypeScript 中的装饰器

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
    }
}

// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
// 执行顺序是 由下到上的


function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting

    constructor(message) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

for (let key in new Greeter('Jim')) {
    console.log(key);
}
// 输出： greeting