function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var str = input[1].split("");
    var stack = [];
    for (var i = 0; i < n; i++) {
        if (str[i] == stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(str[i])
        }
    }
    if (stack.length == 0) {
        console.log(-1)
    } else {
        console.log(stack.join(""));
    }

}
if (process.env.USER === "") {
    runProgram(`12
    abbabaadcbbc`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}