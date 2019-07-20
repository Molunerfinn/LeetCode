/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 *
 * https://leetcode.com/problems/integer-replacement/description/
 *
 * algorithms
 * Medium (31.49%)
 * Likes:    223
 * Dislikes: 246
 * Total Accepted:    42.3K
 * Total Submissions: 133.7K
 * Testcase Example:  '8'
 *
 * 
 * Given a positive integer n and you can do operations as follow:
 * 
 * 
 * 
 * 
 * If n is even, replace n with n/2.
 * If n is odd, you can replace n with either n + 1 or n - 1.
 * 
 * 
 * 
 * 
 * What is the minimum number of replacements needed for n to become 1?
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 8
 * 
 * Output:
 * 3
 * 
 * Explanation:
 * 8 -> 4 -> 2 -> 1
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 7
 * 
 * Output:
 * 4
 * 
 * Explanation:
 * 7 -> 8 -> 4 -> 2 -> 1
 * or
 * 7 -> 6 -> 3 -> 2 -> 1
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/koala_tree/article/details/80236297
var integerReplacement = function(n) {
  if (n === 1) return 0
  let count = 0
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2
      // 如果n + 1 是4的倍数，那么就+1
      // 但是如果是3，直接减一就行
    } else if ((n + 1) % 4 === 0 && n !== 3) {
      n += 1
    } else {
      n -= 1
    }
    count++
  }
  return count
};
