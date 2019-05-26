/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (63.06%)
 * Likes:    748
 * Dislikes: 483
 * Total Accepted:    425.6K
 * Total Submissions: 672.7K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters char[].
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * You may assume all the characters consist of printable ascii
 * characters.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * 
 * 
 * 
 * 
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s.length <= 1) {
    return
  }
  let end = s.length - 1
  let start = 0
  while (start < end) {
    swap(s, start, end)
    start++
    end--
  }
  return s
};

const swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
