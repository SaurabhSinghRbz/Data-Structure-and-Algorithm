function runProgram(input) {
    var input = input.split("\n");
    var line = 0;
    var pointers = input[line].split(" ").map(Number);
    var n = pointers[0],
        k = pointers[1];
    line++;
    var arr = input[line].split(" ").map(Number);
    var sum = 0,
        ans = -Infinity;
    for (var i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum > ans) {
        ans = sum;
    }
    for (var i = k; i < n; i++) {
        sum += arr[i];
        sum -= arr[i - k];
        if (ans < sum) {
            ans = sum
        }
    } console.log(ans);
}
if (process.env.USER === "") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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