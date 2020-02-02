/*

The question specifies that the remove method should only remove the first instance
of a target value in the BST
This begs the question whether or not duplicate values are accepted and how to handle them
According to the question the "BST property" requires that every node to the right
be strictly less than the value of a BST node
And every value to the right be greater than or equal to the value of the node
So from this we know that there may be duplicate values
Also it appears there is no Node class or BSTNode class or anything like that
The BST can be a root, node, or leaf

Some additional questions to ask / think about:
What if we have negative values?
Should a node witha duplicate value be added before or after the node that already has that value?
Does the remove method just remove the one node or does it remove all of that nodes child nodes?
For example we might think of a linked list where removal of one nodes requires that we update the
reference of the previous node so that we can still access all of the data the came after the removed
node in the list

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);

    let currentNode = this;

    while (currentNode) {
      if (newNode.value < currentNode.value && currentNode.left === null) {
        currentNode.left = newNode;
        break;
      } else if (newNode.value >= currentNode.value && currentNode.right === null) {
        currentNode.right = newNode;
        break;
      } else if (newNode.value === currentNode.value) {
        newNode.right = currentNode.right;
        currentNode.right = newNode;
        break;
      } else if (newNode.value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (newNode.value >= currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return this;
  }

  insertNode(nodeToInsert) {
    let currentNode = this;

    while (currentNode) {
      if (nodeToInsert.value < currentNode.value && currentNode.left === null) {
        currentNode.left = nodeToInsert;
        break;
      } else if (nodeToInsert.value >= currentNode.value && currentNode.right === null) {
        currentNode.right = nodeToInsert;
        break;
      } else if (nodeToInsert.value === currentNode.value) {
        nodeToInsert.right = currentNode.right;
        currentNode.right = nodeToInsert;
        break;
      } else if (nodeToInsert.value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (nodeToInsert.value >= currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }

  contains(value) {
    if (!value) return false;

    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value >= currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return false;
  }

  remove(value) {
    // if (!this.contains(value)) return this;

    let parentNode = null;
    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) {
        if (parentNode) {
          if (parentNode.right.value === currentNode.value) {
            if (currentNode.left) {
              let temp = currentNode.left.right;
              parentNode.right = currentNode.left;
              parentNode.right.right = currentNode.right;
              parentNode.right.insert(temp);
            }
          } else if (parentNode.left.value === currentNode.value) {
            let temp = currentNode.right;
            parentNode.left = currentNode.left;
            parentNode.left.insert(temp);
          }
          currentNode.left = null;
          currentNode.right = null;
          break;
        } else {
          // the current node === root
          const left = this.left;
          const right = this.right;
          if (right) {
            if (left) right.insertNode(left);
            this.value = right.value;
            this.left = right.left;
            this.right = right.right;
          } else if (left) {
            this.value = left.value;
            this.right = left.right;
            this.left = left.left;
          } else {
            return this;
          }
          break;
        }
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value >= currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return this;
  }
}