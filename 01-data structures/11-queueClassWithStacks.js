class Queue {
  constructor() {
    this.inputOrder = [];
    this.outputOrder = [];
  }

  peek() {
    return this.outputOrder.length > 0
      ? this.outputOrder[this.outputOrder.length - 1]
      : this.inputOrder[0];
  }

  enqueue(value) {
    this.inputOrder.push(value);

    return this;
  }

  dequeue() {
    if (this.outputOrder.length === 0 && this.inputOrder.length !== 0) {
      const length = this.inputOrder.length;
      for (let i = 0; i < length; i++) {
        this.outputOrder.push(this.inputOrder.pop());
        console.log(this.outputOrder);
      }
    }

    this.outputOrder.pop();
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

myQueue.dequeue();

myQueue.enqueue(6);
myQueue.enqueue(7);

myQueue.dequeue();

console.log(myQueue);
