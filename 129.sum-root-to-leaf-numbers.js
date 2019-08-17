/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 *
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (42.75%)
 * Likes:    762
 * Dislikes: 29
 * Total Accepted:    196.4K
 * Total Submissions: 452.6K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path
 * could represent a number.
 * 
 * An example is the root-to-leaf path 1->2->3 which represents the number
 * 123.
 * 
 * Find the total sum of all root-to-leaf numbers.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * Output: 25
 * Explanation:
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * Therefore, sum = 12 + 13 = 25.
 * 
 * Example 2:
 * 
 * 
 * Input: [4,9,0,5,1]
 * ⁠   4
 * ⁠  / \
 * ⁠ 9   0
 * / \
 * 5   1
 * Output: 1026
 * Explanation:
 * The root-to-leaf path 4->9->5 represents the number 495.
 * The root-to-leaf path 4->9->1 represents the number 491.
 * The root-to-leaf path 4->0 represents the number 40.
 * Therefore, sum = 495 + 491 + 40 = 1026.
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
var sumNumbers = function(root) {
  if (root === null) {
    return 0
  }
  let result = []
  dfs(root, [], result)
  return result.reduce((pre, current) => {
    return pre + parseInt(current.join(''))
  }, 0)
};

function dfs (root, path, result) {
  if (root === null) {
    return
  }
  path.push(root.val)
  if (root.left === null && root.right === null) {
    result.push(path)
    return
  }
  dfs(root.left, path.slice(), result)
  dfs(root.right, path.slice(), result)
}

// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(4)
// a.left = new TreeNode(9)
// a.right = new TreeNode(0)
// a.left.left = new TreeNode(5)
// a.left.right = new TreeNode(1)

// console.log(sumNumbers(a))
