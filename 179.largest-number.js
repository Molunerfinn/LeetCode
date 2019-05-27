/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 *
 * https://leetcode.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (25.50%)
 * Likes:    989
 * Dislikes: 135
 * Total Accepted:    129.1K
 * Total Submissions: 500.9K
 * Testcase Example:  '[10,2]'
 *
 * Given a list of non negative integers, arrange them such that they form the
 * largest number.
 * 
 * Example 1:
 * 
 * 
 * Input: [10,2]
 * Output: "210"
 * 
 * Example 2:
 * 
 * 
 * Input: [3,30,34,5,9]
 * Output: "9534330"
 * 
 * 
 * Note: The result may be very large, so you need to return a string instead
 * of an integer.
 * 
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = nums.sort((a, b) => {
    a = `${a}`
    b = `${b}`
    const result = compareCore(a, b)
    return result
  })
  const result = nums.reduce((prev, current, curretnIndex, arr) => {
    return prev + `${current}`
  }, '')
  if (result[0] === '0' && result[1] === '0') {
    return '0'
  } else {
    return result
  }
};

// /** 笨办法
//  * 
//  * @param {string} a 
//  * @param {string} b 
//  * @param {number} i 
//  * @param {number} j 
//  */
// const compareCore = (a, b, i = 0, j = 0) => {
//   if (a === b) {
//     return 0
//   }
//   if (b[i] > a[j]) {
//     return 1
//   } else if (b[i] < a[j]) {
//     return -1
//   } else { // b[i] === a[j] or b[i] === undefined or a[i] === undefined
//     if (b[i] === undefined) { // 此时如果a比较大，应该把a放到前面去
//       if (a[0] === a[j] && j < a.length - 1) { // 2281与2
//         return compareCore(a, b, i, j + 1)
//       }
//       else {
//         if (a[0] === a[j]) { // 如果与第一位相等，比较前两位
//           return a[1] - a[0] // 比如 232、23与323、32
//         } else {
//           return a[0] - a[j]
//         }
//       }
//     } else if (a[j] === undefined) { // 此时如果b比较大，应该把b放到a前面去
//       if (b[0] === b[i] && i < b.length - 1) {
//         return compareCore(a, b, i + 1, j)
//       } else {
//         if (b[i] === b[0]) {
//           return b[0] - b[1]
//         } else {
//           return b[i] - b[0]
//         }
//       }
//     } else {
//       return compareCore(a, b, i + 1, j + 1)
//     }
//   }
// }

// 比较 a+b 与 b+a 谁大即可

const compareCore = (a, b) => {
  return (b + a) - (a + b)
}

