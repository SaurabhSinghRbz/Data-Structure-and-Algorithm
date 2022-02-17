const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head, n) {
    var count = 0
    let temp = head
    while (temp !== null) {
        count++
        temp = temp.next
    }
    let N = (count - n) + 1
    for (var i = 1; i < N; i++) {
        head = head.next
    }
    // head.next = null
    return head.data
}