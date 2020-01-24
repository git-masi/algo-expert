/**
 * ===========================
 * Pre-implementation thoughts
 * ===========================
 * DFS comes in three flavors
 * - Pre-order
 * - Post-order
 * - In-order
 *
 * Regardless of which of these is used, often an array containing the value of all the nodes is returned
 * For the purpose of this solution pushing the node/value to the array is to "visit" the node
 *
 * --The following explainations are considering the case of a binary tree for the sake of simplicity--
 *
 * With pre-order we "visit" the node then move on to it's children
 * typically traversing the entire left side of a node before
 * traversing a single node on the right
 *
 * With post-order we would traverse the entire left side of a node,
 * then the entire right side, before finally "visiting" the node
 *
 * With in-order we would visit the left node if there is one, then the right node, and then the parent
 * and continue that up the list
 * In a BST made up of nodes with int values
 * this would essentially result in an array of numbers in ascending order
 *
 *
 * =====================================
 * Thoughts on question and starter code
 * =====================================
 * It is clear from the question that we are not strictly dealing with a binary tree
 * So there may be more than two children for each node
 * The expected output is an array consisting of just the "name" of each node and it's children
 * We are not returning an array of nodes
 * It is also clear from the example that we are implementing post-order DFS
 * The best solution is probably going to involve recursion
 *
 * The problem specifies that the DFS "takes in an empty array"
 * and "stores all the nodes names in the input array, and returns it"
 *
 * One has to wonder why an empty array is passed in at all
 * No matter, solve the problem at hand and then consider these things for future implementations
 * --See post-implementation thoughts--
 */


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    if (this.children.length > 0) {
      this.children.forEach(child => child.depthFirstSearch(array))
    }
    return array;
  }
}


/**
 * ============================
 * Post-implementation thoughts
 * ============================
 * It is clear now that the reason an empty array is passed in at the start is to maintian a reference
 * to the same array for each recursive function call.
 * Successive calls to the function do not use an empty array because the array is filled as the DFS goes along
 *
 * It was pretty easy to conceptualize the recursive function
 * My only little hangup was:
 *    this.children.forEach(child => child.depthFirstSearch(array))
 * which is originally wrote as:
 *    this.children.forEach(() => this.depthFirstSearch(array))
 * This caused stack overflow because I was calling the DFS of the original node and not successive nodes
 */