const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var addOneToLinkedList = function (head) {
    let new_head = reverse_Node(head);
    let new_temp = new_head
    while (new_temp !== null) {
        if ((new_temp.data + 1) <= 9) {
            new_temp.data = new_temp.data + 1
            break;
        } else if ((new_temp.data + 1) > 9) {
            new_temp.data = 0
            new_temp = new_temp.next
        }
    }
    let new_head2 = reverse_Node(new_head)
    if (new_head2.data == 0) {
        new_head2.data = new_head2.data + 10
    }
    return new_head2
};

function reverse_Node(head) {
    let arr = []
    while (head !== null) {
        arr.push(head)
        head = head.next
    }
    let new_head = null
    new_head = arr.pop()
    let cur = new_head
    while (arr.length >= 1) {
        let temp = arr.pop()
        cur.next = temp
        cur = temp
    }
    cur.next = null
    return new_head;
}