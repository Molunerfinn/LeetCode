/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (30.77%)
 * Likes:    2244
 * Dislikes: 156
 * Total Accepted:    236.1K
 * Total Submissions: 767.3K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * Example:
 * 
 * 
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * 
 * 
 * Note:
 * 
 * 
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length || t.length === 0) {
    return ""
  }
  // 以hash存下T里的字符出现的次数
  let hash = {}
  // 当前匹配T字符串的时候还差几个字符
  let remain = t.length
  for (let i = 0; i < t.length; i++) {
    hash[t[i]] === undefined ? hash[t[i]] = 1 : hash[t[i]]++
  }
  let start = 0
  let end = 0
  let match = Number.MAX_SAFE_INTEGER
  let findStart = -1
  let findEnd = -1

  // 遍历一遍，从0 -> length
  while (end < s.length) {
    let str = s[end]
    // 如果遍历到T里的字符
    if (hash[str] !== undefined) {
      // 次数减一
      hash[str]--
      // 如果次数大于等于0，说明匹配T里的成功
      if (hash[str] >= 0) {
        // remain--
        remain--
      }
    }
    // 当remain为0说明已经匹配完一次了
    // 此时尝试将start右移，找出更小的
    while (remain === 0 && start <= end) {
      // 如果比当前匹配长度更短
      // 就更新
      if (end - start + 1 < match) {
        findStart = start
        findEnd = end
        match = end - start + 1
      }
      let str = s[start]
      // 如果当前start的字符在T里出现
      if (hash[str] !== undefined) {
        // 如果当前hash里次数为0
        // 如果为负数，说明S里重复匹配了
        // 说明start增加后，remain应该变多了
        if (hash[str] === 0) {
          remain++
        }
        hash[str]++
      }
      // 更新start
      start++
    }
    end++
  }
  return match === Number.MAX_SAFE_INTEGER ? '' : s.slice(findStart, findEnd + 1)
};
