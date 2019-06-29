class Node {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor(){
      this.root = null;
    }
    insert(item){
      var newNode = new Node(item);
      if (this.root === null){
        this.root = newNode;
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
          } else if (item > current.value){
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
    //re-write this find function
    // find(item){
    //   if (this.root === null) {
    //     return false;
    //   } else {
    //     var current = this.root;
    //     while (true) {
    //        if (item === current.value) return true; //stops the loop
    //        if (item < current.value) {
    //          if (current.left !== null) {
    //             current = current.left;
    //          } 
    //        } else if (item > current.value) {
    //          if (current.right !== null) {
    //             current = current.right;
    //          }
    //        }
    //     }
    //     return false;
    //   }
    // }
    //Bread First Search - capture data at each node from left to right horizontally
    breadthfirstseach(){
      var current = this.root;
      var data = [];
      var queue = [];  //FIFO
      queue.push(current);
      while (queue.length) {
        var node = queue.shift();  //start with head, left and right
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data;
    }
    
    //DFS-preOrder: verticaly: left nodes first then right
    DFS_preOrder(){
      var data = [];
      function findall(node){
        if (node.value) data.push(node.value);
        if (node.left) findall(node.left);
        if (node.right) findall(node.right);
      }
      findall(this.root);
      return data;
    }
    //DFS-postOrder: vertically: add node values after visit: opposite to pre
    DFS_postOrder(){
      var data = [];
      function findall(node){
        if (node.left) findall(node.left);
        if (node.right) findall(node.right);
        if (node.value) data.push(node.value);
      }
      findall(this.root);
      return data;
    }
    //DFS-inOrdre: vertically: add nodes after completion of left and then right
    DFS_inOrder(){
      var data = [];
      function findall(node){
        if (node.left) findall(node.left);
        if (node.value) data.push(node.value);
        if (node.right) findall(node.right);
      }
      findall(this.root);
      return data;
    }
  }
  
  // bst
  //       21
  //   11      27
  // 7    19 24    34
  //             31
  
  var bst = new BST();
  bst.insert(21)
  bst.insert(27)
  bst.insert(11)
  bst.insert(19)
  bst.insert(34)
  bst.insert(7)
  bst.insert(24)
  bst.insert(31)
  //console.log(bst.root)
  //console.log(bst.find(19))
  console.log('BFS: '+bst.breadthfirstseach())
  console.log('DFS_preOrdre: '+bst.DFS_preOrder())
  console.log('DFS_postOrdre: '+bst.DFS_postOrder())
  console.log('DFS_inOrdre: '+bst.DFS_inOrder())
  
//   "BFS: 21,11,27,7,19,24,34,31"
//   "DFS_preOrdre: 21,11,7,19,27,24,34,31"
//   "DFS_postOrdre: 7,19,11,24,31,34,27,21"
//   "DFS_inOrdre: 7,11,19,21,24,27,31,34"