var sum = 0;
function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0];
    for (var i = 1; i <= t; i++) {
        var n = +input[i];
        sum = 0;
        output(n);
        console.log(sum);

    }
}
function output(n) {
    if (n == 0) {
        sum += 1
    } if (n < 0) {
        return 0;
    }
    else {
        return output(n - 1) || output(n - 2) || output(n - 5)
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
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}