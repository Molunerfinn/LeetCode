/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 *
 * https://leetcode.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (36.77%)
 * Likes:    965
 * Dislikes: 68
 * Total Accepted:    108.7K
 * Total Submissions: 295.1K
 * Testcase Example:  '10'
 *
 * Write a program to find the n-th ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3,
 * 5. 
 * 
 * Example:
 * 
 * 
 * Input: n = 10
 * Output: 12
 * Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10
 * ugly numbers.
 * 
 * Note:  
 * 
 * 
 * 1 is typically treated as an ugly number.
 * n does not exceed 1690.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if (n < 1) {
    return -1
  }
  let uglyArr = [1]
  let nth2 = 0
  let nth3 = 0
  let nth5 = 0
  let maxIndex = 0
  let currentNumber = 1 // 当前有几个丑数了

  while (currentNumber < n) {
    let min = Math.min(uglyArr[nth2] * 2, uglyArr[nth3] * 3, uglyArr[nth5] * 5)
    uglyArr.push(min)
    currentNumber++
    maxIndex++
    while (uglyArr[nth2] * 2 <= uglyArr[maxIndex]) {
      nth2++
    }
    while (uglyArr[nth3] * 3 <= uglyArr[maxIndex]) {
      nth3++
    }
    while (uglyArr[nth5] * 5 <= uglyArr[maxIndex]) {
      nth5++
    }
  }

  return uglyArr[n - 1]
};
