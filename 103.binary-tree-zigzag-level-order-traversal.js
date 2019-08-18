/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (42.05%)
 * Likes:    1118
 * Dislikes: 65
 * Total Accepted:    241.4K
 * Total Submissions: 564.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
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
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  let queue = [root]
  let direction = 'right' // from right -> left
  while (queue.length !== 0) {
    let currentLength = queue.length
    let stepResult = []
    while (currentLength !== 0) {
      if (direction === 'right') {
        let current = queue.shift()
        stepResult.push(current.val)
        if (current.left) {
          queue.push(current.left)
        }
        if (current.right) {
          queue.push(current.right)
        }
      } else {
        let current = queue.pop()
        stepResult.push(current.val)
        if (current.right) {
          queue.unshift(current.right)
        }
        if (current.left) {
          queue.unshift(current.left)
        }
      }
      currentLength--
    }
    direction = (direction === 'right' ? 'left' : 'right')
    result.push(stepResult)
  }
  return result
};

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let a = new TreeNode(3)
// a.left = new TreeNode(9)
// a.right = new TreeNode(20)
// a.right.left = new TreeNode(15)
// a.right.right = new TreeNode(7)

// console.log(zigzagLevelOrder(a))
