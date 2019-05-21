/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (39.54%)
 * Likes:    793
 * Dislikes: 76
 * Total Accepted:    91.5K
 * Total Submissions: 231.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given an unsorted array return whether an increasing subsequence of length 3
 * exists or not in the array.
 * 
 * Formally the function should:
 * 
 * Return true if there exists i, j, k 
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return
 * false.
 * 
 * Note: Your algorithm should run in O(n) time complexity and O(1) space
 * complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [5,4,3,2,1]
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) {
    return false
  }
  let arr = [nums[0]] // 用于保留当指针指向i时的最长递增序列
  let length = nums.length

  for (let i = 1; i < length; i++) {
    if (arr.length === 1) {
      if (nums[i] <= arr[0]) {
        arr[0] = nums[i]
      } else {
        arr.push(nums[i])
      }
    } else { // 如果队列里已经是两个了
      if (nums[i] > arr[1]) { // 如果比第二个值还大，那么直接返回true，符合题意
        return true
      } else {
        if (nums[i] > arr[0]) { // 如果不如第二个值大，但是比第一个值大，那么第一个值重新和该值组成新的递增序列
          arr[1] = nums[i] 
        }
      }
    }
  }
  // 因为会出现 [1,2,-10,-8,-7] 的情况，在12组成最长递增序列的情况下找不到新的值
  // 这个时候如果反过来找递减序列，就能找到-7,-8,-10
  arr = [nums[length - 1]]
  nums = nums.reverse()
  for (let i = 1; i < length; i++) {
    if (arr.length === 1) {
      if (nums[i] >= arr[0]) { // 找递减的
        arr[0] = nums[i]
      } else {
        arr.push(nums[i])
      }
    } else { // 如果队列里已经是两个了
      if (nums[i] < arr[1]) { // 如果比第二个值还小，那么直接返回true，符合题意
        return true
      } else {
        if (nums[i] < arr[0]) { // 如果不如第二个值小，但是比第一个值小，那么第一个值重新和该值组成新的递减序列
          arr[1] = nums[i] 
        }
      }
    }
  }
  return false
};

