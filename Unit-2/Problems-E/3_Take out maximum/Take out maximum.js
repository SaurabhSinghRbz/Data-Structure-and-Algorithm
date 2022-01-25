function runProgram(input) {
    var input = input.split("\n");
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);

    output(n, k, arr);
}
function output(n, k, arr) {
    var sum = 0,
        result = 0;
    for (var i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum > result) {
        result = sum;
    }
    for (var i = k; i < n; i++) {
        sum += arr[i];
        sum -= arr[i - k];
        if (sum > result) {
            result = sum;
        }
    }
    console.log(result);
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
