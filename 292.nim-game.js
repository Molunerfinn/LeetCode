/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 *
 * https://leetcode.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (55.71%)
 * Likes:    386
 * Dislikes: 1175
 * Total Accepted:    187.2K
 * Total Submissions: 336K
 * Testcase Example:  '4'
 *
 * You are playing the following Nim Game with your friend: There is a heap of
 * stones on the table, each time one of you take turns to remove 1 to 3
 * stones. The one who removes the last stone will be the winner. You will take
 * the first turn to remove the stones.
 * 
 * Both of you are very clever and have optimal strategies for the game. Write
 * a function to determine whether you can win the game given the number of
 * stones in the heap.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: false 
 * Explanation: If there are 4 stones in the heap, then you will never win the
 * game;
 * No matter 1, 2, or 3 stones you remove, the last stone will always
 * be 
 * removed by your friend.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 只要大于等于4，并且 mod 4 等于0的话，怎么都赢不了
  // 因为最后轮到我时总能被减到只剩4
  // 举例，如果是8，我不管是1~3任何一个数，对方总能找到一个数使轮到我时为4
  // 同理，如果是12，对方总可以让轮到我时到8，所以回到上一步
  if (n >= 4 && n % 4 === 0) {
    return false
  } else {
    return true
  }
  // if (n > 4) {
  //   // 会超时
  //   return canWinNim(n - 1) || canWinNim(n - 2) || canWinNim(n - 3)
  // }
};
