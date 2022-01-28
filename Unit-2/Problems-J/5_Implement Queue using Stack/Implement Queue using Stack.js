/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor() {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
        this.S1.push(value)
    }
    pop() {
        if (this.S2.stack.length == 0) {
            while (this.S1.stack.length) {
                this.S2.push(this.S1.stack.pop())
            }

        }
        var x = this.S2.stack.pop();
        return x;
    }
    front() {
        if (this.S2.stack.length == 0) {
            return this.S1.stack[0]
        }
        else {
            return this.S2.stack[this.S2.stack.length - 1]
        }
    }
    isEmpty() {
        return (this.S1.stack.length == 0 && this.S2.stack.length == 0)
    }
}