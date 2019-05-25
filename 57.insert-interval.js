/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (31.00%)
 * Likes:    802
 * Dislikes: 98
 * Total Accepted:    176.3K
 * Total Submissions: 565K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = []
  if (intervals.length === 0 && newInterval.length === 0) {
    return []
  }
  if (intervals[0] !== undefined && intervals[0][0] >= newInterval[0]) {
    intervals.splice(0, 0, newInterval)
  } else {
    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][0] <= newInterval[0] && intervals[i + 1][0] >= newInterval[0]) {
        intervals.splice(i + 1, 0, newInterval)
        break
      } else if (i === intervals.length - 1) {
        intervals.push(newInterval)
      }
    }
  }
  intervals.push(newInterval)
  // intervals = intervals.sort((a, b) => a[0] - b[0])
  let length = intervals.length
  let tempStart = intervals[0][0]
  let tempEnd = intervals[0][1]
  
  for (let i = 1; i < length; i++) {
    let currentStart = intervals[i][0]
    let currentEnd = intervals[i][1]
    if (currentStart > tempEnd) {
      result.push([tempStart, tempEnd])
      tempStart = currentStart
      tempEnd = currentEnd
      if (i === length - 1) {
        result.push(intervals[i])
      }
    } else {
      if (currentEnd > tempEnd) {
        tempEnd = currentEnd
      }
      if (i === length - 1) {
        result.push([tempStart, tempEnd])
      }
    }
  }
  if (result.length === 0) {
    result.push(intervals[0])
  }
  return result
};

