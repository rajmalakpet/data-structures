class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
    return true;
  }
  remove() {
    if (this.data.length !== 0) {
      return this.data.pop();
    }
    return false;
  }
}

//Queue - FIFO
//unshift and pop or push and shift, both operations are expensive, re-indexing is required

var queue = new Queue();
console.log(queue.add(4));
console.log(queue.remove());
console.log(queue.remove());
