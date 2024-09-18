class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      return (this.root = newNode);
    } else {
      let currentNode = this.root;

      while (true) {
        if (value === currentNode.value) {
          return;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
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
  }

  lookup(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return null;
  }

  removeX(value) {
    let nodeBeforeNodeToRemove = null;
    let currentNode = this.root;
    let nodeToRemove;

    while (currentNode) {
      const temp = currentNode;

      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        break;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      nodeBeforeNodeToRemove = temp;
    }

    // console.log('Found ', currentNode);
    if (nodeToRemove) {
      let nodeToRight = nodeToRemove.right;
      let nodeToLeft = nodeToRemove.left;

      if (nodeToRight) {
        let leftMostNode = nodeToRight.left;
        let nodeBeforeLeftMostNode = null;

        if (leftMostNode) {
          while (leftMostNode.left) {
            nodeBeforeLeftMostNode = leftMostNode;
            leftMostNode = leftMostNode.left;
          }

          nodeBeforeLeftMostNode.left = leftMostNode.left;

          leftMostNode.left = nodeToRemove.left;
          leftMostNode.right = nodeToRemove.right;
        } else {
          nodeToRight.left = nodeToRemove.left;
        }
      }

      if (this.root.value === value) {
        this.root = leftMostNode;
      } else if (
        nodeBeforeNodeToRemove.right &&
        nodeBeforeNodeToRemove.right.value === value
      ) {
        nodeBeforeNodeToRemove.right = nodeToRemove.right;
      } else if (
        nodeBeforeNodeToRemove.left &&
        nodeBeforeNodeToRemove.left.value === value
      ) {
        nodeBeforeNodeToRemove.left = nodeToRemove.left;
      }
    }
  }

  remove(value) {
    let parentNode = null;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // Case 1: No right child (just bypass the node
        if (!currentNode.right) {
          // If no parent node, we are removing the parent node that has no nodes to the right
          if (!parentNode) {
            this.root = currentNode.left;
          } else if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
          } else if (parentNode.right === currentNode) {
            parentNode.right = currentNode.left;
          }
        }

        // Case 2: Right child that has no left child
        else if (currentNode.right && !currentNode.right.left) {
          if (!parentNode) {
            this.root = currentNode.right;
          } else if (parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
          } else if (parentNode.right === currentNode) {
            parentNode.right = currentNode.right;
          }

          currentNode.right.left = currentNode.left;
        }

        // Case 3: Right child has a left child (find the leftmost node in the right subtree)
        else if (currentNode.right && currentNode.right.left) {
          let parentOfLMN = currentNode.right;
          let leftMostNode = currentNode.right.left;

          while (leftMostNode.left) {
            parentOfLMN = leftMostNode;
            leftMostNode = leftMostNode.left;
          }

          parentOfLMN.left = leftMostNode.right;
          leftMostNode.right = currentNode.right;
          leftMostNode.left = currentNode.left;

          if (!parentNode) {
            this.root = leftMostNode;
          } else if (parentNode.left === currentNode) {
            parentNode.left = leftMostNode;
          } else if (parentNode.right === currentNode) {
            parentNode.right = leftMostNode;
          }
        }

        return true;
      }
    }

    return false;
  }

  printTreeVisual(node = this.root, indent = '', position = 'root') {
    if (node === null) {
      return;
    }

    // Print the current node with indentation
    console.log(`${indent}${position}: ${node.value}`);

    // Add indentation for child nodes and recursively print left and right children
    const newIndent = indent + '    '; // Increase indentation
    this.printTreeVisual(node.left, newIndent, 'left');
    this.printTreeVisual(node.right, newIndent, 'right');
  }
}

const myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);
// myBST.insert(6);

myBST.insert(14);
myBST.insert(19);
myBST.insert(13);

myBST.remove(14);
console.log(myBST.root.right.left);
// myBST.printTreeVisual();
