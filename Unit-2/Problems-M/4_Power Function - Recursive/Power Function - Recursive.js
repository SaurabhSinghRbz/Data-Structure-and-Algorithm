function runProgram(input) {
    var [a, b] = input.split(" ").map(Number);
    console.log(recOutput(a, b, 1))
}
function recOutput(a, b, i) {
    if (i > b) {
        return 1;
    } else {
        return a * recOutput(a, b, i + 1)
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