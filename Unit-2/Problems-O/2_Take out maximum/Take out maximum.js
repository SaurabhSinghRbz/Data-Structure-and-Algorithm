function runProgram(input) {
    var input = input.split('\n')
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    var sum = 0, ans = -Infinity;
    for (var i = 0; i < k; i++) {
        sum += arr[i]
    }
    if (sum > ans) {
        ans = sum;
    }
    for (var i = k; i < n; i++) {
        sum += arr[i];
        sum -= arr[i - k]
        if (sum > ans) {
            ans = sum
        }
    }
    console.log(ans);
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