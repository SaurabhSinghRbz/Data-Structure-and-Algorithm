const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var hasCycle = function (head) {
    let obj = {}
    let temp = head
    while (temp !== null) {
        if (temp.data in obj) {
            return true
        } else {
            obj[temp.data] = 1
            temp = temp.next
        }
    }
    return false
};