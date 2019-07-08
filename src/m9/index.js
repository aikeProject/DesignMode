/**
 * @author 成雨
 * @date 2019/7/4 0004$
 * @Description: 抽象工厂模式
 * 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例
 */

/* 抽象类，ES6 class 方式 */
// class AbstractClass1 {
//     constructor() {
//         if (new.target === AbstractClass1) {
//             throw new Error('抽象类不能直接实例化!')
//         }
//     }
//
//     /* 抽象方法 */
//     operate() {
//         throw new Error('抽象方法不能调用!')
//     }
// }
//
// /* 抽象类，ES5 构造函数方式 */
// var AbstractClass2 = function () {
//     if (new.target === AbstractClass2) {
//         throw new Error('抽象类不能直接实例化!')
//     }
// }
// /* 抽象方法，使用原型方式添加 */
// AbstractClass2.prototype.operate = function () {
//     throw new Error('抽象方法不能调用!')
// }


/* 饭店方法 */
// function Restaurant() {
// }
//
// Restaurant.orderDish = function (type) {
//     switch (type) {
//         case '鱼香肉丝':
//             return new YuXiangRouSi()
//         case '宫保鸡丁':
//             return new GongBaoJiDing()
//         case '紫菜蛋汤':
//             return new ZiCaiDanTang()
//         default:
//             throw new Error('本店没有这个 -。-')
//     }
// }
//
// /* 菜品抽象类 */
// function Dish() {
//     this.kind = '菜'
// }
//
// /* 抽象方法 */
// Dish.prototype.eat = function () {
//     throw new Error('抽象方法不能调用!')
// }
//
// /* 鱼香肉丝类 */
// function YuXiangRouSi() {
//     this.type = '鱼香肉丝'
// }
//
// YuXiangRouSi.prototype = new Dish()
//
// YuXiangRouSi.prototype.eat = function () {
//     console.log(this.kind + ' - ' + this.type + ' 真香~')
// }
//
// /* 宫保鸡丁类 */
// function GongBaoJiDing() {
//     this.type = '宫保鸡丁'
// }
//
// GongBaoJiDing.prototype = new Dish()
//
// GongBaoJiDing.prototype.eat = function () {
//     console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~')
// }
//
// const dish1 = Restaurant.orderDish('鱼香肉丝')
// dish1.eat()
// const dish2 = Restaurant.orderDish('宫保鸡丁')
// const dish3 = Restaurant.orderDish('红烧排骨')


// 输出: 菜 - 鱼香肉丝 真香~
// 输出: Error 本店没有这个 -。-


/* 饭店方法 */
// class Restaurant {
//     static orderDish(type) {
//         switch (type) {
//             case '鱼香肉丝':
//                 return new YuXiangRouSi()
//             case '宫保鸡丁':
//                 return new GongBaoJiDin()
//             default:
//                 throw new Error('本店没有这个 -。-')
//         }
//     }
// }
//
// /* 菜品抽象类 */
// class Dish {
//     constructor() {
//         if (new.target === Dish) {
//             throw new Error('抽象类不能直接实例化!')
//         }
//         this.kind = '菜'
//     }
//
//     /* 抽象方法 */
//     eat() { throw new Error('抽象方法不能调用!') }
// }
//
// /* 鱼香肉丝类 */
// class YuXiangRouSi extends Dish {
//     constructor() {
//         super()
//         this.type = '鱼香肉丝'
//     }
//
//     eat() { console.log(this.kind + ' - ' + this.type + ' 真香~') }
// }
//
// /* 宫保鸡丁类 */
// class GongBaoJiDin extends Dish {
//     constructor() {
//         super()
//         this.type = '宫保鸡丁'
//     }
//
//     eat() { console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~') }
// }
//
// // const dish0 = new Dish()  										// 输出: Error 抽象方法不能调用!
// const dish1 = Restaurant.orderDish('鱼香肉丝')
// dish1.eat()																		// 输出: 菜 - 鱼香肉丝 真香~
// const dish2 = Restaurant.orderDish('红烧排骨') // 输出: Error 本店没有这个 -。-


