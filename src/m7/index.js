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
// console.log('------IIFE方式创建单例模式-----');
// const Singleton = (function () {
//     let _instance = null        // 存储单例
//
//     const Singleton = function () {
//         if (_instance) return _instance     // 判断是否已有单例
//         _instance = this
//         this.init()                         // 初始化操作
//         return _instance
//     }
//
//     Singleton.prototype.init = function () {
//         this.foo = 'Singleton Pattern'
//     }
//
//     Singleton.getInstance = function (bar) {
//         if (_instance) return _instance
//         _instance = new Singleton(bar)
//         return _instance
//     }
//
//     return Singleton
// })()
//
// const visitor1 = new Singleton()
// const visitor2 = new Singleton()
// const visitor3 = Singleton.getInstance() // 也可以 getInstance 获取单例
//
// console.log(visitor1 === visitor2)	// true
// console.log(visitor1 === visitor3)	// true
// ----------- IIFE方式创建单例模式END -------------


// ----------  块级作用域方式创建单例 -----------
// console.log('块级作用域方式创建单例');
// let getInstance
//
// {
//     let _instance = null        // 存储单例
//
//     const Singleton = function () {
//         if (_instance) return _instance     // 判断是否已有单例
//         _instance = this
//         this.init()                         // 初始化操作
//         return _instance
//     }
//
//     Singleton.prototype.init = function () {
//         this.foo = 'Singleton Pattern'
//     }
//
//     getInstance = function (bar) {
//         if (_instance) return _instance
//         _instance = new Singleton(bar)
//         return _instance
//     }
// }
//
// const visitor1 = getInstance()
// const visitor2 = getInstance()
//
// console.log(visitor1 === visitor2)

// 输出: true
// ----------  块级作用域方式创建单例 END -----------

// ------------ 单例模式赋能 -----------
/* 功能类 */
// class FuncClass {
//     constructor(bar) {
//         this.bar = bar
//     }
//
//     init() {
//         this.foo = 'Singleton Pattern'
//     }
// }
//
// /* 单例模式的赋能类 */
// const Singleton = (function () {
//     let _instance = null        // 存储单例
//
//     const ProxySingleton = function (bar) {
//         if (_instance) return _instance     // 判断是否已有单例
//         _instance = new FuncClass(bar)
//         return _instance
//     }
//
//     ProxySingleton.getInstance = function (bar) {
//         if (_instance) return _instance
//         _instance = new Singleton(bar)
//         return _instance
//     }
//
//     return ProxySingleton
// })()
//
// const visitor1 = new Singleton('单例1')
// const visitor2 = new Singleton('单例2')
// const visitor3 = Singleton.getInstance()
//
// console.log(visitor1 === visitor2)	// true
// console.log(visitor1 === visitor3)	// true


// 使用 ES6 Proxy
// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// obj.count = 1
// //  setting count!
// ++obj.count
//
// // Reflect
// // 老写法
// // try {
// //     Object.defineProperty(target, property, attributes);
// //     // success
// // } catch (e) {
// //     // failure
// // }
// //
// // // 新写法
// // if (Reflect.defineProperty(target, property, attributes)) {
// //     // success
// // } else {
// //     // failure
// // }
//
// const a = Reflect.has({
//     name: ''
// }, 'name');
// console.log('Reflect', a)
//
// /* Person 类 */
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
//
// /* 单例模式的赋能方法 */
// function Singleton(FuncClass) {
//     let _instance
//     // 不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
//     return new Proxy(FuncClass, {
//         // Proxy 修改 construct 的默认行为
//         construct(target, args) {
//             // Reflect.construct 获取默认行为
//             return _instance || (_instance = Reflect.construct(FuncClass, args)) // 使用 new FuncClass(...args) 也可以
//         }
//     })
// }
//
// const PersonInstance = Singleton(Person)
//
// const person1 = new PersonInstance('张小帅', 25)
// const person2 = new PersonInstance('李小美', 23)
//
// console.log(person1 === person2)	// true
// ------------ 单例模式赋能 -----------


// ----------- 惰性单例、懒汉式-饿汉式 ---------
// 懒汉式 单例使用时才实例化
// 饿汉式 当程序启动或单例模式类加载的时候被创建

class FuncClass {
    constructor() {
        this.bar = 'bar'
    }
}

// 饿汉式
const HungrySingleton = (function () {
    const _instance = new FuncClass()

    return function () {
        return _instance
    }
})()

// 懒汉式
const LazySingleton = (function () {
    let _instance = null

    return function () {
        return _instance || (_instance = new FuncClass())
    }
})()

const visitor1 = new HungrySingleton()
const visitor2 = new HungrySingleton()
const visitor3 = new LazySingleton()
const visitor4 = new LazySingleton()

console.log(visitor1 === visitor2)	// true
console.log(visitor3 === visitor4)	// true
// ----------- 惰性单例、懒汉式-饿汉式 ---------
