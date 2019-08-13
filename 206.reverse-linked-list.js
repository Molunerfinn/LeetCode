/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (55.79%)
 * Likes:    2630
 * Dislikes: 69
 * Total Accepted:    648.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
    return null
  }
  if (head.next === null) {
    return head
  }

  let p = head.next
  let r = reverseList(p)
  p.next = head
  head.next = null
  return r
};

// const ListNode = require('./ListNode')

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)

// let result = reverseList(a)

// console.log(result)
