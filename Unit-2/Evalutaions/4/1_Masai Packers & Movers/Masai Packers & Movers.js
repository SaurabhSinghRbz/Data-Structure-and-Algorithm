function runProgram(input) {
    var input = input.split('\n')
    var [k, n] = input[0].trim(" ").split(" ").map(Number)
    var arr = input[1].trim(" ").split(" ").map(Number);
    console.log(output(n, arr, k));
}
function output(n, arr, k) {
    if (k == 0) {
        return 1;
    } if (k < 0) {
        return 0;
    }
    var ans = 0;
    for (var i = 0; i < n; i++) {
        ans += output(n, arr, k - arr[i])
    }
    return ans
}
if (process.env.USERNAME === "Saurabh Singh") {
    runProgram(`3 3
1 2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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
