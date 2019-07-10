/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 *
 * https://leetcode.com/problems/water-and-jug-problem/description/
 *
 * algorithms
 * Medium (29.11%)
 * Likes:    166
 * Dislikes: 517
 * Total Accepted:    28.7K
 * Total Submissions: 98.7K
 * Testcase Example:  '3\n5\n4'
 *
 * You are given two jugs with capacities x and y litres. There is an infinite
 * amount of water supply available. You need to determine whether it is
 * possible to measure exactly z litres using these two jugs.
 * 
 * If z liters of water is measurable, you must have z liters of water
 * contained within one or both buckets by the end.
 * 
 * Operations allowed:
 * 
 * 
 * Fill any of the jugs completely with water.
 * Empty any of the jugs.
 * Pour water from one jug into another till the other jug is completely full
 * or the first jug itself is empty.
 * 
 * 
 * Example 1: (From the famous "Die Hard" example)
 * 
 * 
 * Input: x = 3, y = 5, z = 4
 * Output: True
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: x = 2, y = 6, z = 5
 * Output: False
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (z === 0) {
    return true
  } else {
    // z = ax + by
    // 而z的解为x，y的最大公约数的倍数
    // 所以查看z是否为x，y的最大公约数的倍数即可
    return (x + y >= z && (z % gcd(x, y) === 0))
  }
};

// 求x和y的最大公约数
function gcd (x, y) {
  if (y === 0) {
    return x
  } else {
    return gcd(y, x % y)
  }
}
