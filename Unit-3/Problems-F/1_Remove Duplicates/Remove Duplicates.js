const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var deleteDuplicates = function (head) {
    let temp = head
    while (temp.next != null) {
        if (temp.data == temp.next.data) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head
};