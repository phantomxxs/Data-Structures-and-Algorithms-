class DoublyLinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      prev: null,
      value,
      next: null,
    };

    const prevTail = this.tail;
    this.tail = newNode;
    prevTail.next = newNode;
    newNode.prev = prevTail;

    this.length++;
  }

  prepend(value) {
    const newNode = {
      prev: null,
      value,
      next: null,
    };

    const prevHead = this.head;
    this.head = newNode;
    prevHead.prev = newNode;
    newNode.next = prevHead;

    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length - 1) {
      return this.append(value);
    }

    const newNode = {
      prev: null,
      value,
      next: null,
    };

    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    const nodeAtIndex = nodeBeforeIndex.next;

    nodeBeforeIndex.next = newNode;
    newNode.prev = nodeBeforeIndex;
    newNode.next = nodeAtIndex;
    nodeAtIndex.prev = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const nodeBeforeIndex = this.traverseToIndex(index - 1);
      const nodeAfterIndex = nodeBeforeIndex.next.next;
      nodeBeforeIndex.next = nodeAfterIndex;
      nodeAfterIndex.prev = nodeBeforeIndex;
    }

    this.length--;
  }

  reverse() {}

  traverseToIndex(index) {
    const midPoint = Math.ceil(this.length / 2);

    if (index >= midPoint) {
      return this.backwardTraverse(index);
    }

    return this.forwardTraverse(index);
  }

  forwardTraverse(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  backwardTraverse(index) {
    let count = this.length - 1;
    let currentNode = this.tail;

    while (count !== index) {
      currentNode = currentNode.prev;
      count--;
    }

    return currentNode;
  }

  printList() {
    let listItems = [];
    let currentNode = this.head;

    while (currentNode) {
      listItems.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listItems;
  }
}

const myLinkedList = new DoublyLinkedList(1);
myLinkedList.prepend(0);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.insert(3, 3);
myLinkedList.insert(3, 3);
myLinkedList.remove(3);
console.log(myLinkedList.printList());
myLinkedList.remove(5);
console.log(myLinkedList.printList());
// console.log(myLinkedList.traverseToIndex(0))
