/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let total = 0
  let length = ratings.length
  let prev = 1
  let resultArr = []
  // 第一遍循环，根据前后的关系做增改。
  // 比如123，递增的就需要不断的加1
  // 但是会遇到123321这种情况，第二个3实际上也是要发3个糖，因为受到后面递减的影响
  // 所以需要从头遍历一次，再从尾遍历回头
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      if (ratings[0] > ratings[1]) {
        prev = 2
      }
    } else {
      if (ratings[i] > ratings[i - 1]) {
        prev += 1
      } else {
        if (ratings[i] > ratings[i + 1]) {
          prev = 2
        } else {
          prev = 1
        }
      }
    }
    resultArr.push(prev)
  }
  // 第二遍遍历，从尾到头
  for (let i = length - 1; i >= 0; i--) {
    if (i === length - 1) {
      if (ratings[i] > ratings[i - 1]) {
        prev = 2
      }
    } else {
      if (ratings[i] > ratings[i + 1]) {
        prev += 1
      } else {
        if (ratings[i] > ratings[i - 1]) {
          prev = 2
        } else {
          prev = 1
        }
      }
    }
    // 找到比原本的该位置上给的糖更多的，就替换掉
    // 用于应对0-n的时候的递减序列，这样从尾到头遍历又是递增序列了
    if (resultArr[i] < prev) {
      resultArr[i] = prev
    }
  }
  resultArr.forEach(item => {
    total += item
  })
  return total
};

