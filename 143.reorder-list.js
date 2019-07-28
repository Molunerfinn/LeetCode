/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (31.13%)
 * Likes:    982
 * Dislikes: 74
 * Total Accepted:    163.2K
 * Total Submissions: 516.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * Example 1:
 * 
 * 
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * 
 * 
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// https://www.cnblogs.com/grandyang/p/4254860.html
// 使用栈
var reorderList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  let stack = []
  let pCurrent = head
  while (pCurrent) {
    stack.push(pCurrent)
    pCurrent = pCurrent.next
  }
  let count = Math.floor((stack.length - 1) / 2)
  let pHead = head
  while (count) {
    let pNext = pHead.next
    let nNode = stack.pop()
    pHead.next = nNode
    nNode.next = pNext
    pHead = pNext
    count--
  }
  let last = stack.pop()
  last.next = null // 必须指定最后一个节点的next为null，不然就变成环了。
  // return head
};


// const ListNode = require('./ListNode')

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(4)

// console.log(reorderList(a))
