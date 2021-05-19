/*
 * @Date: 2021-05-19 14:18:32
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 14:33:00
 * @FilePath: \personalStudy\public-resources\JS\BIMap.js
 * @Description: BIMap 双向映射结构
 */

/**
 * @msg: 一种双向映射,即可由键获取值,亦可值获取键
 * @param {array} mapSet 存放键值对的二维数组
 * @return {*} this
 */
const mapStore = Symbol('mapStore') // 存储键值对的私有属性
const find = Symbol('find') //  私有方法 find
const unFind = Symbol('unFind') // 代表不存在该键值对

class BIMap {
    size = 0;
    [mapStore];
    [Symbol.toStringTag] = "BIMap";
    constructor(mapArr) {
        this[mapStore] = []
        mapArr.forEach(map => {
            this.set(map[0], map[1])
        })
    }
    clear() {
        this[mapStore] = []
        this.size = 0
    }
    delete(keyOrV) {
        const res = this[find](keyOrV)
        if (res === unFind) {
            return false
        }
        this[mapStore].splice(res.index, 1)
        this.size--
        return true
    }

    * entries() {
        for (let index = 0, size = this.size; index < size; index++) {
            yield [this[mapStore][index].key, this[mapStore][index].val]
        }
    }
    forEach(callback, thisArg = this) {
        for (let [key, val] of this) {
            callback.call(thisArg, key, val, this)
        }
    }
    get(keyOrV) {
        const res = this[find](keyOrV)
        if (res === unFind) {
            return undefined
        }
        return res.res
    }
    has(keyOrV) {
        if (this[find](keyOrV) !== unFind)
            return true
        return false
    }
    set(key, val) {
        if (this.has(key) || this.has(val) || key === val || (typeof key === 'number' && isNaN(key)) && (typeof val === 'number' && isNaN(val))) {
            throw new Error('已重复的键值对' + key, val)
        }
        this[mapStore].push({
            key,
            val
        })
        this.size++
    }
    keys() {
        return this[mapStore].map(e => e.key)

    }
    values() {
        return this[mapStore].map(e => e.val)
    }

    [find](keyOrV) {
        let isNAN = typeof keyOrV === 'number' ? isNaN(keyOrV) ? true : false : false,
            i = 0
        for (let [key, val] of this) {
            if (isNAN) {
                if (typeof key === 'number' && isNaN(key)) {
                    return {
                        key,
                        val,
                        res: val,
                        tar: key,
                        index: i,
                    }
                } else if (typeof val === 'number' && isNaN(val)) {
                    return {
                        key,
                        val,
                        res: key,
                        tar: val,
                        index: i,
                    }
                }
            } else if (key === keyOrV) {
                return {
                    key,
                    val,
                    res: val,
                    tar: key,
                    index: i,
                }
            } else if (val === keyOrV) {
                return {
                    key,
                    val,
                    res: key,
                    tar: val,
                    index: i,
                }
            }
            i++
        }
        return unFind
    }

    [Symbol.iterator] = BIMap.prototype.entries
}