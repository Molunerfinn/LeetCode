/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (33.15%)
 * Total Accepted:    278.6K
 * Total Submissions: 840.4K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) {
    return [-1,-1]
  }
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0,0]
    } else {
      return [-1,-1]
    }
  }

  let current = binarySearch(nums, target, 0, nums.length - 1)
  if (current === -1) {
    return [-1,-1]
  } else {
    return findFirstAndNext(nums, current)
  }
};

function findFirstAndNext (nums, current) {
  let target = nums[current]
  let left = current
  let right = current
  let length = nums.length
  while (true) {
    if (left > 1 && nums[left - 1] === target) {
      left--
    }
    if (right < length - 1 && nums[right + 1] === target) {
      right++
    }
    if (nums[left - 1] !== target && nums[right + 1] !== target) {
      break
    }
  }
  return [left, right]
}

function binarySearch (nums, target, left, right) {
  // 如果不在数组范围里说明找不到
  if (nums[left] > target || nums[right] < target) {
    return -1
  }
  if (nums[left] === target) {
    return left
  } else if (nums[right] === target) {
    return right
  }
  let middle = Math.floor((left + right) / 2)
  while (left < right) {
    if ((right - left) === 1) {
      return nums[right] === target
        ? right : nums[left] === target
        ? left : -1
    }
    if (nums[middle] > target) {
      right = middle
      middle = Math.floor((left + right) / 2)
    } else if (nums[middle] < target) {
      left = middle
      middle = Math.floor((left + right) / 2)
    } else if (nums[middle] === target) {
      return middle
    }
  }
  return -1
}

// console.log(searchRange([5,8], 5))
