/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (47.29%)
 * Total Accepted:    317.6K
 * Total Submissions: 671.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 回溯法
var combinationSum = function(candidates, target) {
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
      combinationCore(candidates, target, from, path, results, resultMap)
      path.pop()
    }
    target += candidates[i]
  }
}
console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15))
