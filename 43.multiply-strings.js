/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (30.18%)
 * Total Accepted:    189.7K
 * Total Submissions: 628.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return '0'
  }
  let result = []
  let carry = 0
  for (let i = num2.length - 1; i >= 0; i--) {
    result.push(bigMultiply(num1, num2[i], carry))
    carry++
  }
  return result.reduce((a,b) => {
    let tempResult = bigAdd(a,b)
    return tempResult
  }, '0')
};

function bigMultiply (num1, num2, carry) {
  let length = num1.length
  let result = []
  let carryNum = 0
  for (let i = length - 1; i >= 0; i--) {
    let tempResult = num1[i] * num2 + carryNum
    carryNum = Math.floor(tempResult / 10)
    tempResult = (tempResult - carryNum * 10) + ''
    result.push(tempResult)
    if (i === 0) {
      if (carryNum > 0) {
        result.push(carryNum + '')
      }
    }
  }
  result = result.reverse()
  for (let i = 0; i < carry; i++) {
    result.push('0')
  }
  return result.join('')
}

function bigAdd (num1, num2) {
  let carry = 0
  let result = []
  let length1 = num1.length
  let length2 = num2.length
  let length = length1 > length2 ? length1 : length2
  for (let i = 1; i <= length; i++) {
    let tempResult = parseInt(num1[length1 - i] || 0) + parseInt(num2[length2 - i] || 0) + carry
    carry = Math.floor(tempResult / 10)
    result.push((tempResult - carry * 10) + '')
    if (i === 0) {
      if (carry > 0) {
        result.push(carry + '')
      }
    }
  }
  if (carry === 1) {
    result.push(1)
  }
  result = result.reverse().join('')
  return result
}

// console.log(multiply("123456789", "987654321"))
