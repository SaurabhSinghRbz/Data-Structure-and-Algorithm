function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].split(" ").map(Number);
    var xEven = 0, yodd = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            xEven += arr[i]
        } else {
            yodd += arr[i]
        }
    }
    console.log((2 * (xEven)) + (3 * (yodd)));

}
if (process.env.USER === "") {
    runProgram(`5
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
}