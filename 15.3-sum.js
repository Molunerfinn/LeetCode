/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.61%)
 * Total Accepted:    503.5K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return []
  }
  let result = []
  let length = nums.length
  let resultMap = new Map()
  nums = nums.sort((a,b) => {
    return a - b
  })
  let i = 0
  while (i < length - 1) {
    let current = nums[i]
    let diffSum = 0 - current
    let res = addTwoNums(nums, i + 1, length - 1, diffSum, current, resultMap)
    result = result.concat(res)
    i++
    while (nums[i] === nums[i - 1] && i < length - 1) {
      i++
    }
  }
  return result
};

function addTwoNums (arr, left, right, sum, current, resultMap) {
  let result = []
  while (left < right) {
    let tempSum = arr[left] + arr[right]
    if (tempSum < sum) {
      left++
    } else if (tempSum > sum) {
      right--
    } else {
      let tempResult = [arr[left], arr[right], current].sort()
      if (!resultMap.has(tempResult.toString())) {
        result.push([arr[left], arr[right], current])
        resultMap.set(tempResult.toString(), true)
      }
      left++
      right--
    }
  }
  return result
}

console.log(threeSum([3,0,-2,-1,1,2]))
