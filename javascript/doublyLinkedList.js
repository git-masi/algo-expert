class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  setHead(node) {
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  setTail(node) {
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  insertBefore(node, nodeToInsert) {
    if (node.prev) {
      const temp = node.prev;
      temp.next = nodeToInsert;
      nodeToInsert.prev = temp;
      nodeToInsert.next = node;
      node.prev = nodeToInsert;
      this.size++;
    } else if (node === this.head) {
      this.setHead(nodeToInsert);
    }
  }

  insertAfter(node, nodeToInsert) {
    if (node.next) {
      const temp = node.next;
      temp.prev = nodeToInsert;
      nodeToInsert.next = temp;
      nodeToInsert.prev = node;
      node.next = nodeToInsert;
      this.size++;
    } else if (node === this.tail) {
      this.setTail(nodeToInsert);
    }
  }

  insertAtPosition(position, nodeToInsert) {
    if (position < 1) {
      return;
    } if (position === 1) {
      this.setHead(nodeToInsert);
    } else if (position === this.size) {
      this.setTail(nodeToInsert);
    } else if (1 < position && position < this.size) {
      let currentNode = this.head.next;
      for (let i = 2; i < this.size; i++) {
        if (i === position) {
          this.insertBefore(currentNode, nodeToInsert);
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        this.remove(currentNode);
      }
      currentNode = currentNode.next;
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let temp = node.prev;
      temp.next = node.next;
      node.next.prev = temp;
    }
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

const list = new DoublyLinkedList;

const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('c');
const node4 = new Node('d');
const node5 = new Node('e');
const node6 = new Node('f');

list.setHead(node1);
list.setHead(node2);

list.insertBefore(node2, node3);
list.insertBefore(node2, node4);

// list.remove(node3);