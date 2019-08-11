/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 *
 * https://leetcode.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (37.52%)
 * Likes:    392
 * Dislikes: 442
 * Total Accepted:    155.9K
 * Total Submissions: 410.2K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list using insertion sort.
 * 
 * 
 * 
 * 
 * 
 * A graphical example of insertion sort. The partial sorted list (black)
 * initially contains only the first element in the list.
 * With each iteration one element (red) is removed from the input data and
 * inserted in-place into the sorted list
 * 
 * 
 * 
 * 
 * 
 * Algorithm of Insertion Sort:
 * 
 * 
 * Insertion sort iterates, consuming one input element each repetition, and
 * growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it
 * there.
 * It repeats until no input elements remain.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
// http://rainykat.blogspot.com/2017/03/leetcode-147-insertion-sort-list.html
var insertionSortList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  let dummyHead = new ListNode(null)
  dummyHead.next = head
  let current = head
  let prev = head
  // 维护2个指针
  // current表示当前需要移动的值
  // prev表示之前的排序后的最后一个值（之前排序后的最大值）
  while (current !== null) {
    // 当prev的值大于当前值时，需要排序
    if (prev.val > current.val) {
      prev.next = current.next // 关键
      let tempHead = dummyHead
      while (tempHead.next !== null && tempHead.next.val < current.val) {
        tempHead = tempHead.next
      }
      current.next = tempHead.next
      tempHead.next = current
      current = prev.next
    } else {
      // 否则就往后移动
      prev = current
      current = prev.next
    }
  }

  return dummyHead.next
};

// const ListNode = require('./ListNode')

// let a = new ListNode(4)
// a.next = new ListNode(2)
// a.next.next = new ListNode(1)
// a.next.next.next = new ListNode(3)

// let result = insertionSortList(a)
// console.log(result)
