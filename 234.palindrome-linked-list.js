/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (36.28%)
 * Likes:    1781
 * Dislikes: 263
 * Total Accepted:    279.2K
 * Total Submissions: 763K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true
  }
  let length = 0
  let currentNode = head
  while (currentNode) {
    length++
    currentNode = currentNode.next
  }
  // 判断链表的奇偶
  let step = length % 2 === 0 ? Math.floor(length / 2) : Math.floor(length / 2) + 1
  let rightPointer = head 
  for (let i = 1; i < step; i++) {
    rightPointer = rightPointer.next
  }
  // 反转链表的后半部分
  rightPointer.next = reverse(rightPointer.next)
  rightPointer = rightPointer.next
  let leftPointer = head
  // 然后双指针开始比较
  // 左指针从头开始
  // 右指针从中间开始
  // 比较它们的val是否相同
  for (let i = 1; i <= step; i++) {
    if (rightPointer === null) {
      return true
    } else {
      if (leftPointer.val !== rightPointer.val) {
        return false
      }
    }
    leftPointer = leftPointer.next
    rightPointer = rightPointer.next
  }
  return true
};

/**
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse (head) {
  let newHead = new ListNode(null)
  while (head) {
    let temp = head.next
    head.next = newHead
    newHead = head
    head = temp
  }
  return newHead
}
