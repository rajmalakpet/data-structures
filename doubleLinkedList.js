class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
//head null <--[prev pointer,data,next pointer] -> <- [prev pointer,data, next pointer] -><- tail [prev pointer,data, next pointer -> (null)]
class doubleLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //add items at the end
    push(item){
        var newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;           //set the newNode item as the next to tail
            newNode.prev = this.tail;           //for doubleLL prev pointer to original tail
            this.tail = newNode;                //make the newNode as a current tail
        }
        this.length++;
        return this;
    }
    //pop - remove the last item
    pop(){
        if (this.length === 0) return false;        //nothing to delete 
        var poppedNode = this.tail;                 //last node or original tail
        if (this.length === 1) {                    //if list has 1 node
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;            //make the new tail as last but one node: via prev
            this.tail.next = null;                  //set the pointer to next to null
            poppedNode.prev = null;                 //severe the pointer prev on the poppedNode to stop references
        }
        this.length--;
        return poppedNode;
    }
    //shift - remove the first node
    shift(){
        if (this.length === 0) return false;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    //unshift - add item at the beginning
    unshift(item){
        var newNode = new Node(item);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //get item by index: for dll eiter start from beginning or from last
    get(index){
        if (index < 0 || index >= this.length) return false;
        var count, current;
        if (index <= this.length/2) {
            console.log('working from head');
            count = 0;
            current = this.head;
            while (count != index) {
                count++;
                current = current.next;
            }
            return current;
        } else {
            console.log('working from tail')
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                count--;
                current = current.prev;
            }
            return current;
        }
    }
    //set - set a value at an index
    set(index, value){
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    //insert - insert value at an index: dll: four path work 
    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        var newNode = new Node(value);
        var beforeNode = this.get(index - 1);             //access node before target node for linking
        var afterNode = beforeNode.next;                  //afterNode is the original next Node
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return this;
    }
    //remove - remove a node by index
    remove(index){
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        var beforeNode = this.get(index -1);
        var targetNode = beforeNode.next;
        var afterNode = targetNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        targetNode.next = null;
        targetNode.prev = null;
        this.length--;
        return targetNode;
    }
    //traverse - to see the values in dll
    traverse(){
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(current.value);
            count++;
            current = current.next;
        }
        return arr;
    }
    reverse(){
        if (this.length === 0) return false;
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        while (node) {
            var prev = node.prev;
            node.prev = node.next;
            node.next = prev; 
            node = node.prev;
        }
        return this;
    }
    
}

var dll = new doubleLL();
dll.push(2);
dll.push(4);
dll.push(6);
dll.push(11);
dll.push(45);
console.log(dll.traverse())