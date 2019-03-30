/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (39.59%)
 * Total Accepted:    228.7K
 * Total Submissions: 577.5K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let length = nums.length
  if (length === 0) {
    return []
  }
  if (length === 1) {
    return [nums]
  }
  let results =[]
  let hashMap = new Map()
  nums = nums.sort((a, b) => a - b)
  permuteCore(nums, 0, length, results, hashMap)
  return results
};

function permuteCore (nums, start, length, results, hashMap) {
  if (start === length - 1) {
    let tempResult = nums.slice()
    let tempToString = tempResult.toString()
    if (!hashMap.has(tempToString)) {
      hashMap.set(tempToString, true)
      results.push(tempResult)
    }
    return
  }
  for (let i = start; i < length; i++) {
    swap(nums, start, i)
    permuteCore(nums, start + 1, length, results, hashMap)
    swap(nums, start, i)
    while (nums[i + 1] === nums[i]) {
      i++
    }
  }
}

function swap (nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]]
}

// console.log(permuteUnique([0,1,0,0,9]).length)
