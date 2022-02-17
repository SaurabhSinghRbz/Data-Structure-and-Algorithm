const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}
function reverse(head) {
    let arr = []
    while (head !== null) {
        arr.push(head)
        head = head.next
    }
    let new_head = null
    new_head = arr.pop()
    let cur = new_head
    while (arr.length >= 1) {
        let temp = arr.pop()
        cur.next = temp
        cur = temp
    }
    cur.next = null
    return new_head
}