/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.52%)
 * Total Accepted:    983.4K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {}
  nums.forEach((item, index) => {
    hashMap[item] = index
  })
  for (let i in nums) {
    let result = target - nums[i]
    let other = hashMap['' + result]
    if (other !== undefined && other !== parseInt(i)) {
      return [parseInt(i), hashMap['' + result]]
    }
  }
}