/* 饭店 抽象类，饭店都可以做菜和汤 */
class AbstractRestaurant {
    constructor() {
        if (new.target === AbstractRestaurant)
            throw new Error('抽象类不能直接实例化!')
        this.signborad = '饭店'
    }

    /* 抽象方法：创建菜 */
    createDish() {
        throw new Error('抽象方法不能调用!')
    }

    /* 抽象方法：创建汤 */
    createSoup() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体饭店类 */
class Restaurant extends AbstractRestaurant {
    constructor() {
        super()
    }

    createDish(type) {
        switch (type) {
            case '鱼香肉丝':
                return new YuXiangRouSi()
            case '宫保鸡丁':
                return new GongBaoJiDing()
            default:
                throw new Error('本店没这个菜')
        }
    }

    createSoup(type) {
        switch (type) {
            case '紫菜蛋汤':
                return new ZiCaiDanTang()
            default:
                throw new Error('本店没这个汤')
        }
    }
}

/* 菜 抽象类，菜都有吃的功能 eat */
class AbstractDish {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '菜'
    }

    /* 抽象方法 */
    eat() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 菜 鱼香肉丝类 */
class YuXiangRouSi extends AbstractDish {
    constructor() {
        super()
        this.type = '鱼香肉丝'
    }

    eat() {
        console.log(this.kind + ' - ' + this.type + ' 真香~')
    }
}

/* 菜 宫保鸡丁类 */
class GongBaoJiDing extends AbstractDish {
    constructor() {
        super()
        this.type = '宫保鸡丁'
    }

    eat() {
        console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~')
    }
}

/* 汤 抽象类，汤都有喝的功能 drink */
class AbstractSoup {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '汤'
    }

    /* 抽象方法 */
    drink() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 汤 紫菜蛋汤类 */
class ZiCaiDanTang extends AbstractSoup {
    constructor() {
        super()
        this.type = '紫菜蛋汤'
    }

    drink() {
        console.log(this.kind + ' - ' + this.type + ' 我从小喝到大~')
    }
}


const restaurant = new Restaurant()

const soup1 = restaurant.createSoup('紫菜蛋汤')
soup1.drink()																		// 输出: 汤 - 紫菜蛋汤 我从小喝到大~
const dish1 = restaurant.createDish('鱼香肉丝')
dish1.eat()																			// 输出: 菜 - 鱼香肉丝 真香~
const dish2 = restaurant.createDish('红烧排骨')  // 输出: Error 本店没有这个 -。-


// ---------- 抽象工厂模式的通用实现 ---------
/* 工厂 抽象类 */
class AbstractFactory {
    constructor() {
        if (new.target === AbstractFactory)
            throw new Error('抽象类不能直接实例化!')
    }

    /* 抽象方法 */
    createProduct1() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体饭店类 */
class Factory extends AbstractFactory {
    constructor() {
        super()
    }

    createProduct1(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品 -。-')
        }
    }
}

/* 抽象产品类 */
class AbstractProduct {
    constructor() {
        if (new.target === AbstractProduct)
            throw new Error('抽象类不能直接实例化!')
        this.kind = '抽象产品类1'
    }

    /* 抽象方法 */
    operate() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体产品类1 */
class Product1 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product1'
    }

    operate() {
        console.log(this.kind + ' - ' + this.type)
    }
}

/* 具体产品类2 */
class Product2 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product2'
    }

    operate() {
        console.log(this.kind + ' - ' + this.type)
    }
}


const factory = new Factory()

const prod1 = factory.createProduct1('Product1')
prod1.operate()																		// 输出: 抽象产品类1 - Product1
const prod2 = factory.createProduct1('Product3')	// 输出: Error 当前没有这个产品 -。-
// ---------- 抽象工厂模式的通用实现 ---------
