/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (29.31%)
 * Likes:    1118
 * Dislikes: 422
 * Total Accepted:    248.1K
 * Total Submissions: 845.9K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let result = 0
  let arr = new Array(n).fill(true)
  for (let i = 2; i < n; i++) {
    if (arr[i]) { // 说明i是素数
      result++
      for (let j = 2; i * j < n; j++) { // 将i所有的倍数都置为false
        arr[i * j] = false
      }
    }
  }
  return result
};
