/*

============================
Thoughts post implementation
============================
I've done other implementation of this data structure in the past but this was a little different
Mostly it was the idea that external nodes with their own variable references could be passed into the list
at several points and the case where a node was already in the list had to be handled at every step

I didn't watch the intro video for this, instead I figured everything out by myself based on the question prompt and tests
This was undoubtedly slow but I think it was a valuable experience because it was my first time writing code to pass tests
while being very aware of the tests, how they work, and the expected results

Key points
1)  It pays to not only be very clear about the inputs and outputs, but also how we expect the data structure to behave
    and how we expect the data structure to interact with other data types (reference types vs primitive values)
    That is not to say that I think every possibility and edge case needs to be considered before a single line of code is written
    But the more I go through these problems the more I realize that getting clear about inputs, outputs, data structure behavior,
    and other specifications, it saves a lot of time in the end

2)  Writing code to solve the tests is frustrating but provides a clear step-by-step path to solving the problem
    This was the first time that I made extensive use of the tests
    My initial solution was not "wrong" it was a solution given my understanding of the test prompt for the quest
    But the text didn't give any indication that we would be saving references to nodes in variables and needed to be able to reposition nodes in the list at any time
    That's where diving into the tests, understanding them, understand what it would take to make them pass, was valuable
    The tests told me more about the expectations of the code than the prompt
    Of course if there was another human being to ask questions to this could be resolved with much less frustration
    But it's good to know I can get it done either way

*/

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