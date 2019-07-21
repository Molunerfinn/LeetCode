/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (31.68%)
 * Likes:    707
 * Dislikes: 293
 * Total Accepted:    145.3K
 * Total Submissions: 455.4K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) {
    return []
  }
  let res = []
  restoreIpAddressCore(s, res, 0, [])
  return res.map(item => item.join('.'))
};

/**
 * 
 * @param {string} s 
 * @param {string[][]} res 
 * @param {number} start 
 * @param {string[]} path 
 */
function restoreIpAddressCore (s, res, start, path) {
  if (path.length === 4 && (calcLength(path) === s.length)) {
    res.push(path.slice())
    return
  }
  // 如果以0作为起始
  // 那么只能以0作为当前位
  if (s[start] === '0') {
    path.push(s[start])
    restoreIpAddressCore(s, res, start + 1, path)
    path.pop()
    return
  }
  for (let j = 1; j <= 3; j++) {
    // 如果start已经超过字符串长度
    // 或者start+j超过字符串长度（会重复截取）
    // 就break
    if (j + start >= (s.length + 1) || start >= s.length) {
      break
    } else {
      // 否则截取
      tempStr = s.substr(start, j)
      // 再判断是否小于255
      if (tempStr <= 255) {
        // 回溯
        path.push(tempStr)
        restoreIpAddressCore(s, res, start + j, path)
        path.pop()
      } else {
        break
      }
    }
  }
}

function calcLength (arr) {
  let length = arr.reduce((pre, current) => {
    return pre + current.length
  }, 0)
  return length
}
