class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  pop() {
    if (this.length < 1) {
      return;
    }

    if(this.top === this.bottom){
      this.bottom = null
    }

    const temp = this.top;

    this.top = this.top.next;
    this.length--;

    return temp.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return;
  }

  peek() {
    return this.top.value ? this.top.value : '';
  }

  isEmpty() {
    return this.length === 0 && true;
  }

  printStack() {
    let currentNode = this.top;

    while (currentNode) {
      console.log(`|_ ${currentNode.value} _|`);
      currentNode = currentNode.next;
    }

    console.log(this)
  }
}

class StackwArr {
  constructor(){
    this.data = [];
  }

  pop() {
    return this.data.pop()
    // if(this.data.length === 0){
    //   this.data = []
    // }
  }

  push(value) {
    this.data.push(value)
  }

  peek() {
    return this.data[this.data.length-1];
  }

  isEmpty() {
    return this.data.length === 0 && true;
  }

  printStack() {
    let count = 0

    while (count < this.data.length) {
      console.log(`|_ ${this.data[count]} _|`);
      count++
    }

    console.log(this)
  }
}

const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('reddit');
// myStack.push('stack overflow');
// console.log(myStack.pop());
// myStack.printStack();


const myStack2 = new StackwArr();
myStack2.push('google');
myStack2.push('udemy');
myStack2.push('reddit');
myStack2.push('stack overflow');
console.log(myStack2.pop());
console.log(myStack2.pop());
console.log(myStack2.pop());
console.log(myStack2.pop());
myStack2.printStack();




