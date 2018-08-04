/*
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (56.26%)
 * Total Accepted:    362.1K
 * Total Submissions: 643.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * return its depth = 3.
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
var maxDepth = function(root) {
  if (root === null || root.val === null) return 0
  if (root.left === null && root.right === null) return 1

  return 1 + depth(root.left, root.right)

  function depth (left, right) {
    if (left === null && right === null) {
      return 0
    } else if (left !== null && right !== null) {
      return 1 + Math.max(depth(left.left, left.right), depth(right.left, right.right))
    } else if (left !== null) {
      return 1 + depth(left.left, left.right)
    } else if (right !== null) {
      return 1 + depth(right.left, right.right)
    }
  }
};
