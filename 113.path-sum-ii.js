/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (41.42%)
 * Likes:    1005
 * Dislikes: 36
 * Total Accepted:    248.4K
 * Total Submissions: 595.4K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 * 
 * 
 * Return:
 * 
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
 * 
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) {
    return []
  }
  let stack = []
  let result = []
  dfs(root, sum, stack, result)
  return result
};

function dfs (root, sum, stack, result) {
  if (root === null) {
    return
  }
  sum -= root.val
  if (sum === 0) {
    if (root.left === null && root.right === null) {
      stack.push(root.val)
      result.push(stack.slice())
    }
    // return
  }
  stack.push(root.val)
  dfs(root.left, sum, stack.slice(), result)
  dfs(root.right, sum, stack.slice(), result)
  stack.pop()
}

// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(1)
// a.left = new TreeNode(-2)
// a.right = new TreeNode(-3)
// a.left.left = new TreeNode(1)
// a.left.left.left = new TreeNode(-1)
// a.left.right = new TreeNode(3)
// a.right.left = new TreeNode(-2)
// a.right.right = new TreeNode(4)
// a.left.left.left = new TreeNode(7)
// a.left.left.right = new TreeNode(2)
// a.right.right.right = new TreeNode(1)
// a.right.right.left = new TreeNode(5)

// console.log(pathSum(a, -1))
