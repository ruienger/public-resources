/*
 * @Date: 2021-05-19 14:16:45
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 14:17:33
 * @FilePath: \personalStudy\public-resources\JS\deepClone.js
 * @Description: deepClone 深克隆的简易版本
 */
import {
    isObj
} from "./typeof"
/**
 * @msg: 深拷贝的简易版本,可以拷贝Object内的基本属性、Symbol与prototype
 * @param {object} object 目标对象
 * @return {*} 深拷贝之后的新对象
 */
function deepClone(object) {
    const cloned = Object.create(Object.getPrototypeOf(object))
    for (let key in object) {
        let value = object[key]
        if (typeof value === 'object' && value === null) {
            if (isObj(value)) {
                deepClone(object[key])
            } else {
                cloned[key] = Array.from(object[key])
            }
        } else {
            cloned[key] = value
        }
    }
    Object.getOwnPropertySymbols(object).forEach(symbol => {
        cloned[symbol] = object[symbol]
    })
    return cloned
}