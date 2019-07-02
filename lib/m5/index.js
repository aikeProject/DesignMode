function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(length, width) {
    _classCallCheck(this, Rectangle);

    this.length = length;
    this.width = width;
    this.color = 'red';
  }
  /* 获取面积 */


  _createClass(Rectangle, [{
    key: "getArea",
    value: function getArea() {
      return this.length * this.width;
    }
    /* 获取尺寸信息 */

  }, {
    key: "getSize",
    value: function getSize() {
      console.log("Rectangle: ".concat(this.length, "x").concat(this.width, "\uFF0C\u9762\u79EF: ").concat(this.getArea()));
    }
  }]);

  return Rectangle;
}();
/* 正方形 */


var Square =
/*#__PURE__*/
function (_Rectangle) {
  _inherits(Square, _Rectangle);

  function Square(size) {
    var _this;

    _classCallCheck(this, Square);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, size, size));
    _this.color = 'blue';
    return _this;
  }

  _createClass(Square, [{
    key: "getSize",
    value: function getSize() {
      console.log("Square: ".concat(this.length, "x").concat(this.width, "\uFF0C\u9762\u79EF: ").concat(this.getArea()));
    }
  }]);

  return Square;
}(Rectangle);

var rect = new Rectangle(5, 10);
var squa = new Square(6);
rect.getSize(); // Rectangle: 5x10，面积: 50

squa.getSize(); // Square: 6x6，面积: 36
// -------------- ES6继承END --------------