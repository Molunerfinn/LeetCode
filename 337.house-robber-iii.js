/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 *
 * https://leetcode.com/problems/house-robber-iii/description/
 *
 * algorithms
 * Medium (48.23%)
 * Likes:    1684
 * Dislikes: 35
 * Total Accepted:    111.8K
 * Total Submissions: 229.8K
 * Testcase Example:  '[3,2,3,null,3,null,1]'
 *
 * The thief has found himself a new place for his thievery again. There is
 * only one entrance to this area, called the "root." Besides the root, each
 * house has one and only one parent house. After a tour, the smart thief
 * realized that "all houses in this place forms a binary tree". It will
 * automatically contact the police if two directly-linked houses were broken
 * into on the same night.
 * 
 * Determine the maximum amount of money the thief can rob tonight without
 * alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3,null,3,null,1]
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  2   3
 * ⁠   \   \ 
 * ⁠    3   1
 * 
 * Output: 7 
 * Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,5,1,3,null,1]
 * 
 * 3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \   \ 
 * ⁠1   3   1
 * 
 * Output: 9
 * Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// https://blog.csdn.net/happyaaaaaaaaaaa/article/details/50880121
var rob = function(root) {
  return dfs(root)[1]
};

function dfs (root) {
  // rob[0]存储的是从叶子节点到当前节点的左右孩子层节点抢劫到的最大值：
  // rob[1]存储的是从叶子节点到当前节点抢劫的最大值，
  let robSum = [0, 0]
  if (root !== null) {
    let leftChildRobSum = dfs(root.left)
    let rightChildRobSum = dfs(root.right)
    // current - children - grandchildren
    // 当前最大值等于
    // Math.max(current + grandchildren, children)
    robSum[0] = leftChildRobSum[1] + rightChildRobSum[1]
    robSum[1] = Math.max(root.val + leftChildRobSum[0] + rightChildRobSum[0], robSum[0])
  }
  return robSum
}
