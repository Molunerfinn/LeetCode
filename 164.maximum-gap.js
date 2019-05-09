/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 用桶排序将数据放入对应的桶里
 // 取每个桶最大值和最小值
 // 题目要求的值，就是前一个桶的最大值与后一个非空桶的最小值的差值，记录最大的差值返回即可
 // 桶里的差值不会超过桶间的差值，所以只需关注桶间差值即可
var maximumGap = function(nums) {
  if (nums.length < 2) {
    return 0
  }
  let n = nums.length
  let maxNum = Math.max(...nums)
  let minNum = Math.min(...nums)
  let size = Math.ceil((maxNum - minNum) / (n - 1))
  // 如果最大值和最小值一致，直接返回0
  if (size === 0) {
    return 0
  }
  let length = Math.floor((maxNum - minNum) / size) + 1
  let maxArr = new Array(length).fill(minNum)
  let minArr = new Array(length).fill(maxNum + 1) // 记录空桶值为maxNum+1，代表不存在

  for (let i = 0; i < n; i++) {
    let id = Math.floor((nums[i] - minNum) / size)
    minArr[id] = Math.min(minArr[id], nums[i])
    maxArr[id] = Math.max(maxArr[id], nums[i])
  }

  let res = 0
  let premax = maxArr[0]
  for (let i = 1; i < length; i++) {
    if (minArr[i] !== maxNum + 1) { // 说明不是空桶
      res = Math.max(res, (minArr[i] - premax))
      premax = maxArr[i]
    }
  }
  return res
};


