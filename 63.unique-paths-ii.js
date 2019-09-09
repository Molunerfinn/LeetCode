/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.51%)
 * Likes:    988
 * Dislikes: 165
 * Total Accepted:    221.9K
 * Total Submissions: 659K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// https://blog.csdn.net/happyaaaaaaaaaaa/article/details/50858750
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0 || obstacleGrid[0][0] === 1) {
    return 0
  }
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  if (obstacleGrid[m - 1][n - 1] === 1) {
    return 0
  }
  let ways = new Array(m).fill(0)
  for (let i in ways) {
    ways[i] = new Array(n).fill(0)
  }
  ways[0][0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue
      } else {
        if (i === 0 || j === 0) {
          ways[i][j] = 1
        } else {
          ways[i][j] = ways[i - 1][j] + ways[i][j - 1]
        }
      }
    }
  }
  return ways[m - 1][n - 1]
};

