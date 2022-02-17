const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function deleteNode(node) {
    let cur = node.next
    if (cur == null) {
        node = null
    } else {
        node.data = cur.data
        node.next = cur.next
    }
}