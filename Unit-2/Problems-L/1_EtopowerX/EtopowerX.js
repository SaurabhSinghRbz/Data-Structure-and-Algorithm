function runProgram(input) {
    var [x, n] = input.split(" ").map(Number);

    console.log(rec(n, x, 0).toFixed(4))
}
function rec(n, x, i) {
    if (i > n) {
        return 0;
    } else {
        return (Math.pow(x, i)) / gettingFact(i) + rec(n, x, i + 1)
    }
}
function gettingFact(i) {
    if (i == 1 || i == 0) {
        return 1
    } else {
        return i * gettingFact(i - 1);
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