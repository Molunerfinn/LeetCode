/*
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (43.22%)
 * Total Accepted:    176.3K
 * Total Submissions: 408K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
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
var levelOrderBottom = function(root) {
  if (root === null || root.val === null) {
    return []
  }
  let currentNode = [root]
  let result = []
  let nextLevel = 0
  let currentRemain = 1
  let currentLevel = []

  while (currentNode.length !== 0) {
    let item = currentNode.shift()
    currentRemain--
    currentLevel.push(item.val)
    if (item.left) {
      currentNode.push(item.left)
      nextLevel++
    }
    if (item.right) {
      currentNode.push(item.right)
      nextLevel++
    }
    if (currentRemain === 0) {
      result.push(currentLevel)
      currentRemain = nextLevel
      nextLevel = 0
      currentLevel = []
    }
  }
  return result.reverse()
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(1)
a.left = new TreeNode(2)
a.right = new TreeNode(3)
a.left.left = new TreeNode(4)
a.left.right = new TreeNode(5)

console.log(levelOrderBottom(a))
