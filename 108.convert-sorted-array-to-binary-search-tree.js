/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (49.52%)
 * Total Accepted:    243.1K
 * Total Submissions: 490.9K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums === null || nums.length === 0) {
    return null
  }
  return arrToBSTCore(nums, 0, nums.length - 1)
};

var arrToBSTCore = (arr, left, right) => {
  if (left < 0 || left > arr.length - 1 || right < 0 || left > right) {
    return null
  }
  let mid
  mid = Math.floor((right - left) / 2) + left
  let root = new TreeNode(arr[mid])
  root.left = arrToBSTCore(arr, left, mid - 1)
  root.right = arrToBSTCore(arr, mid + 1, right)
  return root
}

let result = sortedArrayToBST([-10,-3,0,5,9])

console.log(result)
