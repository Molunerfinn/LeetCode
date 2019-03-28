/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.08%)
 * Total Accepted:    367.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head === null) {
    return null
  }
  let pFast = head
  let pSlow = head
  let pPrev = null
  for (let i = 0; i < n - 1; i++) {
    pFast = pFast.next
  }
  while (pFast && pFast.next !== null) {
    pFast = pFast.next
    pPrev = pSlow
    pSlow = pSlow.next
  }
  if (pPrev === null) {
    head = head.next
    return head
  }
  pPrev.next = pSlow.next
  return head
};

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)

// console.log(removeNthFromEnd(a, 2))
