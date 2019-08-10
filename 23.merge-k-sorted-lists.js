/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (34.84%)
 * Likes:    2743
 * Dislikes: 177
 * Total Accepted:    426.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// https://www.cnblogs.com/lightwindy/p/8512912.html
var mergeKLists = function(lists) {
  if (lists.length === 1) {
    return list[0]
  }
  return mergeKListsCore(lists, 0, lists.length - 1)
};

function mergeKListsCore (lists, begin, end) {
  if (begin > end) {
    return null
  }
  if (begin === end) {
    return lists[begin]
  }

  return mergeTwoList(
    mergeKListsCore(lists, begin, Math.floor((begin + end) / 2)),
    mergeKListsCore(lists, Math.floor((begin + end) / 2) + 1, end),
  )
}

function mergeTwoList (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoList(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoList(l1, l2.next)
    return l2
  }
}

// const ListNode = require('./ListNode')

// var a = new ListNode(1)
// a.next = new ListNode(4)
// a.next.next = new ListNode(5)

// var b = new ListNode(1)
// b.next = new ListNode(3)
// b.next.next = new ListNode(4)

// var c = new ListNode(2)
// c.next = new ListNode(6)

// var d = mergeKLists([a,b,c])
