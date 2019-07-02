/**
 * @author 成雨
 * @date 2019/7/2 0002$
 * @Description: 单例模式
 */

// ES5
// function ManageGame() {
//     if (ManageGame._schedule) {        // 判断是否已经有单例了
//         return ManageGame._schedule
//     }
//     ManageGame._schedule = this
// }
//
// ManageGame.getInstance = function () {
//     if (ManageGame._schedule) {        // 判断是否已经有单例了
//         return ManageGame._schedule
//     }
//     return ManageGame._schedule = new ManageGame()
// };
//
// const schedule1 = new ManageGame()
// const schedule2 = ManageGame.getInstance()
//
// console.log(schedule1 === schedule2)


// ES6
// class ManageGame {
//     static _schedule = null
//
//     static getInstance() {
//         if (ManageGame._schedule) {        // 判断是否已经有单例了
//             return ManageGame._schedule
//         }
//         return ManageGame._schedule = new ManageGame()
//     }
//
//     constructor() {
//         if (ManageGame._schedule) {        // 判断是否已经有单例了
//             return ManageGame._schedule
//         }
//         ManageGame._schedule = this
//     }
// }
//
// const schedule1 = new ManageGame()
// const schedule2 = ManageGame.getInstance()
//
// console.log(schedule1 === schedule2)	// true


// ----------- IIFE方式创建单例模式 -------------
console.log('------IIFE方式创建单例模式-----');
const Singleton = (function () {
    let _instance = null        // 存储单例

    const Singleton = function () {
        if (_instance) return _instance     // 判断是否已有单例
        _instance = this
        this.init()                         // 初始化操作
        return _instance
    }

    Singleton.prototype.init = function () {
        this.foo = 'Singleton Pattern'
    }

    Singleton.getInstance = function (bar) {
        if (_instance) return _instance
        _instance = new Singleton(bar)
        return _instance
    }

    return Singleton
})()

const visitor1 = new Singleton()
const visitor2 = new Singleton()
const visitor3 = Singleton.getInstance() // 也可以 getInstance 获取单例

console.log(visitor1 === visitor2)	// true
console.log(visitor1 === visitor3)	// true
// ----------- IIFE方式创建单例模式END -------------


// ----------  块级作用域方式创建单例 -----------

// ----------  块级作用域方式创建单例 END -----------
