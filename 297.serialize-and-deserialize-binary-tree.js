/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 *
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (41.24%)
 * Likes:    1826
 * Dislikes: 90
 * Total Accepted:    212.1K
 * Total Submissions: 500.7K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 * 
 * Example: 
 * 
 * 
 * You may serialize the following tree:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠    / \
 * ⁠   4   5
 * 
 * as "[1,2,3,null,null,4,5]"
 * 
 * 
 * Clarification: The above format is the same as how LeetCode serializes a
 * binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.
 * 
 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// https://blog.csdn.net/fuxuemingzhu/article/details/79571892
// 前序遍历转string
var serialize = function(root) {
  if (root === null) {
    return '[]'
  }
  let res = []
  preOrder(root, res)
  return JSON.stringify(res)
};

function preOrder (root, res) {
  if (root === null) {
    res.push(null)
    return
  }
  res.push(root.val)
  preOrder(root.left, res)
  preOrder(root.right, res)
}

// function BFS (root) {
//   let queue = [root]
//   let res = []
//   while (queue.length !== 0) {
//     let top = queue.shift()
//     if (top !== null) {
//       res.push(top.val)
//       queue.push(top.left)
//       queue.push(top.right)
//     } else {
//       if (queue.every(item => item === null)) {
//         break
//       } else {
//         res.push(null)
//       }
//     }
//   }
//   return res
// }


// const TreeNode = require('./utils/TreeNode')

// let a = new TreeNode(1)
// a.left = 2
// a.right = 3
// a.right.left = 4
// a.right.right = 5

// // console.log(serialize(a))
// let str = serialize(a)
// console.log(str)


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let res = JSON.parse(data)
  if (res.length === 0) {
    return null
  }
  let root = new TreeNode(res.shift())
  root.left = rebuild(res)
  root.right = rebuild(res)
  return root
};

// 还原前序遍历
function rebuild (res) {
  let top = res.shift()
  if (top === null) {
    return null
  }
  let root = new TreeNode(top)
  root.left = rebuild(res)
  root.right = rebuild(res)
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


// let result = deserialize(str)
// console.log(result)