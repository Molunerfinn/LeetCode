/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.45%)
 * Likes:    264
 * Dislikes: 869
 * Total Accepted:    49.2K
 * Total Submissions: 161.5K
 * Testcase Example:  '3'
 *
 * Find the n^th digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ... 
 * 
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 2^31).
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 3
 * 
 * Output:
 * 3
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 11
 * 
 * Output:
 * 0
 * 
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let base = 9 // 9,90,900,...
  let len = 1
  let start = 1 // 起始点
  while (n > base * len) {
    n -= base*len
    base *= 10
    len += 1
    start *= 10
  }
  // 此时n在len*base的范围内
  // 首先先把n所在的那个自然数算出来

  let currentFromStart = Math.floor((n - 1) / len)
  let currentNumber = start + currentFromStart + '' // 转成字符串后续好返回
  return parseInt(currentNumber[(n - 1) % len])
};
