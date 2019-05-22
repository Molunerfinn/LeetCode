/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 *
 * https://leetcode.com/problems/wiggle-subsequence/description/
 *
 * algorithms
 * Medium (37.33%)
 * Likes:    522
 * Dislikes: 45
 * Total Accepted:    47.1K
 * Total Submissions: 126.1K
 * Testcase Example:  '[1,7,4,9,2,5]'
 *
 * A sequence of numbers is called a wiggle sequence if the differences between
 * successive numbers strictly alternate between positive and negative. The
 * first difference (if one exists) may be either positive or negative. A
 * sequence with fewer than two elements is trivially a wiggle sequence.
 * 
 * For example, [1,7,4,9,2,5] is a wiggle sequence because the differences
 * (6,-3,5,-7,3) are alternately positive and negative. In contrast,
 * [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its
 * first two differences are positive and the second because its last
 * difference is zero.
 * 
 * Given a sequence of integers, return the length of the longest subsequence
 * that is a wiggle sequence. A subsequence is obtained by deleting some number
 * of elements (eventually, also zero) from the original sequence, leaving the
 * remaining elements in their original order.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,7,4,9,2,5]
 * Output: 6
 * Explanation: The entire sequence is a wiggle sequence.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,17,5,10,13,15,10,5,16,8]
 * Output: 7
 * Explanation: There are several subsequences that achieve this length. One is
 * [1,17,10,13,10,16,8].
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,2,3,4,5,6,7,8,9]
 * Output: 2
 * 
 * Follow up:
 * Can you do it in O(n) time?
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length <= 1) {
    return 1
  }
  let length = nums.length
  let preNum = nums[0]
  let dp = 1
  let flag // flag 为true说明下一个要找的数应该比preNum小，反之亦然
  for (let i = 1; i < length; i++) {
    if (flag === undefined) { // undefined 说明当前数始终等于preNum（也即当前数一直等于第一个数）
      if (nums[i] > preNum) {
        flag = true
        dp++
      } else if (nums[i] < preNum){
        flag = false
        dp++
      }
    } else {
      if (flag) { // 说明当前要找的数应该比preNum小
        if (nums[i] < preNum) {
          flag = !flag // flag 反转
          dp++
        }
      } else {
        if (nums[i] > preNum) {
          flag = !flag
          dp++
        }
      }
    }
    preNum = nums[i] // preNum设成当前数用于下一轮
  }
  return dp
};

