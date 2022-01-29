function runProgram(input) {
    var n = +input
    rec(n);
    console.log(rec(n))
}
function rec(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else if (n == 2) {
        return 2
    } else {
        return rec(n - 1) + rec(n - 2) + rec(n - 3)
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