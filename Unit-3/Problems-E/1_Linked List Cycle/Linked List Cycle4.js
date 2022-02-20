const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function (head) {
    var count = 0;
    let temp = head
    while (temp !== null) {
        if (count > 10) {
            return true;
        }
        count++;
        temp = temp.next
    }
    return false
};