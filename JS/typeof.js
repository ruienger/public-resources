/*
 * @Date: 2021-05-19 14:15:10
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 14:15:52
 * @FilePath: \personalStudy\public-resources\JS\typeof.js
 * @Description: typeof 用于存储判断类型的各个方法
 */
export function isObj(tar) {
    return Object.prototype.toString.call(tar) === "[object Object]";
}