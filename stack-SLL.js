class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//implement stack using single linked list - LIFO
//in single linked list - unshift, shift, push is O(1), where as pop is O(n):need to find node before last
//it is fast we implement unshift and shift for stack

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    var newNode = new Node(item);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  pop() {
    if (this.length === 0) return false;
    var current = this.head;
    var newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(item) {
    var newNode = new Node(item);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //set the pointer of newNode;
      this.head = newNode; //make this as new head
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return false;
    var originalHead = this.head;
    this.head = originalHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return originalHead;
  }

  traverse() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

var stack = new Stack();
stack.unshift(2);
stack.unshift(3);
stack.unshift(5);
console.log(stack.length);
console.log(stack.traverse());
console.log(stack.shift());
console.log(stack.length);
console.log(stack.traverse());
console.log(stack.shift());
console.log(stack.length);
console.log(stack.traverse());
console.log(stack.shift());
console.log(stack.length);
console.log(stack.traverse());
console.log(stack.shift());
console.log(stack.length);
console.log(stack.traverse());
