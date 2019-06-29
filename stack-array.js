class Stack {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
    return true;
  }
  pop() {
    if (this.data.length !== 0) {
      return this.data.pop();  
    }
    return false;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

//LIFO - push and pop or unshift and shift
var stack = new Stack();
console.log(stack.push(7));
console.log(stack.push(3));
console.log(stack.push(9));
console.log(stack.pop());
console.log(stack.peek());
