/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (39.62%)
 * Likes:    1302
 * Dislikes: 150
 * Total Accepted:    198.3K
 * Total Submissions: 487.7K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// https://www.cnblogs.com/grandyang/p/4286274.html
var minimumTotal = function(triangle) {
  let layer = triangle.length
  let res = triangle[layer - 1].slice() // 取得最后一行

  // 考虑最后一行[4,1,8,3]
  // 往上加，[6,5,7]
  // 6在4和1里只会选1，此时将7覆盖掉4的位置（因为4再也不会用到了）
  // 同理，5+1=6，覆盖1的位置
  // 循环直到结束，这样res[0]就是最小值
  for (let i = layer - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      res[j] = triangle[i][j] + Math.min(res[j], res[j + 1])
    }
  }
  return res[0]
};


