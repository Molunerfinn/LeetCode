/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 *
 * https://leetcode.com/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (36.34%)
 * Likes:    459
 * Dislikes: 183
 * Total Accepted:    129K
 * Total Submissions: 354.9K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and
 * T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to
 * identify repeated sequences within the DNA.
 * 
 * Write a function to find all the 10-letter-long sequences (substrings) that
 * occur more than once in a DNA molecule.
 * 
 * Example:
 * 
 * 
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) {
    return []
  }
  let tempArr = new Set()
  let result = new Set()
  let start = 0
  let length = s.length
  for (let i = start; i <= length - 10; i++) {
    let tempStr = s.substring(i, i + 10)
    // 如果临时数组里有，说明已经出现过
    // 就加到result里
    // 同时result也是个set，保证了不会重复
    if (tempArr.has(tempStr)) {
      result.add(tempStr)
    } else {
      tempArr.add(tempStr)
    }
  }
  return [...result]
};
