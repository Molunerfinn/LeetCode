/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  if (n === 0) {
    return '0'
  }
  let { list, index } = factorialList(n)
  let result = ''

  k--
  for (let i = n - 1; i >= 0; i--) {
    let idx = Math.floor(k / list[i])
    result += `${index[idx]}`
    index.splice(idx, 1)
    k %= list[i]
  }

  return result
};

var factorialList = (n) =>{
  let list = [1]
  let index= [1]
  for (let i = 1; i < n; i++) {
    list.push(i * list[i - 1])
    index.push(i + 1)
  }
  return {
    list,
    index
  }
}

