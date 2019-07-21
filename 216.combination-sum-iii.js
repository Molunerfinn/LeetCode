/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 *
 * https://leetcode.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (51.84%)
 * Likes:    632
 * Dislikes: 31
 * Total Accepted:    127.1K
 * Total Submissions: 243.7K
 * Testcase Example:  '3\n7'
 *
 * 
 * Find all possible combinations of k numbers that add up to a number n, given
 * that only numbers from 1 to 9 can be used and each combination should be a
 * unique set of numbers.
 * 
 * Note:
 * 
 * 
 * All numbers will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: k = 3, n = 9
 * Output: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = []
  combinationCore(k, n, [], res, 1)
  return res
};

/**
 * 
 * @param {number} k 
 * @param {number} target 
 * @param {number[]} path 
 * @param {number[][]} res 
 * @param {number} start 
 */
function combinationCore (k, target, path, res, start) {
  if (target === 0 && path.length === k) {
    res.push(path.slice())
    return
  }
  if (target < 0 || path.length > k) {
    return
  }

  for (let i = start; i <= 9; i++) {
    path.push(i)
    combinationCore(k, target - i, path, res, i + 1)
    path.pop()
  }
}
