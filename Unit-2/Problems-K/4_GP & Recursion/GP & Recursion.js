function runProgram(input) {
    var [n, r] = input.split(" ").map(Number);
    console.log(rec(n, r, 0).toFixed(4))
}
function rec(n, r, i) {
    if (i > n) {
        return 0;
    } else {
        return Math.pow(1 / r, i) + rec(n, r, i + 1)
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