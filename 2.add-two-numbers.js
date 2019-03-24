/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.73%)
 * Total Accepted:    799.6K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let head = new ListNode(0)
  let pCurrent = head
  while (l1 !== null || l2 !== null) {
    let count = 0
    if (l1) {
      count += l1.val
    }
    if (l2) {
      count += l2.val
    }
    if (carry) {
      count += 1
    }
    if (count >= 10) {
      count -= 10
      carry = 1
    } else {
      carry = 0
    }
    pCurrent.next = new ListNode(count)
    pCurrent = pCurrent.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
    if (l1 === null && l2 === null && carry === 1) { // exp. [5] + [5] -> [0, 1]
      pCurrent.next = new ListNode(1)
    }
  }
  return head.next
};
