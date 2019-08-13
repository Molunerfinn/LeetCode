/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (46.60%)
 * Likes:    973
 * Dislikes: 73
 * Total Accepted:    239.7K
 * Total Submissions: 511.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  binaryTreePathsCore(root, [root], result)
  return result
};

function binaryTreePathsCore (root, path, result) {
  if (root.left === null && root.right === null) {
    let resultPath = path.map(item => item.val).join('->')
    result.push(resultPath)
    return
  }
  if (root.left !== null) {
    path.push(root.left)
    binaryTreePathsCore(root.left, path, result)
    path.pop()
  }
  if (root.right !== null) {
    path.push(root.right)
    binaryTreePathsCore(root.right, path, result)
    path.pop()
  }
}

// const TreeNode = require('./utils/TreeNode')

// const a = new TreeNode(1)

// a.left = new TreeNode(2)
// a.left.right = new TreeNode(5)
// a.right = new TreeNode(3)

// console.log(binaryTreePaths(a))
