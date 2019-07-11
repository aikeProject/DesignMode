/**
 * @author 成雨
 * @date 2019-07-11
 * @Description: 适配器模式
 * （Adapter Pattern）又称包装器模式，将一个类（对象）的接口（方法、属性）转化为用户需要的另一个接口，解决类（对象）之间接口不兼容的问题。
 */


// ------ 适配器模式在实战中的应用 ------

// jQuery.ajax 适配 Axios
/* 适配器 */
// function ajax2AxiosAdapter(ajaxOptions) {
//     return axios({
//         url: ajaxOptions.url,
//         method: ajaxOptions.type,
//         responseType: ajaxOptions.dataType,
//         data: ajaxOptions.data
//     })
//         .then(ajaxOptions.success)
//         .catch(ajaxOptions.error)
// }
//
// /* 经过适配器包装 */
// $.ajax = function (options) {
//     return ajax2AxiosAdapter(options)
// }
//
// $.ajax({
//     url: '/demo-url',
//     type: 'POST',
//     dataType: 'json',
//     data: {
//         name: '张三',
//         id: '2345'
//     },
//     success: function (data) {
//         console.log('访问成功！')
//     },
//     error: function (err) {
//         console.err('访问失败～')
//     }
// });

// 业务数据适配
/* 原来的树形结构 */
const oldTreeData = [
    {
        name: '总部',
        place: '一楼',
        children: [
            {name: '财务部', place: '二楼'},
            {name: '生产部', place: '三楼'},
            {
                name: '开发部', place: '三楼', children: [
                    {
                        name: '软件部', place: '四楼', children: [
                            {name: '后端部', place: '五楼'},
                            {name: '前端部', place: '七楼'},
                            {name: '技术支持部', place: '六楼'}]
                    }, {
                        name: '硬件部', place: '四楼', children: [
                            {name: 'DSP部', place: '八楼'},
                            {name: 'ARM部', place: '二楼'},
                            {name: '调试部', place: '三楼'}]
                    }]
            }
        ]
    }
]

/* 树形结构平铺 */
function treeDataAdapter(treeData, lastArrayData = []) {
    treeData.forEach(item => {
        if (item.children) {
            treeDataAdapter(item.children, lastArrayData)
        }
        const {name, place} = item
        lastArrayData.push({name, place})
    })
    return lastArrayData
}

let tree = treeDataAdapter(oldTreeData)
console.log(tree)
// 返回平铺的组织结构