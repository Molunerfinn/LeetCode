/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (27.31%)
 * Likes:    670
 * Dislikes: 856
 * Total Accepted:    205.7K
 * Total Submissions: 742.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
var rotateRight = function(head, k) {
  if (head === null || head.next === null) {
    return head
  }
  let length = 0
  let pHead = head
  let pTail = null
  while (true) {
    length++
    if (pHead.next === null) {
      pTail = pHead
      break
    }
    pHead = pHead.next
  }
  let steps = k % length
  if (steps === 0) {
    return head
  }
  // 无需反转链表
  // 找到需要rotate的第k个节点
  // 断开后将两边对调拼接即可
  let pFast = head
  let pSlow = head
  for (let i = 0; i < steps; i++) {
    pFast = pFast.next
  }
  while (pFast.next !== null) {
    pSlow = pSlow.next
    pFast = pFast.next
  }

  let pRight = pSlow.next
  // 断开链表
  pSlow.next = null
  let pLeft = head
  // 尾部是之前循环的时候预留的
  pTail.next = pLeft 
  return pRight
};

// // 反转链表
// function reverseLinkList (head) {
//   if (head === null || head.next === null) {
//     return head
//   }
//   let tempHead = new ListNode(0)
//   tempHead.next = head
//   let pCurrent = head
//   let pNext = head.next
//   while (pNext !== null) {
//     let tempNext = pNext.next
//     pNext.next = pCurrent
//     tempHead.next = pNext
//     pCurrent = pNext
//     pNext = tempNext
//   }
//   head.next = null
//   return tempHead.next
// }

// const ListNode = require('./ListNode')

// var a = new ListNode(1)
// a.next = new ListNode(2)

// console.log(rotateRight(a, 1))
