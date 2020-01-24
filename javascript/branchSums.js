// Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value.


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let sums = [];
  (function helper(tree, val = 0) {
    val = tree.value + val;
    if (tree.left) helper(tree.left, val);
    if (tree.right) helper(tree.right, val);
    if (!tree.left && !tree.right) sums.push(val);
  })(root);
  return sums;
}

// ========================
// Understanding test cases
// ========================
// it('Test Case #4', function() {
//   const tree = new BinaryTree(1).insert([2, 3, 4, 5]);
//   chai.expect(program.branchSums(tree)).to.deep.equal([7, 8, 4]);
// });

//  1
// 2 3
//4 5
//
// each of these is it's own "binary tree"
// [1].left = [2]
// [1].right = [3]
// [2].left = [4]
// [2].right = [5]

// const root = new BinaryTree(1)
// const left = new BinaryTree(2)
// const right = new BinaryTree(3)
// const leftLeaf = new BinaryTree(4);
// const rightLeaf = new BinaryTree(5);
// left.left = leftLeaf;
// left.right = rightLeaf;