/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (54.01%)
 * Total Accepted:    353.3K
 * Total Submissions: 653.9K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let length = nums.length
  if (length === 0) {
    return []
  }
  if (length === 1) {
    return [nums]
  }
  let results =[]

  permuteCore(nums, 0, length, results)
  return results
};

function permuteCore (nums, start, length, results) {
  if (start === length - 1) {
    return results.push(nums.slice())
  }
  for (let i = start; i < length; i++) {
    swap(nums, start, i)
    permuteCore(nums, start + 1, length, results)
    swap(nums, start, i)
  }
}

function swap (nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]]
}

console.log(permute([1]))
