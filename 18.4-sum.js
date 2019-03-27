/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.97%)
 * Total Accepted:    218.9K
 * Total Submissions: 730.5K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return []
  }
  let result = []
  nums = nums.sort((a,b) => {
    return a - b
  })
  result = nSum(nums, target, 0, 4)
  return result
};

function nSum (nums, target, currentIndex, n) {
  let length = nums.length
  if (n === 2) {
    let result = addTwoNums(nums, currentIndex, length - 1, target)
    return result
  } else if (n > 2) {
    let i = currentIndex
    let result = []
    while (i <= length - n) {
      let current = nums[i]
      let diffSum = target - current
      let res = nSum(nums, diffSum, i + 1, n - 1)
      res = res.map(item => item.concat(current))
      result = result.concat(res)
      i++
      while (nums[i] === nums[i - 1] && i <= length - n) {
        i++
      }
    }
    return result
  }
}

function addTwoNums (arr, left, right, sum) {
  let resultMap = new Map()
  let result = []
  while (left < right) {
    let tempSum = arr[left] + arr[right]
    if (tempSum < sum) {
      left++
    } else if (tempSum > sum) {
      right--
    } else {
      let tempResult = [arr[left], arr[right]].sort()
      if (!resultMap.has(tempResult.toString())) {
        result.push(tempResult)
        resultMap.set(tempResult.toString(), true)
      }
      left++
      right--
    }
  }
  return result
}

console.log(fourSum([0, 0, 0, 0, 0, 0], 0))

