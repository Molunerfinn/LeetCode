/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (37.17%)
 * Likes:    1288
 * Dislikes: 260
 * Total Accepted:    196.4K
 * Total Submissions: 526.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * Given this linked list: 1->2->3->4->5
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * For k = 3, you should return: 3->2->1->4->5
 * 
 * Note:
 * 
 * 
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
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
 * @param {number} k
 * @return {ListNode}
 */
// 利用了leetcode#92 从m->n的逆序
var reverseKGroup = function(head, k) {
  if (head === null || head.next === null) {
    return head
  }
  let length = 0
  let pHead = head
  while (pHead !== null) {
    length++
    pHead = pHead.next
  }
  let currentStep = 1
  pCurrent = head
  while (currentStep + k - 1 <= length) {
    pCurrent = reverseBetween(pCurrent, currentStep, currentStep + k - 1)
    currentStep = currentStep + k
  }
  return pCurrent
};


// const ListNode = require('./ListNode')

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(4)
// a.next.next.next.next = new ListNode(5)

// console.log(reverseKGroup(a, 2))

// leetcode #92
function reverseBetween (head, m, n) {
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
