function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var stack = [];
    for (var i = 1; i <= t; i++) {
        if (input[i] == 2) {
            stack.pop();
        } else if (input[i] == 3) {
            if (stack.length == 0) {
                console.log("Empty!")
            } else {
                console.log(stack[stack.length - 1])
            }
        } else {
            var q = input[i].split(" ").map(Number)
            stack.push(q[1])
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