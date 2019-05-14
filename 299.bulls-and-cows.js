/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0
  let cows = 0
  let hits = new Array(10).fill(0) // 数字只从0-9
  let hitMap = {}
  let length = secret.length
  for (let i = 0; i < length; i++) {
    hits[secret[i]] += 1 // 记录当前数字出现次数
    if (secret[i] === guess[i]) {
      bulls += 1 // 如果位置和value都一样，就是bull
      hits[secret[i]] -= 1
      hitMap[i] = true // 记录当前下标为bull
    }
  }
  for (let i = 0; i < length; i++) {
    if (hits[guess[i]] > 0) {
      if (!hitMap[i]) { // 如果是非bull，才算cow
        cows += 1
        hits[guess[i]] -= 1
      }
    }
  }
  return `${bulls}A${cows}B`
};