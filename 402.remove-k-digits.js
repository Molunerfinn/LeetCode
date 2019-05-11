/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 *
 * https://leetcode.com/problems/remove-k-digits/description/
 *
 * algorithms
 * Medium (26.34%)
 * Total Accepted:    56.5K
 * Total Submissions: 214.5K
 * Testcase Example:  '"1432219"\n3'
 *
 * Given a non-negative integer num represented as a string, remove k digits
 * from the number so that the new number is the smallest possible.
 * 
 * 
 * Note:
 * 
 * The length of num is less than 10002 and will be ≥ k.
 * The given num does not contain any leading zero.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219
 * which is the smallest.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the
 * output must not contain leading zeroes.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with
 * nothing which is 0.
 * 
 * 
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length === k) {
    return '0'
  }
  let nums = num.split('')
  let left = 0
  for (let i = 0; i < k; i++) {
    let nextIndex = left + 1
    while (nums[nextIndex] === 'x') {
      nextIndex++
    }
    if (nums[left] > nums[nextIndex]) {
      nums[left] = 'x'
      while (nums[left] === 'x') {
        left++
      }
    } else {
      nextIndex = findNextIndex(nums, left)
      nums[nextIndex] = 'x'
      while (nums[left] === 'x') {
        left++
      }
    }
  }
  return outPutResult(nums, left)
};

function outPutResult (arr, left) {
  let result = []
  let length = arr.length
  let zeroFlag = false
  for (let i = left; i < length; i++) {
    if (arr[i] !== 'x') {
      if (arr[i] === '0' && (zeroFlag === false)) {
        continue
      } else {
        zeroFlag = true
        result.push(arr[i])
      }
    }
  }
  result = result.join('')
  if (result === '') {
    return '0'
  } else {
    return result
  }
}

function findNextIndex (arr, left) { // 下一个点要么是下降点，要么是最大值点
  let length = arr.length
  let leftValue = arr[left]
  let leftIndex = left
  let maxValue = arr[left]
  let maxIndex = left
  for (let i = left + 1; i < length; i++) {
    if (arr[i] !== 'x' && arr[i] !== undefined) {
      if (arr[i] >= leftValue) {
        leftValue = arr[i]
        leftIndex = i
      } else {
        return leftIndex // 返回下降点
      }
      if (arr[i] > maxValue) {
        maxIndex = i
      }
    }
  }
  return maxIndex // 返回最大值
}

console.log(removeKdigits('1111111', 3))

