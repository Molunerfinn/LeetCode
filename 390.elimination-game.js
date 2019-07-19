/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 *
 * https://leetcode.com/problems/elimination-game/description/
 *
 * algorithms
 * Medium (43.50%)
 * Likes:    236
 * Dislikes: 220
 * Total Accepted:    23.7K
 * Total Submissions: 54.5K
 * Testcase Example:  '9'
 *
 * 
 * There is a list of sorted integers from 1 to n. Starting from left to right,
 * remove the first number and every other number afterward until you reach the
 * end of the list.
 * 
 * Repeat the previous step again, but this time from right to left, remove the
 * right most number and every other number from the remaining numbers.
 * 
 * We keep repeating the steps again, alternating left to right and right to
 * left, until a single number remains.
 * 
 * Find the last number that remains starting with a list of length n.
 * 
 * Example:
 * 
 * Input:
 * n = 9,
 * 1 2 3 4 5 6 7 8 9
 * 2 4 6 8
 * 2 6
 * 6
 * 
 * Output:
 * 6
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/fuxuemingzhu/article/details/79526571
var lastRemaining = function(n) {
  return leftToRight(n)
};

/**
 * 从左到右
 * @param {number} n 
 */
function leftToRight (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return 2 * rightToLeft(Math.floor(n / 2))
}

/**
 * 从右到左
 * @param {number} n 
 */
function rightToLeft (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  if (n & 1 === 1) { // 奇数,12345 -> 24
    return 2 * leftToRight(Math.floor(n / 2))
  } else { // 偶数，1234 -> 13
    return 2 * leftToRight(n / 2) - 1
  }
}
