const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }
  root() {
    return this.mainRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.mainRoot) {
      this.mainRoot = newNode;
      return;
    }

    let currentNode = this.mainRoot;

    while(currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.mainRoot;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
  
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  
    return false;
  }

  find(data) {
    let currentNode = this.mainRoot;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
  
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  
    return null;
  }

  remove(data) {
    let currentNode = this.mainRoot;
    let parentNode = null;

    while (currentNode && currentNode.data !== data) {
      parentNode = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!currentNode) {
      return;
    }

    if (!currentNode.left && !currentNode.right) {
      if (currentNode === this.mainRoot) {
        this.mainRoot = null;
      } else if (currentNode === parentNode.left) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }
    else if (!currentNode.left || !currentNode.right) {
      const childNode = currentNode.left ? currentNode.left : currentNode.right;
      if (currentNode === this.mainRoot) {
        this.mainRoot = childNode;
      } else if (currentNode === parentNode.left) {
        parentNode.left = childNode;
      } else {
        parentNode.right = childNode;
      }
    }
    else {
      let minNode = currentNode.right;
      let minParentNode = currentNode;

      while (minNode.left) {
        minParentNode = minNode;
        minNode = minNode.left;
      }

      currentNode.data = minNode.data;

      if (minNode === currentNode.right) {
        currentNode.right = minNode.right;
      } else {
        minParentNode.left = minNode.right;
      }
    }
  }


  min() {
    if (!this.mainRoot) {
      return false;
    }

    let currentNode = this.mainRoot;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.mainRoot) {
      return false;
    }

    let currentNode = this.mainRoot;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};