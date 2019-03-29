/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.72%)
 * Total Accepted:    384.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }
  if (nums.length === 1) {
    return target === nums[0] ? 0 : -1
  }
  // 判断是否数组旋转了。如果未旋转，则就是直接在排序数组上二分查找
  // 如果旋转了，可以取中值判断该去左边还是右边，直到找到数字
  let length = nums.length
  let head = nums[0]
  let tail = nums[length - 1]
  if (head < tail) { // 未旋转
    return binarySearch(nums, target, 0, length - 1)
  } else {
    // 如果不在数组范围里说明找不到
    let result = findPivot(nums, target)
    console.log(result)
    if (result.result !== false) { // 如果直接找到了
      return result.result
    } else { // 如果没有直接找到，就二分查找
      return binarySearch(nums, target, result.left, result.right)
    }
  }
};

function findPivot (nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle = Math.floor((left + right) / 2)
  let pivot = middle
  while (true) {
    if (nums[middle] === target) {
      return {
        result: middle
      }
    } else {
      if (nums[middle] > nums[right]) {
        if (nums[middle + 1] < nums[middle]) {
          pivot = middle
          break
        } else {
          left = middle + 1
          middle = Math.floor((left + right) / 2)
        }
      } else { // nums[middle] < nums[right]
        if (nums[middle - 1] > nums[middle]) {
          pivot = middle - 1
          break
        } else {
          right = middle - 1
          middle = Math.floor((left + right) / 2)
        }
      }
    }
  }
  if (nums[pivot] === target) {
    return {
      result: pivot
    }
  }
  if (target >= nums[0]) {
    left = 0
    right = pivot
  } else {
    left = pivot + 1
    right = nums.length - 1
  }
  return {
    result: false,
    left,
    right
  }
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

console.log(search([4,5,6,7,0,1,2,3], 0))
