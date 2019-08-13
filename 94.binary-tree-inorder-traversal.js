/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (57.54%)
 * Likes:    1817
 * Dislikes: 77
 * Total Accepted:    503.6K
 * Total Submissions: 870.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,3,2]
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
var inorderTraversal = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  // inorderTraversalCore(root, result)
  let stack = []
  while (stack.length !== 0 || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right // 假如当前是根，那么下一个要访问的就是右子树
  }
  return result
};

// function inorderTraversalCore (root, res) {
//   if (root === null) {
//     return null
//   }

//   inorderTraversalCore(root.left, res)
//   res.push(root.val)
//   inorderTraversalCore(root.right, res)
// }

// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(1)
// a.right = new TreeNode(2)
// a.right.left = new TreeNode(3)
// a.left = new TreeNode(2)
// a.right = new TreeNode(3)
// a.left.left = new TreeNode(4)
// a.left.right = new TreeNode(5)
// a.left.left.left = new TreeNode(6)
// a.left.left.right = new TreeNode(7)

// console.log(inorderTraversal(a))
