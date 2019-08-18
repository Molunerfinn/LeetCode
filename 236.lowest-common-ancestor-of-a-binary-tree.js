/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (37.80%)
 * Likes:    2205
 * Dislikes: 143
 * Total Accepted:    308.3K
 * Total Submissions: 792.9K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant
 * of itself according to the LCA definition.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * All of the nodes' values will be unique.
 * p and q are different and both values will exist in the binary tree.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路就是，如果值发现在两侧，那么就以当前根为结果
// 如果值都在某一侧，那么就递归某个子树
// 当 当前的根节点包含某个值时，并且另一个值也在根以下，那么返回根
// https://blog.csdn.net/happyaaaaaaaaaaa/article/details/51635658
var lowestCommonAncestor = function(root, p, q) {
  // 如果发现某个值，就不用继续递归了
  // 因为如果两个值都在某一侧，最先找到的一定是共同祖先
  // 如果为空，返回空值，说明这一侧已经找不到符合要求的节点
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  // 如果在左右子树都找到了
  // 返回root
  if (left !== null && right !== null) {
    return root
  }
  if (left !== null) {
    return left
  } else {
    return right
  }
};
