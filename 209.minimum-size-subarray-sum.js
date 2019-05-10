/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) {
    return 0
  }
  let length = nums.length
  let result = 0
  let countArr = [] // 以i为底的数的最小子数组和
  let indexArr = [] // 以i为底的数的最小子数组的开始下标
  for (let i = 0; i < length; i++) {
    if (nums[i] >= s) {
      return 1
    }
    if (countArr[i - 1] === undefined) { // 说明i === 0
      countArr.push(nums[i])
      indexArr.push(i)
    } else {
      countArr.push(nums[i] + countArr[i - 1])
      indexArr.push(indexArr[i - 1])
      if (countArr[i] >= s) { // 如果当前数相加后>=s
        let preStart = indexArr[i - 1]
        let tempSum = countArr[i - 1] + nums[i]
        while (tempSum > s && preStart < i) {
          tempSum -= nums[preStart]
          preStart++
        }
        if (tempSum < s) { // 说明开始下标多移动了一位
          preStart--
          tempSum += nums[preStart] // 恢复回去
        }
        indexArr[i] = preStart
        countArr[i] = tempSum
        const diffIndex = i - indexArr[i] + 1
        if (((diffIndex < result) || result === 0)) {
          result = diffIndex
        }
      }
    }
  }
  return result
}
// var minSubArrayLen = function(s, nums) {
//   if (nums.length === 0) {
//     return 0
//   }
//   let length = nums.length
//   let result = 0
//   let countArr = [] // 以i为底的数的最小子数组和
//   let indexArr = [] // 以i为底的数的最小子数组前后下标
//   for (let i = 0; i < length; i++) {
//     if (nums[i] >= s) {
//       return 1
//     }
//     if (countArr[i - 1] === undefined) { // 说明i === 0
//       countArr[i] = nums[i]
//       indexArr.push([i, i])
//     } else {
//       if (countArr[i - 1] < s) { // 说明前面的数并没有加到>=s
//         if (countArr[i - 1] + nums[i] >= s) {// 如果和当前的数相加>=s
//           countArr[i] = nums[i] + countArr[i - 1]
//           indexArr.push([
//             indexArr[i - 1][0],
//             i
//           ])
//           const diffCount = indexArr[i][1] - indexArr[i][0] + 1
//           if (indexArr[i] !== 1 && ((diffCount < result) || result === 0)) {
//             result = diffCount
//           }
//         } else { // 如果当前的数相加依然小于s
//           countArr[i] = nums[i] + countArr[i - 1]
//           indexArr.push([
//             indexArr[i - 1][0],
//             i
//           ])
//         }
//       } else { // 说明前面的数已经加到>=s
//         // 此时要找一个新的开始下标来匹配到当前的i
//         console.log(indexArr, i)
//         let preStart = indexArr[i - 1][0]
//         let tempCount = countArr[i - 1] + nums[i]
//         while (tempCount > s && preStart < i) {
//           tempCount -= nums[preStart]
//           preStart++
//         }
//         if (tempCount < s) { // 如果开始下标多移了一位
//           preStart--
//           tempCount += nums[preStart] // 恢复回去
//         }
//         indexArr.push([
//           preStart,
//           i
//         ])
//         countArr[i] = tempCount
//         const diffCount = indexArr[i][1] - indexArr[i][0] + 1
//         if (indexArr[i] !== 1 && ((diffCount < result) || result === 0)) {
//           result = diffCount
//         }
//       }
//     }
//   }
//   return result
// };
