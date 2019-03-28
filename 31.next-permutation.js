/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.16%)
 * Total Accepted:    221.5K
 * Total Submissions: 734.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 * 
 * The replacement must be in-place and use only constant extra memory.
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length !== 0) {
    let length = nums.length
    let bigFlag = true
    for (let i = length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        bigFlag = false
        findAndSwap(nums, i - 1)
        reverse(nums, i)
        return
      }
    }
    if (bigFlag) {
      nums = nums.reverse()
      // console.log(nums)
    }
  }
};

function swap (nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]]
}

function findAndSwap (nums, currentIndex) {
  let current = nums[currentIndex]
  let length = nums.length
  let findIndex
  for (let i = currentIndex; i < length; i++) {
    if (nums[i + 1] <= current || i === length - 1) {
      findIndex = i
      break
    }
  }
  swap(nums, currentIndex, findIndex)
}

function reverse (nums, left) {
  let right = nums.length - 1
  while (left < right) {
    swap(nums, left, right)
    left++
    right--
  }
}

// console.log(nextPermutation([1,5,1]))
