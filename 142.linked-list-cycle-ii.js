/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 *
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (32.37%)
 * Likes:    1569
 * Dislikes: 125
 * Total Accepted:    227.7K
 * Total Submissions: 693.8K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given a linked list, return the node where the cycle begins. If there is no
 * cycle, return null.
 * 
 * To represent a cycle in the given linked list, we use an integer pos which
 * represents the position (0-indexed) in the linked list where tail connects
 * to. If pos is -1, then there is no cycle in the linked list.
 * 
 * Note: Do not modify the linked list.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * second node.
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * first node.
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = [1], pos = -1
 * Output: no cycle
 * Explanation: There is no cycle in the linked list.
 * 
 * 
 * 
 * 
 * 
 * 
 * Follow-up:
 * Can you solve it without using extra space?
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
// https://blog.csdn.net/willduan1/article/details/50938210
// 快慢指针
var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null
  }
  let pFast = head
  let pSlow = head
  while (pFast !== null && (pSlow !== null)) {
    pFast = pFast.next
    if (pFast === null) {
      return null
    } else {
      pFast = pFast.next
    }
    pSlow = pSlow.next
    if (pFast === pSlow) {
      break
    }
  }
  if (pFast === null || pSlow === null) {
    return null // 说明无环
  }
  // 到这步pFast与pSlow相遇
  // 接下去慢指针指向头部
  // 快指针继续走不过从两步变成一步
  pSlow = head
  while (pSlow !== pFast) {
    pSlow = pSlow.next
    pFast = pFast.next
  }
  return pFast
};
