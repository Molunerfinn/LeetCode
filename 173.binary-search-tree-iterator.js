/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 *
 * https://leetcode.com/problems/binary-search-tree-iterator/description/
 *
 * algorithms
 * Medium (48.98%)
 * Likes:    1531
 * Dislikes: 251
 * Total Accepted:    220K
 * Total Submissions: 440.9K
 * Testcase Example:  '["BSTIterator","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]\n[[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null]]'
 *
 * Implement an iterator over a binary search tree (BST). Your iterator will be
 * initialized with the root node of a BST.
 * 
 * Calling next() will return the next smallest number in the BST.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * 
 * 
 * BSTIterator iterator = new BSTIterator(root);
 * iterator.next();    // return 3
 * iterator.next();    // return 7
 * iterator.hasNext(); // return true
 * iterator.next();    // return 9
 * iterator.hasNext(); // return true
 * iterator.next();    // return 15
 * iterator.hasNext(); // return true
 * iterator.next();    // return 20
 * iterator.hasNext(); // return false
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * next() and hasNext() should run in average O(1) time and uses O(h) memory,
 * where h is the height of the tree.
 * You may assume that next() call will always be valid, that is, there will be
 * at least a next smallest number in the BST when next() is called.
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
 */
var BSTIterator = function(root) {
  if (root === null) {
    this.length = 0
  }
  this.index = -1
  this.inorderList = []
  inorderTree(root, this.inorderList)
  this.length = this.inorderList.length
};

function inorderTree (root, res) {
  if (root === null) {
    return
  }
  inorderTree(root.left, res)
  res.push(root.val)
  inorderTree(root.right, res)
}


/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.index++
  return this.inorderList[this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  if (this.index < this.length - 1) {
    return true
  }
  return false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// const TreeNode = require('./utils/TreeNode')

// const a = new TreeNode(7)
// a.left = 3
// a.right = 15
// a.right.left = 9
// a.right.right = 20

// let iterator = new BSTIterator(a);
// iterator.next();    // return 3
// iterator.next();    // return 7
// iterator.hasNext(); // return true
// iterator.next();    // return 9
// iterator.hasNext(); // return true
// iterator.next();    // return 15
// iterator.hasNext(); // return true
// iterator.next();    // return 20
// iterator.hasNext(); // return false