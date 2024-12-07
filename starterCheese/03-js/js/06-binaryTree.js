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
module.exports = Node;