/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (45.98%)
 * Total Accepted:    132.1K
 * Total Submissions: 287.3K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n^2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) {
    return []
  }
  let matrix = []
  for (let i = 0; i < n; i++) {
    matrix.push(Array.from(5).fill(0))
  }
  let current = 1
  spiralOrderCore(matrix, 0, n - 1, 0, n - 1, current)
  return matrix
};

function spiralOrderCore (matrix, row1, row2, col1, col2, current) {
  if (row1 > row2 || col1 > col2 || row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0) {
    return
  }
  current = fromLeft2Right(matrix, row1, col1, col2, current)
  current = fromTop2Bottom(matrix, col2, row1 + 1, row2, current)
  if (row1 !== row2) {
    current = fromRight2Left(matrix, row2, col2 - 1, col1, current)
  }
  if (col1 !== col2) {
    current = fromBottom2Top(matrix, col1, row2 - 1, row1 + 1, current)
  }
  spiralOrderCore(matrix, row1 + 1, row2 - 1, col1 + 1, col2 - 1, current)
}

function fromLeft2Right (matrix, row, col1, col2, current) {
  for (let i = col1; i <= col2; i++) {
    matrix[row][i] = current
    current++
  }
  return current
}

function fromTop2Bottom (matrix, col, row1, row2, current) {
  for (let i = row1; i <= row2; i++) {
    matrix[i][col] = current
    current++
  }
  return current
}

function fromRight2Left (matrix, row, col1, col2, current) {
  for (let i = col1; i >= col2; i--) {
    matrix[row][i] = current
    current++
  }
  return current
}

function fromBottom2Top (matrix, col, row1, row2, current) {
  for (let i = row1; i >= row2; i--) {
    matrix[i][col] = current
    current++
  }
  return current
}

// console.log(generateMatrix(4))
