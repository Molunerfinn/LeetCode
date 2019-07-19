/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 *
 * https://leetcode.com/problems/rotate-function/description/
 *
 * algorithms
 * Medium (35.25%)
 * Likes:    266
 * Dislikes: 87
 * Total Accepted:    36K
 * Total Submissions: 101.9K
 * Testcase Example:  '[]'
 *
 * 
 * Given an array of integers A and let n to be its length.
 * 
 * 
 * 
 * Assume Bk to be an array obtained by rotating the array A k positions
 * clock-wise, we define a "rotation function" F on A as follow:
 * 
 * 
 * 
 * F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
 * 
 * Calculate the maximum value of F(0), F(1), ..., F(n-1). 
 * 
 * 
 * Note:
 * n is guaranteed to be less than 10^5.
 * 
 * 
 * Example:
 * 
 * A = [4, 3, 2, 6]
 * 
 * F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
 * F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
 * F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
 * F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
 * 
 * So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
 * 
 * 
 */
// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// var maxRotateFunction = function(A) {
//   if (A.length === 0) {
//     return 0
//   }
//   let count = Number.MIN_SAFE_INTEGER
//   for (let i = 0; i < A.length; i++) {
//     count = Math.max(F(A, i), count)
//   }
//   return count
// };

// /**
//  * 
//  * @param {number[]} arr 
//  */
// function F (arr, startIndex) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     count += i * arr[calcIndex(startIndex, i, arr.length)]
//   }
//   return count
// }


// /**
//  * 
//  * @param {number} startIndex 
//  * @param {number} i 
//  * @param {number} length 
//  */
// function calcIndex (startIndex, i, length) {
//   if (startIndex + i < length) {
//     return startIndex + i
//   } else {
//     return startIndex + i - length
//   }
// }

// 上面是暴力解法，时间是O(N)，空间是O(1)
// 下面也是类似的，不过是数学的方法，在计算上runtime会更快
// F(i) = F(i - 1) + sum - n * A[n - i]
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  if (A.length === 0) {
    return 0
  }
  let count = 0
  let sum = 0
  let F = 0
  let n = A.length
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    count += i * A[i]
  }
  F = count
  for (let i = 1; i < A.length; i++) {
    F = F + sum - n * A[n - i]
    count = Math.max(F, count)
  }
  return count
};
