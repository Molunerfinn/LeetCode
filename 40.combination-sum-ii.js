/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (40.61%)
 * Total Accepted:    207.7K
 * Total Submissions: 511.2K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  let results = []
  let path = []
  let resultMap = new Map()
  candidates = candidates.sort((a, b) => a - b)
  combinationCore(candidates, target, 0, path, results, resultMap)
  return results
};

function combinationCore (candidates, target, from, path, results, resultMap) {
  if (target === 0) {
    let tempPath = path.slice().sort((a, b) => a - b)
    if (!resultMap.get(tempPath.toString())) {
      resultMap.set(tempPath.toString(), true)
      return results.push(path.slice())
    }
    return
  }
  for (let i = from; i < candidates.length; i++) {
    if (candidates[i] > target) {
      return
    }
    target = target - candidates[i]
    if (target >= 0) {
      path.push(candidates[i])
      combinationCore(candidates, target, i + 1, path, results, resultMap)
      path.pop()
    }
    target += candidates[i]
  }
}

console.log(combinationSum2([1,2], 4))
