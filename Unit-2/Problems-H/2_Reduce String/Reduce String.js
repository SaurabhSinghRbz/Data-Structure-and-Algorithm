function runProgram(input) {
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
            if (this.length > 0) {
                var z = this.stk[this.length - 1]
                delete this.stk[this.length - 1]
                this.length--;
                return z;
            } else {
                return undefined;
            }

        }

        peek() {
            return this.stk[this.stk.length - 1]
        }
    }
    var stack = new MySatck()
    for (var i = 0; i < input.length; i++) {
        if (stack.length > 0 && stack.peek() == input[i]) {
            stack.new_pop();
        } else {
            stack.new_push(input[i])
        }

    }
    if (stack.isEmpty()) {
        console.log("Empty String")
    } else {
        var arr = []
        while (stack.length > 0) {
            var z = stack.new_pop()
            arr.push(z)
        }
        console.log(arr.reverse().join(""))
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