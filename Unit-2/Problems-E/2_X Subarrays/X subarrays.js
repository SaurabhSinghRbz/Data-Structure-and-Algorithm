function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k, x] = input[line].split(" ").map(Number);
        line++
        var arr = input[line].split(" ").map(Number);
        line++;
        output(n, k, x, arr);
    }
}
function output(n, k, x, arr) {
    var count = 0;
    var ans = 0;
    for (var i = 0; i < x; i++) {
        if (arr[i] > k) {
            count++;
        }
    }
    if (count == 0) {
        ans++;
    }
    for (var i = x; i < n; i++) {
        if (arr[i] > k) {
            count++;
        } if (arr[i - x] > k) {
            count--;
        }
        if (count == 0) {
            ans++;
        }
    } console.log(ans);
}

if (process.env.USER === "") {
    runProgram(`1
    5 3 2
    1 3 2 5 1`);
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