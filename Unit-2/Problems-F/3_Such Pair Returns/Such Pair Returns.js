function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        arr.sort(function (a, b) {
            return a - b;
        })
        output(n, k, arr);
    }
}
function output(n, k, arr) {
    var count = 0;
    var i = 0, j = n - 1;
    while (i < j) {
        if (arr[i] + arr[j] == k) {
            count++;
            break;
        } else if (arr[i] + arr[j] > k) {
            j--;
        } else {
            i++;
        }
    }
    if (count == 1) {
        console.log(1)
    } else {
        console.log(-1)
    }
}

if (process.env.USER === "") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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
}//Ente