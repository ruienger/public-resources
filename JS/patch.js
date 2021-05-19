/*
 * @Date: 2021-05-19 14:12:20
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 14:13:26
 * @FilePath: \personalStudy\public-resources\JS\patch.js
 * @Description: patch(补丁) 方法用于将不同对象内的属性进行替换
 */
import {
    isObj
} from "./typeof"
/**
 * @msg: Object.assign的深度版本,替换键名相同的内容,如果原本是对象则替换该对象内相同键名的内容(不包含Symbol或不可枚举的属性)
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @return {*} 打过补丁之后的target
 */
function patch(target, source, ...rest) {
    try {
        for (let key in source) {
            let tar = target[key],
                src = source[key];
            if (tar) {
                if (isObj(tar) && isObj(src)) {
                    patch(target[key], src)
                } else {
                    target[key] = src
                }
            } else {
                target[key] = src
            }
        }
    } catch (e) {
        console.warn(e);
        return undefined
    }

    rest.length && patch(target, ...rest)
    return target;
}