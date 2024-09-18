// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    // List CANNOT START EMPTY
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value, next: null };
    this.tail.next = newNode; // make the current tail point to the new node now
    this.tail = newNode; //before now making the newNode the tail

    this.length++;
  }

  prepend(value) {
    const newNode = { value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  insert(index, value) {
    if (index < 0) {
      console.log('Invalid index');
      return this;
    }

    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };

    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    const nodeAtIndex = nodeBeforeIndex.next;

    nodeBeforeIndex.next = newNode;
    newNode.next = nodeAtIndex;

    this.length++;
  }

  remove(index) {
    // validate index

    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.length - 1) {
      const nodeBeforeLastIndex = this.traverseToIndex(index - 2);
      nodeBeforeLastIndex.next = null;
      this.tail = nodeBeforeLastIndex;
    } else {
      const nodeBeforeIndex = this.traverseToIndex(index - 1);
      const nodeAtIndex = nodeBeforeIndex.next;
      const nodeAfterIndex = nodeAtIndex.next;
      nodeBeforeIndex.next = nodeAfterIndex;
    }

    this.length--;
  }

  reverse2() {
    // this is O(n^2)
    if (this.length === 1) return;

    const oldHeadNode = this.head;
    const newHeadNode = this.tail;

    let nodeIndex = this.length - 2;
    let currentNode = newHeadNode;

    while (nodeIndex >= 0) {
      const node = this.traverseToIndex(nodeIndex);

      currentNode.next = node;
      currentNode = node;

      nodeIndex--;
    }

    oldHeadNode.next = null;
    this.tail = oldHeadNode;

    this.head = newHeadNode;
  }

  reverse() {
    let currentNode = this.head;
    let nextNode = currentNode.next;

    while (nextNode) {
      const nodeAfterNext = nextNode.next;

      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = nodeAfterNext;
    }

    this.head.next = null;
    this.head = this.tail;
    this.head = currentNode;
  }

   traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.insert(2, 3);
myLinkedList.remove(5);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
