class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertToNode(newNode, currentNode) {
    // go left
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        // insert
        currentNode.left = newNode;
        return this;
      }

      this.insertToNode(newNode, currentNode.left); // continue
      return this;
    }

    // go right
    if (newNode.value > currentNode.value) {
      if (!currentNode.right) {
        // insert
        currentNode.right = newNode;
        return this;
      }

      this.insertToNode(newNode, currentNode.right); // continue
      return this;
    }
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    //Recursive implementation
    // this.insertToNode(newNode, current);

    //Loop Implementation
    while (current) {
      // go left
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        continue;
      }

      // go right
      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
        continue;
      }

      break;
    }
  }

  //____________________________________________________________________//

  findNode(currentNode, value) {
    if (currentNode.value === value) {
      return true;
    }

    if (!currentNode.left && !currentNode.right) {
      return false;
    }

    if (currentNode.value > value) {
      return this.findNode(currentNode.left, value);
    }

    if (currentNode.value < value) {
      return this.findNode(currentNode.right, value);
    }
  }

  find(value) {
    // true | false
    if (this.root === null) return false;

    if (this.root.value === value) return true;

    let current = this.root;

    //Recursive implementation
    return this.findNode(current, value);

    // Loop implementation
    // while (current) {
    //   if (current.value === value) return true;

    //   if (!current.left && !current.right) return false;

    //   if (current.value > value) {
    //     current = current.left;
    //     continue;
    //   }

    //   if (current.value < value) {
    //     current = current.right;
    //     continue;
    //   }

    //   break;
    // }
  }
}

const tree = new BinarySearchTree();
