/*
 * @Date: 2021-05-19 14:59:27
 * @Editors: HouZekong
 * @LastEditTime: 2021-05-19 15:00:49
 * @FilePath: \personalStudy\public-resources\JS\tokenClosed.js
 * @Description: 检查字符串的 {}\[]\() 符号是否正确闭合
 */
function isTokenClosed(readline) {
    let tagNotClosed = [],
        tagMatchment = {
            "{": "}",
            "[": "]",
            "(": ")"
        },
        tagList = readline.split(" ");
    for (let i = 0, len = tagList.length; i < len; i++) {
        // if it is a start tag, push the matched endTag into stack
        const tag = tagList[i]
        if (tag === "{" || tag === "[" || tag === "(") {
            tagNotClosed.push(tagMatchment[tag])
        } else if (tagNotClosed[tagNotClosed.length - 1] === tag) {
            tagNotClosed.pop()
        } else {
            break
        }
    }
    return !tagNotClosed.length
}