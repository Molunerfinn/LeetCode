/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (49.35%)
 * Likes:    1014
 * Dislikes: 52
 * Total Accepted:    279K
 * Total Submissions: 561.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the postorder traversal of its nodes' values.
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
 * Output: [3,2,1]
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
// https://blog.csdn.net/qq508618087/article/details/50503911
var postorderTraversal = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  // postorderTraversalCore(root, result)
  let stack = [root]
  while (stack.length !== 0) {
    let current = stack.pop()
    if (current !== null) {
      result.push(current.val)
      stack.push(current.left)
      stack.push(current.right)
    }
  }
  // 类似前序遍历，构造后序遍历的逆序列，然后反转即可
  result = result.reverse()
  return result
};

// function postorderTraversalCore (root, res) {
//   if (root === null) {
//     return null
//   }
//   postorderTraversalCore(root.left, res)
//   postorderTraversalCore(root.right, res)
//   res.push(root.val)
// }

// const TreeNode = require('./utils/TreeNode')
// let a = new TreeNode(1)
// a.right = new TreeNode(2)
// a.right.left = new TreeNode(3)

// console.log(postorderTraversal(a))
