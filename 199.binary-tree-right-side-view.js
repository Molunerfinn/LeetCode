/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (48.27%)
 * Likes:    1205
 * Dislikes: 57
 * Total Accepted:    184.3K
 * Total Submissions: 376.2K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3,null,5,null,4]
 * Output: [1, 3, 4]
 * Explanation:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
 * @return {number[]}
 */
// https://zhanghuimeng.github.io/post/leetcode-199-binary-tree-right-side-view/
var rightSideView = function(root) {
  if (root === null) {
    return []
  }
  let result = []
  dfs(root, 0, result)
  return result
};

function dfs (root, depth, result) {
  if (root === null) {
    return
  }
  if (depth >= result.length) {
    result.push(root.val)
  }
  dfs(root.right, depth + 1, result)
  dfs(root.left, depth + 1, result)
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let a = new TreeNode(1)
// a.left = new TreeNode(2)
// a.right = new TreeNode(3)
// a.left.right = new TreeNode(5)
// a.right.right = new TreeNode(4)

// console.log(rightSideView(a))
