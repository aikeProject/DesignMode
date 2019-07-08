/**
 * @author 成雨
 * @date 2019/7/4 0004$
 * @Description: 工厂模式
 * 根据不同的输入返回不同的类的实例，一般用来创建同一类对象
 */

/* 饭店方法 */
// function restaurant(menu) {
//     switch (menu) {
//         case '鱼香肉丝':
//             return new YuXiangRouSi()
//         case '宫保鸡丁':
//             return new GongBaoJiDin()
//         default:
//             throw new Error('这个菜本店没有 -。-')
//     }
// }
//
// /* 鱼香肉丝类 */
// function YuXiangRouSi() {
//     this.type = '鱼香肉丝'
// }
//
// YuXiangRouSi.prototype.eat = function () {
//     console.log(this.type + ' 真香~')
// }
//
// /* 宫保鸡丁类 */
// function GongBaoJiDin() {
//     this.type = '宫保鸡丁'
// }
//
// GongBaoJiDin.prototype.eat = function () {
//     console.log(this.type + ' 让我想起了外婆做的菜~')
// }
//
// const dish1 = restaurant('鱼香肉丝')
// dish1.eat()													// 输出: 鱼香肉丝 真香~
// const dish2 = restaurant('红烧排骨') // 输出: Error 这个菜本店没有 -。-


/* 饭店方法 */
// class Restaurant {
//     constructor() {
//         this.menuData = {}
//     }
//
//     /* 创建菜品 */
//     getMenu(menu) {
//         if (!this.menuData[menu])
//             throw new Error('这个菜本店没有 -。-')
//         const {type, message} = this.menuData[menu]
//         return new Menu(type, message)
//     }
//
//     /* 增加菜品种类 */
//     addMenu(menu, type, message) {
//         if (this.menuData[menu]) {
//             console.Info('已经有这个菜了!')
//             return
//         }
//         this.menuData[menu] = {type, message}
//     }
//
//     /* 移除菜品 */
//     removeMenu(menu) {
//         if (!this.menuData[menu]) return
//         delete this.menuData[menu]
//     }
// }
//
// /* 菜品类 */
// class Menu {
//     constructor(type, message) {
//         this.type = type
//         this.message = message
//     }
//
//     eat() {
//         console.log(this.type + this.message)
//     }
// }
//
// const restaurant = new Restaurant()
// restaurant.addMenu('YuXiangRouSi', '鱼香肉丝', ' 真香~')			// 注册菜品
// restaurant.addMenu('GongBaoJiDin', '宫保鸡丁', ' 让我想起了外婆做的菜~')

const dish1 = restaurant.getMenu('YuXiangRouSi')
dish1.eat()																				// 输出: 鱼香肉丝 真香~
const dish2 = restaurant.getMenu('HongSaoPaiGu')	// 输出: Error 这个菜本店没有 -。-


// ---------- 工厂模式的通用实现 ----------
/* 工厂类 */
class Factory {
    static getInstance(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品')
        }
    }
}

/* 产品类1 */
class Product1 {
    constructor() {
        this.type = 'Product1'
    }

    operate() {
        console.log(this.type)
    }
}

/* 产品类2 */
class Product2 {
    constructor() {
        this.type = 'Product2'
    }

    operate() {
        console.log(this.type)
    }
}

const prod1 = Factory.getInstance('Product1')
prod1.operate()																	// 输出: Product1
const prod2 = Factory.getInstance('Product3')		// 输出: Error 当前没有这个产品
// ---------- 工厂模式的通用实现 ----------
