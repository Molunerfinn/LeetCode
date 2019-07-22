/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 *
 * https://leetcode.com/problems/expression-add-operators/description/
 *
 * algorithms
 * Hard (33.02%)
 * Likes:    734
 * Dislikes: 101
 * Total Accepted:    71.6K
 * Total Submissions: 216.5K
 * Testcase Example:  '"123"\n6'
 *
 * Given a string that contains only digits 0-9 and a target value, return all
 * possibilities to add binary operators (not unary) +, -, or * between the
 * digits so they evaluate to the target value.
 * 
 * Example 1:
 * 
 * 
 * Input: num = "123", target = 6
 * Output: ["1+2+3", "1*2*3"] 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: num = "232", target = 8
 * Output: ["2*3+2", "2+3*2"]
 * 
 * Example 3:
 * 
 * 
 * Input: num = "105", target = 5
 * Output: ["1*0+5","10-5"]
 * 
 * Example 4:
 * 
 * 
 * Input: num = "00", target = 0
 * Output: ["0+0", "0-0", "0*0"]
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: num = "3456237490", target = 9191
 * Output: []
 * 
 * 
 */
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
// https://www.cnblogs.com/grandyang/p/4814506.html
var addOperators = function(num, target) {
  if (num.length === 1 && num !== target) {
    return []
  }
  let res = []
  addOperatorsCore(num, res, '', target, 0, 0)
  return res
};

/**
 * 
 * @param {string} num 
 * @param {string[]} res 
 * @param {string} path 
 * @param {number} target 
 * @param {number} diff 
 * @param {number} currentSum 
 */
function addOperatorsCore (num, res, path, target, diff, currentSum) {
  if (num === '' && target === currentSum) {
    res.push(path)
    return
  }

  for (let i = 0; i < num.length; i++) {
    let currentNum = num.substr(0, i + 1)
    if (currentNum.length > 1 && currentNum[0] === '0') {
      // 防止出现'00'的情况
      return
    }
    let pCurrentNum = parseInt(currentNum)
    let nextNum = num.substr(i + 1)
    if (path.length > 0) {
      // 加
      addOperatorsCore(nextNum, res, `${path}+${currentNum}`, target, pCurrentNum, currentSum + pCurrentNum)
      // 减
      addOperatorsCore(nextNum, res, `${path}-${currentNum}`, target, -pCurrentNum, currentSum - pCurrentNum)
      // 乘
      // 举例 2 - 3 * 2
      // 当算到乘2时
      // 需要做的是计算当前的diff、当前的currentSum
      // 上一步的currentSum=-1，diff为-3，因此需要 (-1 - (-3)) + ((-3) * 2)，左边是还原，右边是计算当前的乘积
      addOperatorsCore(nextNum, res, `${path}*${currentNum}`, target, pCurrentNum * diff, currentSum - diff + pCurrentNum * diff)
    } else {
      // 第一个数
      // 它之前没有任何运算符,可以认为是+
      // diff也是currentNum
      // currentSum也是currentNum
      addOperatorsCore(nextNum, res, currentNum, target, pCurrentNum, pCurrentNum)
    }
  }
}
