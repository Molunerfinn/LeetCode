/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (41.15%)
 * Likes:    1154
 * Dislikes: 70
 * Total Accepted:    187.3K
 * Total Submissions: 446.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted linked list: [-10,-3,0,5,9],
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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// https://blog.csdn.net/MebiuW/article/details/52626773
var sortedListToBST = function(head) {
  if (head === null) {
    return null
  }
  return sortedListToBSTCore(head, null)
};

function sortedListToBSTCore (head, tail) {
  if (head === tail) {
    return null
  }
  // 快慢指针
  // 找到中点
  // 然后递归
  let fast = head
  let slow = head
  while (fast !== tail) {
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
      slow = slow.next
    }
  }
  let root = new TreeNode(slow.val)
  root.left = sortedListToBSTCore(head, slow)
  root.right = sortedListToBSTCore(slow.next, tail)
  return root
}
