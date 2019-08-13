/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (49.31%)
 * Likes:    1677
 * Dislikes: 44
 * Total Accepted:    412.9K
 * Total Submissions: 832.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
 * @return {number[][]}
 */
// https://blog.csdn.net/yuejisuo1948/article/details/84349084
var levelOrder = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  let queue = [root]
  while (queue.length !== 0) {
    let tempResult = []
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let current = queue.shift()
      if (current !== null) {
        tempResult.push(current.val)
        queue.push(current.left)
        queue.push(current.right)
      }
    }
    if (tempResult.length > 0) {
      result.push(tempResult)
    }
  }
  return result
};

// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(3)
// a.left = new TreeNode(9)
// a.right = new TreeNode(20)
// a.right.left = new TreeNode(15)
// a.right.right = new TreeNode(7)

// console.log(levelOrder(a))
