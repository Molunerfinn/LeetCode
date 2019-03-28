/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (43.65%)
 * Total Accepted:    292.8K
 * Total Submissions: 670.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  head = swap(head)
  let pNode = head.next
  while (pNode && pNode.next !== null) {
    pNode.next = swap(pNode.next)
    pNode = pNode.next
    if (pNode.next) {
      pNode = pNode.next
    }
  }
  return head
};

function swap (pHead) {
  let temp = pHead.next
  if (temp !== null) {
    pHead.next = temp.next
    temp.next = pHead
    return temp
  }
  return pHead
}

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let a = new ListNode(1)
// a.next = new ListNode(2)
// a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(4)
// a.next.next.next.next = new ListNode(5)
// let result = swapPairs(a)

// console.log(result)
