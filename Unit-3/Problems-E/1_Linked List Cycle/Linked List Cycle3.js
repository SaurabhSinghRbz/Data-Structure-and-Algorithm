const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.visited = false
    }
};
// modify the LinkedList
var hasCycle = function (head) {
    let temp = head
    while (temp != null) {
        if (temp.visited == true) {
            return true;
        } else {
            temp.visited = true
            temp = temp.next
        }
    }
    return false
};