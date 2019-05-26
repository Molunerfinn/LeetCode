/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (41.16%)
 * Likes:    380
 * Dislikes: 685
 * Total Accepted:    154.7K
 * Total Submissions: 373.5K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (s.length <= 1) {
    return s
  }
  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1
  }
  s = s.split('')
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (!vowels[s[start]]) {
      start++
    } else if (!vowels[s[end]]) {
      end--
    } else {
      swap(s, start, end)
      start++
      end--
    }
  }
  return s.join('')
};

const swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
