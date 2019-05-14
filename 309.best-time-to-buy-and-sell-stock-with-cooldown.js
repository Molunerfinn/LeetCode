/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0
  }
  let buy = -prices[0] // 第一天买的话收益为-prices[0]
  let sell = Number.MIN_SAFE_INTEGER // 一开始无法卖出。
  let holdCooldown = Number.MIN_SAFE_INTEGER // 一开始没有持仓收益。【持仓等待】
  let unholdCooldown = 0 // 空仓收益为0 【空仓等待】
  
  let length = prices.length
  for (let i = 1; i < length; i++) {
    let preBuy = buy
    let preSell = sell
    let preHoldCooldown = holdCooldown
    let preUnholdCooldown = unholdCooldown
    // 只能 之前空仓等待 的情况下才能买
    buy = preUnholdCooldown - prices[i]
    // 昨天买了现在卖出，或者之前持仓现在卖出
    sell = Math.max(preBuy + prices[i], preHoldCooldown + prices[i])
    // 昨天买了或者之前持仓
    holdCooldown = Math.max(preBuy, preHoldCooldown)
    // 昨天卖了或者之前空仓
    unholdCooldown = Math.max(preSell, preUnholdCooldown)
    // console.log(i, 'buy',buy, 'sell', sell, 'hc', holdCooldown, 'unhc', unholdCooldown) 
  }
  return Math.max(sell, unholdCooldown) // 只有卖了或者空仓等待的情况下，才会有最高收益
};