/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */
/**
 * @param {string} input
 * @return {number[]}
 */
// 分治算法：https://www.jianshu.com/p/9984c329f3c8
// 回溯算法：https://blog.csdn.net/fuxuemingzhu/article/details/79568487
var diffWaysToCompute = function(input) {
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
      // 遇到运算符，就把运算符左边和运算符右边的子式算出结果
      let leftResult = diffWaysToCompute(input.substr(0, i))
      let rightResult = diffWaysToCompute(input.substr(i+1, input.length))
      // 左右子式的结果也是数组，所以要循环计算
      for (let left of leftResult) {
        for (let right of rightResult) {
          if (input[i] === '+') {
            result.push(left + right)
          } else if (input[i] === '-') {
            result.push(left - right)
          } else {
            result.push(left * right)
          }
        }
      }
    }
  }
  // 如果只有一个数，那么result就是这个数
  if (result.length === 0) {
    result.push(parseInt(input))
  }
  return result
};
