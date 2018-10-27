class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(node) {
    this.left = node;
  }
  addRight(node) {
    this.right = node;
  }
}
const node_2 = new Node(2);
const node_4 = new Node(4);
const node_5 = new Node(5);
node_2.addLeft(node_4);
node_2.addRight(node_5);

const node_3 = new Node(3);
const node_6 = new Node(6);
const node_7 = new Node(7);
node_3.addLeft(node_6);
node_3.addRight(node_7);

const tree_1 = new Node(1);
tree_1.addLeft(node_2);
tree_1.addRight(node_3);

depth_first = function(tree) {
  let result = "";

  if (!tree.left && !tree.right) {
    return result + tree.value;
  } else {
    result += tree.value;
    if (tree.left) {
      result += depth_first(tree.left);
    }
    if (tree.right) {
      result += depth_first(tree.right);
    }
  }

  return result;
};
let x = depth_first(tree_1);
x;
assert.equal(depth_first(tree_1), "1245367");

breadth_first = function(tree) {
  const queue = [];
  let result = "";

  queue.push(tree);
  while (queue.length > 0) {
    let node = queue.pop();
    result += node.value;
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
  }

  return result;
};
let y = breadth_first(tree_1);
y;
assert.equal(breadth_first(tree_1), "1234567");
