/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sum = 0
  let total = 0
  let start = 0
  let length = gas.length

  // 如果当前剩余的gas减去当前的花费小于0
  // 说明从起点到当前点的任何一个点都不能作为起点
  // 因为到当前点的时候sum是小于0的
  // 所以把起点设成下一个点，sum重置为0
  for (let i = 0; i < length; i++) {
    sum += gas[i] - cost[i]
    total += gas[i] - cost[i]
    if (sum < 0) {
      start = i + 1
      sum = 0
    }
  }
  // 如果total小于0说明肯定到不了
  if (total < 0) {
    return -1
  } else {
    return start
  }
};

