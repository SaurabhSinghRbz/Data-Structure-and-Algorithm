function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];

    class MySatck {
        constructor() {
            this.stk = [];
            this.length = this.stk.length;
        }
        new_push(ele) {
            this.stk[this.length] = ele;
            this.length = this.length + 1;
        }

        isEmpty() {
            if (this.length == 0) {
                return true;
            } else {
                return false;
            }
        }

        new_pop() {
            if (this.length >= 1) {
                var new_arr = [];
                for (var i = 0; i < this.length - 1; i++) {
                    new_arr.push(this.stk[i])
                }
                this.stk = new_arr;
                this.length = this.length - 1;
                return this.stk;
            }
        }

        peek() {
            return this.stk[this.stk.length - 1]
        }
    }
    var stack = new MySatck()

    for (var i = 1; i <= t; i++) {
        if (input[i] == 2) {
            stack.new_pop();
        } else if (input[i] == 3) {
            if (stack.isEmpty()) {
                console.log("Empty!")
            } else {
                console.log(stack.peek())
            }
        } else {
            var q = input[i].split(" ").map(Number)
            stack.new_push(q[1])
        }
    }
}
if (process.env.USERNAME === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}