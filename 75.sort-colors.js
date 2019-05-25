/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (41.72%)
 * Likes:    1600
 * Dislikes: 155
 * Total Accepted:    316.7K
 * Total Submissions: 751.8K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this
 * problem.
 * 
 * Example:
 * 
 * 
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Follow up:
 * 
 * 
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // 用zeroIndex和twoIndex表示0和2应该出现的位置
  // zeroIndex始终++，twoIndex始终--
  // 只需要交换0或者2，这样1就自动跑到数组中间了
  let zeroIndex = 0
  let length = nums.length
  let twoIndex = length - 1
  while (nums[twoIndex] === 2) { // 避免出现最后几个已经是2的情况
    twoIndex--
  }
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      if (i > zeroIndex) {
        swap(nums, i, zeroIndex)
      }
      zeroIndex++
    } else if (nums[i] === 2) {
      while (nums[twoIndex] === 2) { // 避免出现twoIndex所在的已经是2了
        twoIndex--
      }
      if (i < twoIndex) { // 只有当前的i小于twoIndex的时候才交换，否则说明已经交换完毕了，直接break
        swap(nums, i, twoIndex)
        if (nums[i] === 0) { // 如果把后面的0交换过来了，还需要交换一下当前的0
          swap(nums, i, zeroIndex)
          zeroIndex++
        }
        twoIndex--
      } else {
        break
      }
    }
  }
  return nums
};


const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

