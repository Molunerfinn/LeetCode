/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (34.93%)
 * Total Accepted:    278.6K
 * Total Submissions: 797.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
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
 * return its minimum depth = 2.
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
var minDepth = function(root) {
  if (root === null) {
    return 0
  }
  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)

  if (leftDepth === 0) {
    return (rightDepth + 1)
  } else if (rightDepth === 0) {
    return (leftDepth + 1)
  }

  return leftDepth < rightDepth ? (leftDepth + 1) : (rightDepth + 1)
};

const getDepth = (root) => {
  if (root === null) {
    return 0
  }
  let left = getDepth(root.left)
  let right = getDepth(root.right)
  if (left === 0) {
    return (right + 1)
  } else if (right === 0) {
    return (left + 1)
  }
  return left < right ? (left + 1) : (right + 1)
}
