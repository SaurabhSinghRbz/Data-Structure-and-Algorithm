const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function insertNodeAtTail(head, data) {

    let myNode = new LinkedListNode(data);
    let temp = head

    if (temp == null) {
        temp = myNode
        return temp;
    } else {
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = myNode;
        return head;
    }

}