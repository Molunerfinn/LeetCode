/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 *
 * https://leetcode.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (46.75%)
 * Likes:    387
 * Dislikes: 60
 * Total Accepted:    41.9K
 * Total Submissions: 89.3K
 * Testcase Example:  '13'
 *
 * Given an integer n, return 1 - n in lexicographical order.
 * 
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 * 
 * Please optimize your algorithm to use less time and space. The input size
 * may be as large as 5,000,000.
 * 
 */
/**
 * @param {number} n
 * @return {number[]}
 */
// https://blog.csdn.net/Cloudox_/article/details/70224397
var lexicalOrder = function(n) {
  let current = 1
  let res = []
  for (let i = 1; i <= n ; i++) {
    res.push(current)
    if (current * 10 <= n) {
      current *= 10
    } else if (current % 10 !== 9 && current + 1 <= n) {
      current++
    } else {
      while (Math.floor(current / 10) % 10 === 9) {
        current = Math.floor(current / 10)
      }
      current = Math.floor(current / 10) + 1
    }
  }
  return res
};
