// /**
//  * 
//  * @param {number | string} val 
//  * 
//  */
// function TreeNode(val) {
//   this.val = val;
//   /**
//    * @type {null | TreeNode}
//    * 
//   */
//   this.left = null
//   /**
//    * @type {null | TreeNode}
//    * 
//   */
//   this.right = null
// }

class TreeNode {
  constructor (val) {
    this.val = val
    this.leftNode = null
    this.rightNode = null
  }
  get left() {
    return this.leftNode
  }
  set left(val) {
    this.leftNode = new TreeNode(val)
  }
  get right() {
    return this.rightNode
  }
  set right(val) {
    this.rightNode = new TreeNode(val)
  }
}

module.exports = TreeNode