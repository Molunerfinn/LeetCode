/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0
  }
  let firstBuy = -prices[0]
  let firstSell = 0
  let secondBuy = -prices[0] // 买入后卖出再买入
  let secondSell = 0 // secondBuy后再卖出
  let length = prices.length
  for (let i = 1; i < length; i++) {
    let preFirstBuy = firstBuy
    let preFirstSell = firstSell
    let preSecondBuy = secondBuy
    let preSecondSell = secondSell

    // 之前就买了，或者是现在才买
    firstBuy = Math.max(preFirstBuy, -prices[i])
    // 之前就卖了，或者是现在才卖
    firstSell = Math.max(preFirstSell, preFirstBuy + prices[i])
    // 之前买过第二次了，或者是现在才买第二次。买第二次必须是第一次卖出才能买
    secondBuy = Math.max(preSecondBuy, firstSell - prices[i])
    // 之前就卖过第二次了，或者是现在才卖第二次。卖第二次必须先买第二次
    secondSell = Math.max(preSecondSell, preSecondBuy + prices[i])
  }

  return secondSell
};

