/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (48.09%)
 * Likes:    831
 * Dislikes: 48
 * Total Accepted:    212.7K
 * Total Submissions: 437.9K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < 1) {
    return []
  }
  let result = []
  combieCore(result, [], n, k, 1)
  return result
};

/**
 * 
 * @param {number[][]} res 
 * @param {number[]} path 
 * @param {number} n
 * @param {number} k 
 * @param {number} start 
 */
function combieCore (res, path, n, k, start) {
  if (path.length === k) {
    res.push(path.slice())
    return
  }

  for (let i = start; i <= n; i++) {
    path.push(i)
    combieCore(res, path, n, k, i + 1)
    path.pop()
  }
}
