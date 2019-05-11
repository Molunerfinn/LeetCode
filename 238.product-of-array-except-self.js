/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let results = []
  let length = nums.length
  let arr = [nums[0]] // 从左到右乘积数组
  let reverseArr = [nums[length - 1]] // 从右到左乘积数组
  let j = length - 2
  for (let i = 1; i < length; i++) {
    arr.push(arr[i - 1] * nums[i])
    reverseArr.push(nums[j] * reverseArr[i - 1])
    j--
  }
  reverseArr = reverseArr.reverse()
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      results.push(reverseArr[1])
    } else if (i === length - 1) {
      results.push(arr[length - 2])
    } else { // 通常i应该来自正向数组的i-1位乘上反向数组的i+1位
      results.push(arr[i - 1] * reverseArr[i + 1])
    }
  }
  return results
};

