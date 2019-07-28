/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (35.49%)
 * Likes:    1330
 * Dislikes: 96
 * Total Accepted:    204.5K
 * Total Submissions: 575.9K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let pHead
  let temp
  if (m === 1) {
    temp = new ListNode(null)
    temp.next = head
    pHead = temp
  } else {
    pHead = head
    for (let i = 2; i < m; i++) {
      pHead = pHead.next
    }
  }
  let currentStep = m
  let pFirst = pHead.next
  // 对于示例1而言，pCurrent为2
  let pCurrent = pFirst
  let pNext= pCurrent.next
  // 头插法
  while (currentStep < n) {
    let pN = pNext.next
    pNext.next = pCurrent
    pHead.next = pNext
    pCurrent = pNext
    pNext = pN // 4
    currentStep++
  }
  pFirst.next = pNext
  if (m > 1) {
    return head
  } else {
    return temp.next
  }
};
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(4)
// a.next.next.next.next = new ListNode(5)

// let result = reverseBetween(a, 2, )
