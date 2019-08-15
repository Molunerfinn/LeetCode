/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (37.18%)
 * Total Accepted:    292.3K
 * Total Submissions: 786.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
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
 * ⁠/  \      \
 * 7    2      1
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @return {boolean}
 */
// https://blog.csdn.net/MebiuW/article/details/52650071
var hasPathSum = function(root, sum) {
  return dfs(root, sum)
};

function dfs (root, sum) {
  if (root === null) {
    return false
  }
  sum -= root.val
  if (root.left === null && root.right === null) {
    return sum === 0
  }
  return dfs(root.left, sum) || dfs(root.right, sum)
}

// var hasPathSumCore = (root, sum, stack) => {
//   if (root.left === null && root.right === null) { // leaf node
//     let count = stack.reduce((a, b) => (a + b.val), 0) + root.val
//     if (count === sum) {
//       return true
//     } else {
//       return false
//     }
//   } else { // tree node
//     stack.push(root)
//     let result = false
//     if (root.left) {
//       result = hasPathSumCore(root.left, sum, stack)
//     }
//     if (!result && root.right) {
//       result = hasPathSumCore(root.right, sum, stack)
//     }
//     if (!result) {
//       stack.pop()
//       return false
//     }
//     return result
//   }
// }
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let a = new TreeNode(5)
// a.left = new TreeNode(4)
// a.right = new TreeNode(8)
// a.left.left = new TreeNode(11)
// a.right.left = new TreeNode(13)
// a.right.right = new TreeNode(4)
// a.left.left.left = new TreeNode(7)
// a.left.left.right = new TreeNode(2)
// a.right.right.right = new TreeNode(1)

// console.log(hasPathSum(a, 22))
