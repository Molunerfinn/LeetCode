/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (40.49%)
 * Total Accepted:    300.1K
 * Total Submissions: 741.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * 
 * a binary tree in which the depth of the two subtrees of every node never
 * differ by more than 1.
 * 
 * 
 * Example 1:
 * 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * Return true.
 * 
 * Example 2:
 * 
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * Return false.
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
 * @return {boolean}
 */
// https://blog.csdn.net/happyaaaaaaaaaaa/article/details/51107445
// 每一个节点计算左右子树深度
// 如果左右子树深度差大于1返回false
var isBalanced = function(root) {
  if (root === null) {
    return true
  }

  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)

  console.log(leftDepth, rightDepth)

  let diff = leftDepth - rightDepth
  if (diff < -1 || diff > 1) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
}

var getDepth = root => {
  if (root === null) {
    return 0
  }
  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)
  return leftDepth > rightDepth ? (1 + leftDepth) : (1 + rightDepth)
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a = new TreeNode(1)
a.left = new TreeNode(2)
a.right = new TreeNode(2)
a.left.left = new TreeNode(2)
a.left.right = new TreeNode(3)
a.left.left.left = new TreeNode(4)
a.left.left.right = new TreeNode(4)
a.left.left.left.left = new TreeNode(4)
a.right.left = new TreeNode(3)

console.log(isBalanced(a))
