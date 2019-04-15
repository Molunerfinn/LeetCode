/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.33%)
 * Total Accepted:    329.2K
 * Total Submissions: 931.9K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let result = []
  if (intervals.length === 0) {
    return []
  }
  intervals = intervals.sort((a, b) => a.start - b.start)
  let length = intervals.length
  let tempStart = intervals[0].start
  let tempEnd = intervals[0].end
  
  for (let i = 1; i < length; i++) {
    let currentStart = intervals[i].start
    let currentEnd = intervals[i].end
    if (currentStart > tempEnd) {
      result.push(new Interval(tempStart, tempEnd))
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
        result.push(new Interval(tempStart, tempEnd))
      }
    }
  }
  if (result.length === 0) {
    result.push(intervals[0])
  }
  return result
};
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
