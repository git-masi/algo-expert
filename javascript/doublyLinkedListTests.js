// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

class StartNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const nodeClass = program.Node || StartNode;

class Node extends nodeClass {
  constructor(value) {
    super(value);
  }
}

function expectEmpty(linkedList) {
  chai.expect(linkedList.head).to.deep.equal(null);
  chai.expect(linkedList.tail).to.deep.equal(null);
}

function expectHeadTail(linkedList, head, tail) {
  chai.expect(linkedList.head).to.deep.equal(head);
  chai.expect(linkedList.tail).to.deep.equal(tail);
}

function expectSingleNode(linkedList, node) {
  chai.expect(linkedList.head).to.deep.equal(node);
  chai.expect(linkedList.tail).to.deep.equal(node);
}

function getNodeValuesHeadToTail(linkedList) {
  const values = [];
  let node = linkedList.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead(linkedList) {
  const values = [];
  let node = linkedList.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

function removeNodes(linkedList, nodes) {
  for (const node of nodes) {
    linkedList.remove(node);
  }
}

it('Test Case #1', function() {
  const linkedList = new program.DoublyLinkedList();
  const node = new Node(1);

  linkedList.setHead(node);
  expectSingleNode(linkedList, node);
  linkedList.remove(node);
  expectEmpty(linkedList);
  linkedList.setTail(node);
  expectSingleNode(linkedList, node);
  linkedList.removeNodesWithValue(1);
  expectEmpty(linkedList);
  linkedList.insertAtPosition(1, node);
  expectSingleNode(linkedList, node);
});

it('Test Case #2', function() {
  const linkedList = new program.DoublyLinkedList();
  const first = new Node(1);
  const second = new Node(2);
  const nodes = [first, second];

  linkedList.setHead(first);
  linkedList.setTail(second);
  expectHeadTail(linkedList, first, second);
  removeNodes(linkedList, nodes);
  expectEmpty(linkedList);
  linkedList.setHead(first);
  linkedList.insertAfter(first, second);
  expectHeadTail(linkedList, first, second);
  removeNodes(linkedList, nodes);
  linkedList.setHead(first);
  linkedList.insertBefore(first, second);
  expectHeadTail(linkedList, second, first);
  removeNodes(linkedList, nodes);
  linkedList.insertAtPosition(1, first);
  linkedList.insertAtPosition(2, second);
  expectHeadTail(linkedList, first, second);
  removeNodes(linkedList, nodes);
  linkedList.insertAtPosition(2, first);
  linkedList.insertAtPosition(1, second);
  expectHeadTail(linkedList, second, first);
});

it('Test Case #3', function() {
  const linkedList = new program.DoublyLinkedList();
  const first = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);

  linkedList.setHead(first);
  chai.expect(linkedList.containsNodeWithValue(1)).to.deep.equal(true);
  linkedList.insertAfter(first, second);
  chai.expect(linkedList.containsNodeWithValue(2)).to.deep.equal(true);
  linkedList.insertAfter(second, third);
  chai.expect(linkedList.containsNodeWithValue(3)).to.deep.equal(true);
  linkedList.insertAfter(third, fourth);
  chai.expect(linkedList.containsNodeWithValue(4)).to.deep.equal(true);
  linkedList.removeNodesWithValue(3);
  chai.expect(linkedList.containsNodeWithValue(3)).to.deep.equal(false);
  linkedList.remove(first);
  chai.expect(linkedList.containsNodeWithValue(1)).to.deep.equal(false);
  linkedList.removeNodesWithValue(4);
  chai.expect(linkedList.containsNodeWithValue(4)).to.deep.equal(false);
  linkedList.remove(second);
  chai.expect(linkedList.containsNodeWithValue(2)).to.deep.equal(false);
});

it('Test Case #4', function() {
  const linkedList = new program.DoublyLinkedList();
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
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([1, 2, 3, 3, 3, 6, 7]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([7, 6, 3, 3, 3, 2, 1]);
  expectHeadTail(linkedList, first, seventh);
  linkedList.remove(second);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([1, 3, 3, 3, 6, 7]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([7, 6, 3, 3, 3, 1]);
  expectHeadTail(linkedList, first, seventh);
  linkedList.removeNodesWithValue(1);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 3, 3, 6, 7]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([7, 6, 3, 3, 3]);
  expectHeadTail(linkedList, third, seventh);
  linkedList.removeNodesWithValue(3);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 7]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([7, 6]);
  expectHeadTail(linkedList, sixth, seventh);
  linkedList.removeNodesWithValue(7);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6]);
  expectHeadTail(linkedList, sixth, sixth);
});

