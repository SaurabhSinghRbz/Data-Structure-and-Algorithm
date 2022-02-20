const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// slow and fast pointer approch
var hasCycle = function (head) {
    let slow = head
    let fast = head.next
    while (slow !== null && fast != null && fast.next != null) {
        if (slow.data == fast.data) {
            return true
        } else {
            slow = slow.next
            fast = fast.next.next
        }
    }
    return false
};