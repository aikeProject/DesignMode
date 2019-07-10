/**
 * @author 成雨
 * @date 2019-07-09
 * @Description: 建造者模式
 * （Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。
 * 同样的构建过程可以采用不同的表示，将一个复杂对象的构建层与其表示层分离
 */

// 建造者，汽车部件厂家，提具体部件的生产
function CarBuilder({color = 'white', weight = 0}) {
    this.color = color;
    this.weight = weight;
}

// 生产部件，轮胎
CarBuilder.prototype.buildType = function (type) {
    switch (type) {
        case 'small':
            this.tyreType = '小号轮胎';
            this.tyreIntro = '正在使用小号轮胎';
            break;
        case 'normal':
            this.tyreType = '中号轮胎';
            this.tyreIntro = '正在使用中号轮胎';
            break;
        case 'big':
            this.tyreType = '大号轮胎';
            this.tyreIntro = '正在使用大号轮胎';
            break
    }
};

// 生产部件，发动机
CarBuilder.prototype.buildEngine = function (type) {
    switch (type) {
        case 'small':
            this.engineType = '小马力发动机'
            this.engineIntro = '正在使用小马力发动机'
            break
        case 'normal':
            this.engineType = '中马力发动机'
            this.engineIntro = '正在使用中马力发动机'
            break
        case 'big':
            this.engineType = '大马力发动机'
            this.engineIntro = '正在使用大马力发动机'
            break
    }
};

/* 奔驰厂家，负责最终汽车产品的装配 */
function benChiDirector(tyre, engine, param) {
    var _car = new CarBuilder(param)
    _car.buildTyre(tyre)
    _car.buildEngine(engine)
    return _car
}

// 获得产品实例
var benchi1 = benChiDirector('small', 'big', {color: 'red', weight: '1600kg'})

console.log(benchi1);


// ES6
// 建造者，汽车部件厂家，提供具体零部件的生产
class CarBuilder {
    constructor({color = 'white', weight = 0}) {
        this.color = color
        this.weight = weight
    }

    /* 生产部件，轮胎 */
    buildTyre(type) {
        const tyre = {}
        switch (type) {
            case 'small':
                tyre.tyreType = '小号轮胎'
                tyre.tyreIntro = '正在使用小号轮胎'
                break
            case 'normal':
                tyre.tyreType = '中号轮胎'
                tyre.tyreIntro = '正在使用中号轮胎'
                break
            case 'big':
                tyre.tyreType = '大号轮胎'
                tyre.tyreIntro = '正在使用大号轮胎'
                break
        }
        this.tyre = tyre
    }

    /* 生产部件，发动机 */
    buildEngine(type) {
        const engine = {}
        switch (type) {
            case 'small':
                engine.engineType = '小马力发动机'
                engine.engineIntro = '正在使用小马力发动机'
                break
            case 'normal':
                engine.engineType = '中马力发动机'
                engine.engineIntro = '正在使用中马力发动机'
                break
            case 'big':
                engine.engineType = '大马力发动机'
                engine.engineIntro = '正在使用大马力发动机'
                break
        }
        this.engine = engine
    }
}

/* 指挥者，负责最终汽车产品的装配 */
class BenChiDirector {
    constructor(tyre, engine, param) {
        const _car = new CarBuilder(param)
        _car.buildTyre(tyre)
        _car.buildEngine(engine)
        return _car
    }
}

// 获得产品实例
const benchi1 = new BenChiDirector('small', 'big', {color: 'red', weight: '1600kg'})

console.log(benchi1)


// ------ 建造者模式的通用实现 ------

// 建造者，汽车部件厂家
class CarBuilder {
    constructor(param) {
        this.param = param
    }

    /* 生产部件，part1 */
    buildPart1() {
        this.part1 = 'part1'
        return this
    }

    /* 生产部件，part2 */
    buildPart2() {
        this.part2 = 'part2'
        return this
    }
}

// 汽车装配，获得产品实例
const benchi1 = new CarBuilder('param')
    .buildPart1()
    .buildPart2()

