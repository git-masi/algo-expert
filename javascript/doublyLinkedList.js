class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

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
    if (this.containsNode(nodeToInsert)) {
      this.remove(nodeToInsert);
    }
    if (node === this.head) {
      return this.setHead(nodeToInsert);
    }
    if (node.prev) {
      const temp = node.prev;
      temp.next = nodeToInsert;
      nodeToInsert.prev = temp;
      nodeToInsert.next = node;
      node.prev = nodeToInsert;
      this.size++;
    }
  }

  insertAfter(node, nodeToInsert) {
    if (this.containsNode(nodeToInsert)) {
      this.remove(nodeToInsert);
    }
    if (node === this.tail) {
      return this.setTail(nodeToInsert);
    }
    if (node.next) {
      const temp = node.next;
      temp.prev = nodeToInsert;
      nodeToInsert.next = temp;
      nodeToInsert.prev = node;
      node.next = nodeToInsert;
      this.size++;
    }
  }

  insertAtPosition(position, nodeToInsert) {
    if (position > this.size && position !== 1 && position !== 2) position = this.size - 1;
    if (this.containsNode(nodeToInsert)) {
      this.remove(nodeToInsert);
    }
    if (position === 1 || this.size === 0 && position > 0) {
      this.setHead(nodeToInsert);
    } else if (position === this.size || position === 2 && this.size === 1) {
      this.setTail(nodeToInsert);
    } else {
      let currentNode = this.head.next
      for (let i = 2; i <= this.size; i++) {
        if (i === position) {
          this.insertBefore(currentNode, nodeToInsert);
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const next = currentNode.next;
        this.remove(currentNode);
        currentNode = next;
        continue;
      }
      currentNode = currentNode.next;
    }
  }

  remove(node) {
    if (node !== this.head && node !== this.tail) {
      let temp = node.prev;
      temp.next = node.next;
      node.next.prev = temp;
    }

    if (node === this.head) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }

    node.prev = null;
    node.next = null;

    this.size--
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

  containsNode(node) {
    if (node.prev || node.next || node === this.head || node === this.tail) return true;
    return false;
  }
}

const linkedList = new DoublyLinkedList;

const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(3);
const fifth = new Node(3);
const sixth = new Node(6);
const seventh = new Node(7);

linkedList.setHead(first);
linkedList.insertAfter(first, second);
linkedList.insertAfter(second, third);
linkedList.insertAfter(third, fourth);
linkedList.insertAfter(fourth, fifth);
linkedList.insertAfter(fifth, sixth);
linkedList.insertAfter(sixth, seventh);
linkedList.remove(second);
linkedList.removeNodesWithValue(1);
linkedList.removeNodesWithValue(3);
// linkedList.removeNodesWithValue(7);


// const node1 = new Node('a');
// const node2 = new Node('b');
// const node3 = new Node('c');
// const node4 = new Node('d');
// const node5 = new Node('e');
// const node6 = new Node('f');

// list.setHead(node1); // a
// list.remove(node1);
// list.setHead(node2); // b -> a

// list.insertBefore(node2, node3); // c -> b -> a
// list.insertBefore(node2, node4); // c -> d -> b -> a

// list.remove(node3); // d -> b -> a

// list.removeNodesWithValue('a'); // d -> b

// list.removeNodesWithValue(23); // d -> b

// console.log(list.containsNodeWithValue(77)); // false
// console.log(list.containsNodeWithValue('d')); // true

// list.insertAtPosition(2, node5); // d -> b -> e
// list.insertAtPosition(2, node6); // d -> f -> b -> e
// list.insertAtPosition(3, node1); // d -> f -> a -> b -> e

console.log(linkedList);