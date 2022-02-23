const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    var l3 = new ListNode();
    var h1 = l1;
    var h2 = l2;
    var h3 = l3;
    var carry = 0;
    while (h1 !== null && h2 !== null) {
        let h = new ListNode(h1.val + h2.val + carry);
        if (h.val >= 10) {
            h.val = h1.val + h2.val + carry - 10;
            carry = 1;
        } else {
            h.val = h1.val + h2.val + carry;
            carry = 0;
        }
        h3.next = h;

        h1 = h1.next;
        h2 = h2.next;
        h3 = h3.next
    }
    while (h1 !== null) {
        let h = new ListNode(h1.val + carry);
        if (h.val >= 10) {
            h.val = h1.val + carry - 10;
            carry = 1;
        } else {
            h.val = h1.val + carry;
            carry = 0;
        }
        h3.next = h;
        h1 = h1.next;
        h3 = h3.next
    }
    while (h2 !== null) {
        let h = new ListNode(h2.val + carry);
        if (h.val >= 10) {
            h.val = h2.val + carry - 10;
            carry = 1;
        } else {
            h.val = h2.val + carry;
            carry = 0;
        }
        h3.next = h;
        h2 = h2.next;
        h3 = h3.next;
    }
    return l3.next;
};