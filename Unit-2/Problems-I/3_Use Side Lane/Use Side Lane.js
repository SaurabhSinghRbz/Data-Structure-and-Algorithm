function runProgram(input) {
    var input = input.split("\n");
    var line = 0
    while (true) {
        var n = +input[line];
        line++;
        if (n == 0) {
            break;
        }
        var arr = input[line].split(" ").map(Number);
        line++;
        var stack = [];
        var current_number = 1
        var i = 0;
        while (i < n) {
            if (arr[i] == current_number) {
                current_number++
                while (stack[stack.length - 1] == current_number) {
                    stack.pop();
                    current_number++;
                }
            } else {
                stack.push(arr[i])
            }
            i++;
        }
        if (stack.length == 0) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }
}
if (process.env.USER === "") {
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