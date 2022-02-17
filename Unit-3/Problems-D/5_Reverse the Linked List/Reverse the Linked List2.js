const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var prev = null
    var cur = head
    while (cur != null) {
        var next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}