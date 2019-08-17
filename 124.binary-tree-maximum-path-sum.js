/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (30.19%)
 * Likes:    1843
 * Dislikes: 138
 * Total Accepted:    212.2K
 * Total Submissions: 692.8K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the
 * root.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 * 
 * Output: 6
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-10,9,20,null,null,15,7]
 * 
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 * 
 * Output: 42
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
 * @return {number}
 */
// https://blog.csdn.net/u014626513/article/details/81203164
var maxPathSum = function(root) {
  let result = {
    val: Number.MIN_SAFE_INTEGER
  }
  maxPathSumCore(root, result)
  return result.val
};

function maxPathSumCore (root, result) {
  if (root === null) {
    return 0
  }
  let leftSubTreeMaxSum = Math.max(0, maxPathSumCore(root.left, result))
  let rightSubTreeMaxSum = Math.max(0, maxPathSumCore(root.right, result))
  // 以当前节点为根算最大路径值
  result.val = Math.max(root.val + leftSubTreeMaxSum + rightSubTreeMaxSum, result.val)
  // 返回的是左子树或者右子树的最大路径值
  // 不直接使用返回值，而是使用result.val来算最大值
  // 返回值只用于递归
  // 新的思路
  return Math.max(leftSubTreeMaxSum + root.val, rightSubTreeMaxSum + root.val)
}

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let a = new TreeNode(-3)
// let max = maxPathSum(a)
// console.log(max)
