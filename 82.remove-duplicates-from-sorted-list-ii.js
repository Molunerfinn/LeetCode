/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (33.26%)
 * Likes:    927
 * Dislikes: 79
 * Total Accepted:    191.1K
 * Total Submissions: 569.1K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
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
// 构造头结点tempHead
// 不管后续的节点里是不是从原始的头结点开始重复的
// 结果只要返回tempHead.next即可
// 这与头插法有异曲同工之妙
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  let tempHead = new ListNode(null)
  tempHead.next = head
  let preNode = tempHead
  let currentNode = head
  let currentVal
  while (currentNode && currentNode.next !== null) {
    if (currentNode.val !== currentNode.next.val) {
      currentNode = currentNode.next
      preNode = preNode.next
    } else {
      currentVal = currentNode.val
      while (currentNode && currentNode.val === currentVal) {
        currentNode = currentNode.next
      }
      preNode.next = currentNode
    }
  }
  return tempHead.next
};
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// let a = new ListNode(1)
// a.next = new ListNode(1)
// a.next.next = new ListNode(2)
// a.next.next.next = new ListNode(3)
// // a.next.next.next.next = new ListNode(4)
// // a.next.next.next.next.next = new ListNode(4)
// // a.next.next.next.next.next.next = new ListNode(5)

// console.log(deleteDuplicates(a))
