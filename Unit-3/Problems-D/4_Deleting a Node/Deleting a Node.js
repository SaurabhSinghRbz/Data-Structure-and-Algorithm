const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function deleteNode(head, position) {
    if (position == 0) {
        head = head.next
    } else {
        let temp = head
        for (let i = 0; i < position - 1; i++) {
            temp = temp.next
        }
        let cur = temp.next
        temp.next = cur.next
    }
    return head;
}