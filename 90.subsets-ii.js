/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (42.68%)
 * Likes:    951
 * Dislikes: 49
 * Total Accepted:    211.6K
 * Total Submissions: 492.5K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://blog.csdn.net/Jin_Kwok/article/details/51138263
var subsetsWithDup = function(nums) {
  if (nums.length === 0) {
    return [[]]
  }
  let result = [[]] // 先将空数组存入
  // 排序是为了去重的时候方便判断
  nums = nums.sort((a, b) => a - b)
  for (let i = 1; i <= nums.length; i++) {
    // 深度从1 -> N
    subsetsWithDupCore(nums, result, [], i, 0)
  }
  return result
};

/**
 * DFS搜索
 * @param {number[]} nums 
 * @param {number[]} result 
 * @param {number[]} path 
 * @param {number} depth 
 * @param {number} start 
 */
function subsetsWithDupCore(nums, result, path, depth, start) {
  if (path.length === depth) {
    result.push(path.slice())
    return
  }
  for (let i = start; i < nums.length; i++) {
    // 去重复
    if (i !== start && nums[i] === nums[i - 1]) {
      continue
    }
    path.push(nums[i])
    subsetsWithDupCore(nums, result, path, depth, i + 1)
    path.pop()
  }
}
