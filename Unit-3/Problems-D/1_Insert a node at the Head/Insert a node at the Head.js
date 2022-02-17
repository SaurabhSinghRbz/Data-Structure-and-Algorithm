const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function insertNodeAtHead(head, data) {
    let My_Node = new LinkedListNode(data)
    My_Node.next = head
    head = My_Node
    return head;
}