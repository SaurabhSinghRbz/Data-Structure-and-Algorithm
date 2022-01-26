function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].split(" ").map(Number);
    arr.sort((a, b) => (a - b));
    var sum = 0;
    for (var i = 0; i < 2 * n; i = i + 2) {
        if (arr[i] <= arr[i + 1]) {
            sum += arr[i]
        } else {
            sum += arr[i + 1]
        }
    }
    console.log(sum)
}

if (process.env.USER === "") {
    runProgram(`2
    1 3 1 2`);
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