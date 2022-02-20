const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var isPalindrome = function (head) {
    let arr = []
    while (head !== null) {
        arr.push(head.data)
        head = head.next
    }
    var flag = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            flag = 1
        }
    }
    if (flag == 0) {
        return true;
    } else {
        return false;
    }
};