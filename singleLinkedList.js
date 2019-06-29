class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  //head [data,next pointer] -> [data, next pointer] -> tail [data, next pointer (null)]
  class LL {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    //inserting a value at the end: tail
    push(item){
      var newNode = new Node(item);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;   //set the newNode item as next for tail
        this.tail = newNode;        //move the tail pointer to newNode so that next item can be referenced from here
      }
      this.length++;
      return this;
    }
    //traverse the ll for values stored
    traverse(){
      var arr = [];
      var current = this.head;
      while(current) {
        //console.log(current.value);
        arr.push(current.value);
        current = current.next;
      }
      return console.log(arr);
    }
    //pop - remove the tail and reassign lastbutone item as tail
    pop(){
      if (this.length === 0) return -1
      var current = this.head;
      var newtail = current;  
      while (current.next) {
        newtail = current;
        current = current.next;
      }
      this.tail = newtail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
    //shift - remove the first element (head) of the list and reassign the next as head
    shift(){
      if (this.length === 0) return -1
      var current = this.head;
      this.head = current.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return current;
    }
    //unshift - add a new time at the beginning of the list and make it as head
    unshift(item){
      var newNode = new Node(item);
      if (!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;     //set the next for new time 
        this.head = newNode;          //set the pointer head for newNode;
      }
      this.length++
      return this;
    }
    //get - return the value of item at specified index
    get(index){
      if (index < 0 || index >= this.length) return -1;
      var counter = 0;
      var current = this.head;
      while (counter <= index) {
        if (counter === index) {
          return current
        }
        counter++;
        current = current.next;
      }
      return -1
    }
    //set - set the value at particular index
    set(index, val){
      if (index < 0 || index >= this.length) return -1
      var counter = 0;
      var current = this.head;
      while (counter <= index) {
        if (counter === index) {
          current.value = val;
          return true;
        }
        counter++;
        current = current.next;
      }
      return false;
    }
    //insert - at beginning (unshift), at last (pop), middle - traverse and find
    insert(index, val){
      if (index < 0 || index > this.length) return -1;
      if (index === 0) return this.unshift(val);
      if (index === this.length) return this.push(val);
      var newNode = new Node(val);
      var prev = this.get(index - 1);
      var after = prev.next;
      prev.next = newNode;
      newNode.next = after;
      this.length++;
      return this;
    }
    //remove - at some index
    remove(index){
        if (index < 0 || index >= this.length) return -1;
        if (index === 0 ) return this.shift();
        if (index === this.length - 1) return this.pop() 
        var prev = this.get(index-1);     //access prev element before target
        var target = prev.next;           //access target and return
        prev.next = target.next;
        this.length--;
        return target;
    }
    //reverse sll - with same node: [5,22,7,9,34]
    reverse(){
      var node = this.head;           //create temp variable
      this.head = this.tail;          //swap head and tail
      this.tail = node;               //swap tail and head
      var prev = null;                //on start prev is null on head 
      var next;                       //assign inside loop
      for (var i=0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
  
  }
  
  var ll = new LL();
  console.log(ll.push(5));
  console.log(ll.push(7));
  console.log(ll.push(9));
  //console.log(ll.set(1, 'hello'));
  //console.log(ll.get(1));
  console.log(ll.insert(1,22));
  console.log(ll.insert(4,34))
  //console.log(ll.remove(3));
  console.log(ll.reverse());
  ll.traverse();