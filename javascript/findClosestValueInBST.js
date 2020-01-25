function findClosestValueInBst (tree, target) {
  let closestValue = tree.value;

  (function helper(node) {
    if (Math.abs(node.value - target) < Math.abs(closestValue - target)) closestValue = node.value;

    if (target === node.value) {
      return node.value;
    } else if (target > node.value && node.right) {
      helper(node.right);
    } else if (target < node.value && node.left) {
      helper(node.left);
    }
  })(tree)

  return closestValue;
}