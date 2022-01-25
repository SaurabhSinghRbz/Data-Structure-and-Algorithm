function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1
    // console.log(t);
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++
        var arr = input[line].split(" ").map(Number);
        arr.sort(function (a, b) { return a - b; });
        line++;
        var k = +input[line];
        line++;
        array(n, arr, k);

    }
} function array(n, arr, k) {
    var result = -Infinity, sum = 0;
    var i = 0, j = n - 1;
    while (i < j) {
        if (arr[i] + arr[j] >= k) {
            j--;
        } else {
            if ((arr[i] + arr[j]) > result) {
                result = arr[i] + arr[j];
            }
            i++;
            sum++;
        }

    }
    if (result != -Infinity) {
        console.log(result)
    }
    if (sum == 0) {
        console.log("-1")
    }
}
if (process.env.USER === "") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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