it('Test Case #5', function() {
  const linkedList = new program.DoublyLinkedList();
  const first = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);
  const fifth = new Node(5);
  const sixth = new Node(6);
  const seventh = new Node(7);

  linkedList.setHead(first);
  linkedList.insertAfter(first, second);
  linkedList.insertAfter(second, third);
  linkedList.insertAfter(third, fourth);
  linkedList.insertAfter(fourth, fifth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([1, 2, 3, 4, 5]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([5, 4, 3, 2, 1]);
  expectHeadTail(linkedList, first, fifth);
  linkedList.insertAfter(third, fifth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([1, 2, 3, 5, 4]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([4, 5, 3, 2, 1]);
  expectHeadTail(linkedList, first, fourth);
  linkedList.insertAfter(third, first);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([2, 3, 1, 5, 4]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([4, 5, 1, 3, 2]);
  expectHeadTail(linkedList, second, fourth);
  linkedList.insertAfter(fifth, second);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 1, 5, 2, 4]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([4, 2, 5, 1, 3]);
  expectHeadTail(linkedList, third, fourth);
  linkedList.insertAfter(second, first);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 5, 2, 1, 4]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([4, 1, 2, 5, 3]);
  expectHeadTail(linkedList, third, fourth);
  linkedList.insertAfter(fourth, sixth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 5, 2, 1, 4, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 4, 1, 2, 5, 3]);
  expectHeadTail(linkedList, third, sixth);
  linkedList.insertAfter(second, seventh);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 5, 2, 7, 1, 4, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 4, 1, 7, 2, 5, 3]);
  expectHeadTail(linkedList, third, sixth);
});

it('Test Case #6', function() {
  const linkedList = new program.DoublyLinkedList();
  const first = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);
  const fifth = new Node(5);
  const sixth = new Node(6);
  const seventh = new Node(7);

  linkedList.setHead(first);
  linkedList.insertBefore(first, second);
  linkedList.insertBefore(second, third);
  linkedList.insertBefore(third, fourth);
  linkedList.insertBefore(fourth, fifth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([5, 4, 3, 2, 1]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([1, 2, 3, 4, 5]);
  expectHeadTail(linkedList, fifth, first);
  linkedList.insertBefore(third, first);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([5, 4, 1, 3, 2]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([2, 3, 1, 4, 5]);
  expectHeadTail(linkedList, fifth, second);
  linkedList.insertBefore(fifth, second);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([2, 5, 4, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 4, 5, 2]);
  expectHeadTail(linkedList, second, third);
  linkedList.insertBefore(fifth, fourth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([2, 4, 5, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 5, 4, 2]);
  expectHeadTail(linkedList, second, third);
  linkedList.insertBefore(second, sixth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 2, 4, 5, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 5, 4, 2, 6]);
  expectHeadTail(linkedList, sixth, third);
  linkedList.insertBefore(first, seventh);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 2, 4, 5, 7, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 7, 5, 4, 2, 6]);
  expectHeadTail(linkedList, sixth, third);
});

it('Test Case #7', function() {
  const linkedList = new program.DoublyLinkedList();
  const first = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);
  const fifth = new Node(5);
  const sixth = new Node(6);
  const seventh = new Node(7);

  linkedList.setHead(first);
  linkedList.insertAtPosition(1, second);
  linkedList.insertAtPosition(1, third);
  linkedList.insertAtPosition(1, fourth);
  linkedList.insertAtPosition(1, fifth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([5, 4, 3, 2, 1]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([1, 2, 3, 4, 5]);
  expectHeadTail(linkedList, fifth, first);
  linkedList.insertAtPosition(2, first);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([5, 1, 4, 3, 2]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([2, 3, 4, 1, 5]);
  expectHeadTail(linkedList, fifth, second);
  linkedList.insertAtPosition(1, second);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([2, 5, 1, 4, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 4, 1, 5, 2]);
  expectHeadTail(linkedList, second, third);
  linkedList.insertAtPosition(2, fourth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([2, 4, 5, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 5, 4, 2]);
  expectHeadTail(linkedList, second, third);
  linkedList.insertAtPosition(1, sixth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 2, 4, 5, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 5, 4, 2, 6]);
  expectHeadTail(linkedList, sixth, third);
  linkedList.insertAtPosition(5, seventh);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 2, 4, 5, 7, 1, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 1, 7, 5, 4, 2, 6]);
  expectHeadTail(linkedList, sixth, third);
  linkedList.insertAtPosition(8, fourth);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([6, 2, 5, 7, 1, 3, 4]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([4, 3, 1, 7, 5, 2, 6]);
  expectHeadTail(linkedList, sixth, fourth);
});
