/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (51.97%)
 * Likes:    870
 * Dislikes: 43
 * Total Accepted:    363.1K
 * Total Submissions: 695.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,2,3]
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  // let stack = [root]
  // while (stack.length !== 0) {
  //   let current = stack.pop()
  //   if (current !== null && current !== undefined) {
  //     result.push(current.val)
  //     stack.push(current.right)
  //     stack.push(current.left)
  //   }
  // }
  // return result
  preorderCore(root, result)
  return result
};

function preorderCore (root, res) {
  if (root === null) {
    return null
  }
  res.push(root.val)
  preorderCore(root.left, res)
  preorderCore(root.right, res)
}


// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(1)
// a.left = new TreeNode(2)
// a.left.right = new TreeNode(3)

// console.log(preorderTraversal(a))
