/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (37.49%)
 * Likes:    754
 * Dislikes: 203
 * Total Accepted:    172.9K
 * Total Submissions: 455.1K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
// 双链表
// https://blog.csdn.net/qq_17550379/article/details/80661781
var partition = function(head, x) {
  if (head === null || head.next === null) {
    return head
  }
  let pLeft = new ListNode(-1)
  let pRight = new ListNode(-1)
  let pLeftCurrent = pLeft
  let pRightCurrent = pRight
  let pHead = head
  while (pHead !== null) {
    let value = pHead.val
    if (value < x) {
      pLeftCurrent.next = pHead
      pLeftCurrent = pLeftCurrent.next
    } else {
      pRightCurrent.next = pHead
      pRightCurrent = pRightCurrent.next
    }
    pHead = pHead.next
  }
  // 将尾部指向null
  pRightCurrent.next = null
  pLeftCurrent.next = pRight.next
  return pLeft.next
};

// const ListNode = require('./ListNode')

// let a = new ListNode(1)
// a.next = new ListNode(4)
// a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(2)
// a.next.next.next.next = new ListNode(5)
// a.next.next.next.next.next = new ListNode(2)

// console.log(partition(a, 3))
