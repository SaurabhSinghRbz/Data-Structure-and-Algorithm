const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function insertNodeAtPosition(head, data, position) {
    var My_Node = new LinkedListNode(data)
    if (head == null) {
        head.next == My_Node
        return head;
    } else {
        if (position == 0) {
            My_Node.next = head
            head = My_Node
        } else {
            let temp = head
            for (var i = 0; i < position - 1; i++) {
                temp = temp.next
            }
            My_Node.next = temp.next
            temp.next = My_Node
        }
        return head;
    }
}