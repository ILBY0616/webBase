const Node = require('./06-binaryTree.js');
let root = Node.createBinaryTree(
    ['A', 'B', 'C', , , 'D', 'E', , , , , , , 'F', 'G']
);
console.log('先序遍历');
for (let node of root.preOrder()) {
    console.log(node.data);
}
console.log('中序遍历');
for (let node of root.inOrder()) {
    console.log(node.data);
}
console.log('后序遍历');
for (let node of root.postOrder()) {
    console.log(node.data);
}
console.log('层序遍历');
for (let node of root.levelOrder()) {
    console.log(node.data);
}
console.log('默认遍历');
for (let node of root) {
    console.log(node.data);
}