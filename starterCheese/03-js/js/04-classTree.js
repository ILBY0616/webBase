class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    static createBinaryTree = function (datas) {
        let nodes = [];
        for (let i in datas) {
            if (datas[i] !== undefined) {
                nodes[i] = new Node(datas[i]);
                if (i > 0) {
                    if (i % 2 === 1) {
                        nodes[(i - 1) / 2].left = nodes[i];
                    } else {
                        nodes[(i - 2) / 2].right = nodes[i];
                    }
                }
            }
        }
        return nodes[0];
    };
    * preOrder() {
        yield this;
        if (this.left !== null) {
            for (let node of this.left.preOrder()) {
                yield node;
            }
        }
        if (this.right !== null) {
            for (let node of this.right.preOrder()) {
                yield node;
            }
        }
    }
    * inOrder() {
        if (this.left !== null) {
            for (let node of this.left.inOrder()) {
                yield node;
            }
        }
        yield this;
        if (this.right !== null) {
            for (let node of this.right.inOrder()) {
                yield node;
            }
        }
    }
    * postOrder() {
        if (this.left !== null) {
            for (let node of this.left.postOrder()) {
                yield node;
            }
        }
        if (this.right !== null) {
            for (let node of this.right.postOrder()) {
                yield node;
            }
        }
        yield this;
    }
    * levelOrder() {
        if (!this) return;
        let queue = [this];
        while (queue.length > 0) {
            let currentNode = queue.shift();
            yield currentNode;
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
    [Symbol.iterator] = this.levelOrder
}
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

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 2);
    return x + y + z;
}
var b = foo(5);
b.next();
b.next(12);
console.log(b.next(13).value);