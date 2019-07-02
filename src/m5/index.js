/**
 * @author 成雨
 * @date 2019/7/2 0002$
 * @Description: 继承与原型链
 */

// ------------------ 对象继承 ----------------

// 对象字面量形式，原型被隐式地设置为 Object.prototype
// var rectangle1 = {sizeType: '四边形'}
//
// Object.create() 创建，显示指定为 Object.prototype， 等价于 ↑
// var rectangle2 = Object.create(Object.prototype, {
//     sizeType: {
//         configurable: true,
//         enumerable: true,
//         value: '四边形',
//         writable: true
//     }
// });
// console.log('rectangle1', rectangle1)
// console.log('rectangle2', rectangle2)


/*var rectangle = {
    sizeType: '四边形',
    getSize: function () {
        console.log(this.sizeType)
    }
}

var square = Object.create(rectangle, {
    sizeType: {value: '正方形'}
})

rectangle.getSize()   // "四边形"
square.getSize()      // "正方形"

console.log(rectangle.hasOwnProperty('getSize')) // true
console.log(rectangle.isPrototypeOf(square))     // true
console.log(square.hasOwnProperty('getSize'))    // false
console.log('getSize' in square)                 // true

console.log(square.__proto__ === rectangle)                       // true
console.log(square.__proto__.__proto__ === Object.prototype)      // true*/

// ------------------ 对象继承 END ----------------

// --------------------- 原型链继承  -----------------

// 构造函数
/*function YourConstructor() {
}

// JavaScript 引擎在背后做的：
YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor,
        writable: true
    }
});

console.log(YourConstructor.prototype.__proto__ === Object.prototype)         // true*/


/* 四边形 */
/*function Rectangle(length, width) {
    this.length = length   // 长
    this.width = width     // 宽
}

/!* 获取面积 *!/
Rectangle.prototype.getArea = function () {
    return this.length * this.width
}

/!* 获取尺寸信息 *!/
Rectangle.prototype.getSize = function () {
    console.log(`Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`)
}

/!* 正方形 *!/
function Square(size) {
    this.length = size
    this.width = size
}

Square.prototype = new Rectangle()
Square.prototype.constructor = Square   // 原本为 Rectangle，重置回 Square 构造函数

Square.prototype.getSize = function () {
    console.log(`Square: ${this.length}x${this.width}，面积: ${this.getArea()}`)
}

var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36*/

// --------------------- 原型链继承 END -----------------


// --------------- 伪类继承 ----------------
/*function getArea() {
    return this.length * this.width
}

/!* 四边形 *!/
function Rectangle(length, width) {
    this.length = length
    this.width = width
}

/!* 获取面积 *!/
Rectangle.prototype.getArea = getArea

/!* 获取尺寸信息 *!/
Rectangle.prototype.getSize = function () {
    console.log(`Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`)
}

/!* 正方形 *!/
function Square(size) {
    Rectangle.call(this, size, size)

    this.getArea = getArea

    this.getSize = function () {
        console.log(`Square: ${this.length}x${this.width}，面积: ${this.getArea()}`)
    }
}

var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36*/

// --------------- 伪类继承 END ----------------


// --------------  组合继承  ----------------
/* 四边形 */
/*function Rectangle(length, width) {
    this.length = length
    this.width = width
    this.color = 'red'
}

/!* 获取面积 *!/
Rectangle.prototype.getArea = function () {
    return this.length * this.width
}

/!* 获取尺寸信息 *!/
Rectangle.prototype.getSize = function () {
    console.log(`Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`)
}

/!* 正方形 *!/
function Square(size) {
    Rectangle.call(this, size, size)  // 第一次调用 Rectangle 函数
    this.color = 'blue'
}

Square.prototype = new Rectangle()    // 第二次调用 Rectangle 函数
Square.prototype.constructor = Square

Square.prototype.getSize = function () {
    console.log(`Square: ${this.length}x${this.width}，面积: ${this.getArea()}`)
}*/

// var rect = new Rectangle(5, 10)
// var squa = new Square(6)
//
// rect.getSize()       // Rectangle: 5x10，面积: 50
// squa.getSize()       // Square: 6x6，面积: 36
// --------------  组合继承END  ----------------


// -------------- ES6继承 --------------
/* 四边形 */
class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
        this.color = 'red'
    }

    /* 获取面积 */
    getArea() {
        return this.length * this.width
    }

    /* 获取尺寸信息 */
    getSize() {
        console.log(`Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`)
    }
}

/* 正方形 */
class Square extends Rectangle {
    constructor(size) {
        super(size, size)
        this.color = 'blue'
    }

    getSize() {
        console.log(`Square: ${this.length}x${this.width}，面积: ${this.getArea()}`)
    }
}


var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36
// -------------- ES6继承END --------------
