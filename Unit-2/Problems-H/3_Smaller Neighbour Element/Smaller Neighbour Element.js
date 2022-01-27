function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var array = newInput[1].split(" ").map(Number);

    output(n, array);
}
function output(n, array) {
    var stack = [],
        result = "";
    for (var i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result += "-1" + " ";
        } else {
            result += stack[stack.length - 1] + " ";
        }

        stack.push(array[i]);
    }
    console.log(result);
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