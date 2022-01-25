function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0];
    var arr = input[1].split(" ")
    var result = ""
    for (var i = 0; i < n; i++) {
        if (Number(arr[i]) < 0) {
            result += '0'
        } else {
            result += arr[i]
        }
    }
    console.log(result);
}
if (process.env.USER === "Saurabh Singh") {
    runProgram(`5
    2 -4 6 8 -9`);
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