/*
 * @Date: 2021-05-19 14:15:10
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 15:46:01
 * @FilePath: \personalStudy\public-resources\JS\typeof.js
 * @Description: typeof 用于存储判断类型的各个方法
 */
export function isObj(test) {
    return Object.prototype.toString.call(test) === "[object Object]"
}
// 判断是否为数组
export function isArr(test) {
    return Array.isArray(test)
}
// 判断是否为函数
export function isFun(test) {
    return typeof test === 'function'
}
// 判断类型是否一致
export function isTypeSame(tar, val) {
    return getType(tar) === getType(val)
}
// 获取类型
export function getType(tar) {
    return isObj(tar) ? "object" : isArr(tar) ? "array" : typeof tar
}