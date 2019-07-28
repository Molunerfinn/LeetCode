/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (35.73%)
 * Likes:    1577
 * Dislikes: 81
 * Total Accepted:    195.5K
 * Total Submissions: 537.9K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
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
// https://blog.csdn.net/wumuzi520/article/details/8078322
var sortList = function(head) {
  quickSort(head, null)
  return head
};

/**
 * 
 * @param {ListNode} pBegin 
 * @param {ListNode} pEnd 
 */
function getPartition (pBegin, pEnd) {
  let middleVal = pBegin.val
  let pLeft = pBegin
  let pRight = pBegin.next
  while (pRight !== pEnd) {
    if (pRight.val < middleVal) {
      pLeft = pLeft.next
      swap(pLeft, pRight)
    }
    pRight = pRight.next
  }
  swap(pLeft, pBegin)
  return pLeft
}

function quickSort (pBegin, pEnd) {
  if (pBegin !== pEnd) {
    let partition = getPartition(pBegin, pEnd)
    quickSort(pBegin, partition)
    quickSort(partition.next, pEnd)
  }
}

/**
 * 
 * @param {ListNode} Node1 
 * @param {ListNode} Node2 
 */
function swap (Node1, Node2) {
  let temp = Node1.val
  Node1.val = Node2.val
  Node2.val = temp
}
