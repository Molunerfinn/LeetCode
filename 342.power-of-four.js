/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (40.46%)
 * Likes:    320
 * Dislikes: 149
 * Total Accepted:    117.2K
 * Total Submissions: 289.6K
 * Testcase Example:  '16'
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a
 * power of 4.
 * 
 * Example 1:
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: false
 * 
 * 
 * Follow up: Could you solve it without loops/recursion?
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // num > 0 没啥好说的
  // num & (num - 1) 如果num是2的n次方，那么该式为0
  // 如果一个数是2的n次方的同时还是4的k次方，那么(4^k - 1) 一定能被3整除。
  // 4^k - 1 = (3+1)^k-1=3^k + k*3^(k-1) + k(k-1)*3^(k-2)/2 +……+ 3k + 1 - 1 = 3^k + k*3^(k-1) + k(k-1)*3^(k-2)/2 +……+ 3k，用到了二项式定理
  return (num > 0) && !(num & (num - 1)) && ((num - 1) % 3 === 0)
};
