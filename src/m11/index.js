/**
 * @author 成雨
 * @date 2019-07-10
 * @Description: 代理模式
 *  （Proxy Pattern）又称委托模式，它为目标对象创造了一个代理对象，以控制对目标对象的访问。
 */

// ES6 原生提供了 Proxy 构造函数

/* 明星 */
const SuperStar = {
    name: '小鲜肉',
    scheduleFlag: false,            // 档期标识位，false-没空（默认值），true-有空
    playAdvertisement(ad) {
        console.log(ad)
    }
}

/* 经纪人 */
const ProxyAssistant = {
    name: '经纪人张某',
    scheduleTime(ad) {
        const schedule = new Proxy(SuperStar, { 			// 在这里监听 scheduleFlag 值的变化
            set(obj, prop, val) {
                if (prop !== 'scheduleFlag') return
                if (obj.scheduleFlag === false &&
                    val === true) {                     // 小鲜肉现在有空了
                    obj.scheduleFlag = true
                    obj.playAdvertisement(ad)         // 安排上了
                }
            }
        })

        setTimeout(() => {
            console.log('小鲜鲜有空了')
            schedule.scheduleFlag = true              // 明星有空了
        }, 2000)
    },
    playAdvertisement(reward, ad) {
        if (reward > 1000000) {             // 如果报酬超过100w
            console.log('没问题，我们小鲜鲜最喜欢拍广告了！')
            ProxyAssistant.scheduleTime(ad)
        } else
            console.log('没空，滚！')
    }
}

ProxyAssistant.playAdvertisement(10000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
// 输出： 没空，滚

ProxyAssistant.playAdvertisement(1000001, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')


// ------ 代理模式在实战中的应用 ------

// 拦截器 例如 axios
// 前端框架的数据响应式化
// 缓存代理
// 代理保护和虚拟代理
// 正向代理和反向代理

