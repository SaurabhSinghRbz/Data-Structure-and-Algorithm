function runProgram(input) {
    var stack = []
    for (var i = 0; i < input.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] == input[i]) {
            stack.pop();
        } else {
            stack.push(input[i])
        }

    }
    if (stack.length == 0) {
        console.log("Empty String")
    } else {
        console.log(stack.join(""))
    }

}
if (process.env.USERNAME === "") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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