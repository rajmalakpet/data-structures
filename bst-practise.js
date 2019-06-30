//binary search tree
//insert(), find() : else while 
//traverse: BFS: queue
//traverse: DFS: preordre, postordre, inorder

//    11
//  7    23
//3   9 19  28
//   8

class Node {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    } 
    insert(item){
      var newNode = new Node(item);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (item === current.value) return null;
          if (item < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if (item > current.value) {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
    //find if value exists in bst
    find(item){
      if (this.root === null) {
        return false;
      } else {
        var current = this.root;
        while (true) {
          if (item === current.value) return true;
          if (item < current.value) {
            if (current.left !== null) {
              current = current.left;
            }
          } else if (item > current.value) {
            if (current.right !== null) {
              current = current.right;
            }
          }
        }
        return false;
      }
    }
    //traverse: Breadth first search: horizontal 1 level down
    //every iteration: checks if node has left and right and adds to queue
    //[11,7,23,3,9,19,28,8]
    BFS(){
      var current = this.root;
      var data = [], queue = [];
      queue.push(current);
      while (queue.length) {
        var node = queue.shift();
        data.push(node.value);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
      return data;
    }
    //Depth first search - preOrder: visit all left nodes first, add as you visit
    DFS_preOrder(){
      var current = this.root;
      var data = [];
      function traverse(node){
        data.push(node.value);
        if (node.left !== null) traverse(node.left);
        if (node.right !== null) traverse(node.right);
      }
      traverse(current);
      return data;
    }
    DFS_postOrder(){
      var current = this.root;
      var data = [];
      function traverse(node){
        if (node.left !== null) traverse(node.left);
        if (node.right !== null) traverse(node.right);
        data.push(node.value);
      }
      traverse(current);
      return data;
    }
    DFS_inOrder(){
      var current = this.root;
      var data = [];
      function traverse(node){
        if (node.left !== null) traverse(node.left);
        data.push(node.value);
        if (node.right !== null) traverse(node.right);
      }
      traverse(current);
      return data;
    }
  }
  
  var bst = new BinarySearchTree();
  console.log(bst.insert(11))
  console.log(bst.insert(7))
  console.log(bst.insert(23))
  console.log(bst.insert(3))
  console.log(bst.insert(9))
  console.log(bst.find(24))
  console.log(bst.BFS())
  console.log(bst.DFS_preOrder())
  console.log(bst.DFS_postOrder())
  console.log(bst.DFS_inOrder())
  