const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function (head) {
    var count = 0
    let temp = head
    while (temp !== null) {
        count++
        temp = temp.next
    }
    let N = 0;
    if (count % 2 == 0) {
        N = count / 2 + 1
    } else {
        N = (count + 1) / 2
    }
    for (var i = 1; i < N; i++) {
        head = head.next
    }
    return head.data
};