class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  setTail(node) {
    if (this.head === null) {
      this.setHead(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  insertBefore(node, newNode) {
    if (node === this.head) this.setHead(newNode);

    let currentNode = this.head;
    while (currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return this;
  }

  insertAfter(node, newNode) {
    if (node === this.tail) this.setTail(newNode);

    let currentNode = this.head;
    while (currentNode !== node) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return this;
  }

  remove (node) {
    // this is a case where having a size property could be useful

    // linked list has 1 node
    if (this.head === this.tail && this.head === node) {
      this.head = null;
      this.tail = null;
      return;
    }

    // linked list has 2 nodes, remove head
    if (this.head.next === this.tail && this.head === node) {
      this.head = this.tail;
      return;
    }

    // linked list has 2 nodes, remove tail
    if (this.head.next === this.tail && this.tail === node) {
      this.tail = this.head;
      return;
    }

    // linked list has > 2 nodes
    let currentNode = this.head;
    while (currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    currentNode.next = node.next;
    if (this.tail === node) this.tail = currentNode;

    return node;
  }

  removeAllNodesWithValue(val) {
    // this is a case where having a size property could be useful

    let currentNode = this.head;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      if (currentNode.val = val) this.remove(currentNode);
      currentNode = nextNode;
    }

    return this;
  }

  containsNodeWithValue(val) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  getNodeWithValue(val) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.val === val) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  getAllNodesWithValue(val) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.val === val) nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}