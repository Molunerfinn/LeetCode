/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.91%)
 * Likes:    893
 * Dislikes: 56
 * Total Accepted:    237.8K
 * Total Submissions: 658.3K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) {
    return head
  }
  while (head && head.val === val) {
    head = head.next
  }
  let pCurrent = head
  while (pCurrent !== null) {
    while (pCurrent && pCurrent.next && pCurrent.next.val === val) {
      pCurrent.next = pCurrent.next.next
    }
    pCurrent = pCurrent.next
  }
  return head
};
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(6)
// a.next.next.next = new ListNode(3)
// a.next.next.next.next = new ListNode(4)
// a.next.next.next.next.next = new ListNode(5)
// a.next.next.next.next.next.next = new ListNode(6)
// let b = removeElements(a, 1)
// console.log(b)
