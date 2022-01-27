function runProgram(input) {
    var newInput = input.split("\n");
    var t = +newInput[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var array = newInput[line].split("");
        var n = array.length;
        line++;
        output(n, array);
    }
}
function output(n, array) {
    var stack = [];
    for (var i = 0; i < n; i++) {
        if (array[i] !== '#') {
            stack.push(array[i])
        } else {
            stack.pop();
        }
    }
    console.log(stack.join(''));
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