function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1
    // console.log(t);
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++
        var arr = input[line].split(" ").map(Number);
        line++;
        array(n, arr);

    }
} function array(n, arr) {
    var sum = 0, result = "";
    for (var i = 0; i < n; i++) {
        sum += arr[i];
        result += sum + " "
    }
    console.log(result)
}
if (process.env.USER === "") {
    runProgram(`1
    5
    1 2 3 4 5`);
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
}//