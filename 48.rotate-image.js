/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (47.40%)
 * Total Accepted:    234.6K
 * Total Submissions: 494.9K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * You are given an n x n 2D matrix representing an image.
 * 
 * Rotate the image by 90 degrees (clockwise).
 * 
 * Note:
 * 
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 * 
 * Example 1:
 * 
 * 
 * Given input matrix = 
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Given input matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ], 
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix.length === 1) {
    return matrix
  }
  rotateCore(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1)
};

function rotateCore(matrix, row1, row2, col1, col2) {
  if (row1 === row2 && col1 === col2) {
    return
  }
  translateBlock(matrix, row1, row2 - 1, col1, col2)
  translateSide(matrix, row1, row2, col1, col2)
  reverseRow(matrix, row1, row2, col1)
  rotateCore(matrix, row1, row2 - 1, col1 + 1, col2)
}

// 移动右边界 -> 左边界，转移下一个block区
function translateBlock (matrix, row1, row2, col1, col2) {
  for (let i = row1; i <= row2; i++) {
    reverse(matrix[i], col1, col2 - 1)
    reverse(matrix[i], col1, col2)
  }
}

// L型边界交换
function translateSide (matrix, row1, row2, col1, col2) {
  let count = 0
  for (let i = row1; i < row2; i++) {
    swapDiagonal(matrix[i], col1, matrix[row2], col2 - count)
    count++
  }
}

// L型边界交换关键
function swapDiagonal (arr1, col1, arr2, col2) {
  let temp = arr1[col1]
  arr1[col1] = arr2[col2]
  arr2[col2] = temp
}

// L型边界最左边逆序
function reverseRow (matrix, row1, row2, col) {
  while (row1 < row2) {
    let temp = matrix[row1][col]
    matrix[row1][col] = matrix[row2][col]
    matrix[row2][col] = temp
    row1++
    row2--
  }
}

function swap (arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]]
}

function reverse (arr, start, end) {
  while (start < end) {
    swap(arr, start, end)
    start++
    end--
  }
}

// idea
// [
//   [1 ,2 ,3 ,4 ],
//   [5 ,6 ,7 ,8 ],
//   [9 ,10,11,12],
//   [13,14,15,16],
// ]

// ->

// [
//   [4 ,1 ,2 ,3 ],
//   [8 ,5 ,6 ,7 ],
//   [12,9 ,10,11],
//   [13,14,15,16],
// ]

// ->

// [
//   [16,1 ,2 ,3 ],
//   [15,5 ,6 ,7 ],
//   [14,9 ,10,11],
//   [13,12,8 ,4 ],
// ]

// ->

// [
//   [13,1 ,2 ,3 ],
//   [14,5 ,6 ,7 ],
//   [15,9 ,10,11],
//   [16,12,8 ,4 ],
// ]

// -> then small block
