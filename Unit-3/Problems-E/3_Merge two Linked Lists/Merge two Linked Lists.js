const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
var mergeTwoLists = function (l1, l2) {
    let h1 = l1
    let h2 = l2
    let l3 = new ListNode(-1)
    let h3 = l3
    while (h1 !== null && h2 !== null) {
        if (h1.val <= h2.val) {
            h3.next = h1
            h1 = h1.next
        } else {
            h3.next = h2
            h2 = h2.next
        }
        h3 = h3.next
    }

    if (h1 !== null) {
        h3.next = h1
    }

    if (h2 !== null) {
        h3.next = h2
    }

    return l3.next
};