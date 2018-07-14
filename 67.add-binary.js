/*
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (34.93%)
 * Total Accepted:    214.8K
 * Total Submissions: 615K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aArr = a.split('').map(item => parseInt(item))
  let bArr = b.split('').map(item => parseInt(item))

  if (aArr.length >= bArr.length) {
    return plus(aArr, bArr)
  } else {
    return plus(bArr, aArr)
  }

  function plus(tempA, tempB) {
    let flag = false
    let length = tempA.length
    let diff = length - tempB.length
    for (let i = length - 1; i >= 0; i--) {
      let val = ''
      let temp = ''
      if (i - diff < 0) {
        val = 0
      } else {
        val = tempB[i - diff]
      }

      if (flag) {
        tempA[i] = val + tempA[i] + 1
      } else {
        tempA[i] = val + tempA[i]
      }

      if (tempA[i] === 2) {
        tempA[i] = 0
        flag = true
      } else if (tempA[i] === 3) {
        tempA[i] = 1
        flag = true
      } else {
        flag = false
      }
    }
    if (flag) {
      tempA.unshift(1)
    }
    return tempA.join('')
  }
};
