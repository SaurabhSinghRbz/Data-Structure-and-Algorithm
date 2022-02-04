function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        output(n, k, arr);
    }
}
function output(n, k, arr) {
    var f = 0;
    var i = 0, j = n - 1;
    while (i < j) {
        if (arr[i] + arr[j] > k) {
            j--;
        } else if (arr[i] + arr[j] < k) {
            i++;
        } else if (arr[i] + arr[j] == k) {
            f = 1;
            break;
        }
    }
    if (f == 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
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