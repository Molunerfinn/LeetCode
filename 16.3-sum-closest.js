/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.77%)
 * Total Accepted:    300.4K
 * Total Submissions: 718.9K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
    return 0
  }
  let length = nums.length
  nums = nums.sort((a, b) => {
    return a - b
  })
  let diff
  let result
  let i = 0
  while (i < length - 1) {
    let current = nums[i]
    let diffSum = target - current
    let res = addTwoNums(nums, i + 1, length - 1, diffSum)
    let tempRes = res + current 
    let tempDiff = Math.abs(tempRes - target)
    if (result === undefined && diff === undefined) {
      result = tempRes
      diff = tempDiff
    }
    if (tempDiff < diff) {
      result = tempRes
      diff = tempDiff
    }
    i++
    while (nums[i] === nums[i - 1] && i < length - 1) {
      i++
    }
  }
  return result
};

function addTwoNums(arr, left, right, sum) {
  let result
  let diff
  while (left < right) {
    let tempSum = arr[left] + arr[right]
    let tempDiff = Math.abs(tempSum - sum)
    if (result === undefined && diff === undefined) {
      result = tempSum
      diff = tempDiff
    }
    if (tempDiff < diff) {
      result = tempSum
      diff = tempDiff
    }
    if (tempSum < sum) {
      left++
    } else if (tempSum > sum) {
      right--
    } else {
      return sum
    }
  }
  return result
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
