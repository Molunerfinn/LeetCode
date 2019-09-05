/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 *
 * https://leetcode.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (34.83%)
 * Likes:    923
 * Dislikes: 51
 * Total Accepted:    127.1K
 * Total Submissions: 357.1K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * 
 * Recover the tree without changing its structure.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * Output: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * Output: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 
 * Follow up:
 * 
 * 
 * A solution using O(n) space is pretty straight forward.
 * Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// const TreeNode = require('./utils/TreeNode')

// var minNode = new TreeNode(Number.MAX_SAFE_INTEGER)
var preNode = null
var firstNode = null
var secondNode = null

function swap (leftNode, rightNode) {
  var temp = leftNode.val
  leftNode.val = rightNode.val
  rightNode.val = temp
}

// function recoverTreeCore (root) {
//   if (root === null) {
//     return
//   }
//   if (root.left) {
//     recoverTreeCore(root.left)
//   }
//   if (root.val < preNode.val) {
//     if (firstNode === null) {
//       firstNode = preNode
//     }
//     secondNode = root
//   }
//   preNode = root
//   if (root.right) {
//     recoverTreeCore(root.right)
//   }
// }

// function findMinNode (root) {
//   if (root === null) {
//     return
//   }
//   if (root.left) {
//     findMinNode(root.left)
//   }
//   if (root.val < minNode.val) {
//     minNode = root
//   }
//   if (root.right) {
//     findMinNode(root.right)
//   }
// }

function inOrder (root) {
  if (!root) {
    return
  }
  inOrder(root.left)
  if (!preNode) {
    preNode = root
  } else {
    // 找到位置错误的两个节点，记录下来
    if (preNode.val > root.val) {
      if (!firstNode) {
        firstNode = preNode
      }
      secondNode = root
    }
    preNode = root
  }
  inOrder(root.right)
}

var recoverTree = function(root) {
  // findMinNode(root)
  // preNode = minNode
  // recoverTreeCore(root)
  inOrder(root)
  swap(firstNode, secondNode)
  // console.log(root, 'firstNode', firstNode, 'secondNode', secondNode)
  // return root
};

// let a = new TreeNode(1)
// a.left = 3
// a.left.right = 2
// // a.right = 4
// // a.right.left = 2

// recoverTree(a)
// console.log(a)


