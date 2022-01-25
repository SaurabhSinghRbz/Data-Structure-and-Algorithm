function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr2 = input[line].split(" ").map(Number);
        line++;
        output(n, arr1, arr2);
    }
}
function output(n, arr1, arr2) {
    var count = 0;
    var i = 0, j = n - 1;
    while (i < n && j >= 0) {
        if (arr1[i] == arr2[j]) {
            count++;
            i++;
            j--;
        } else if (arr1[i] > arr2[j]) {
            j--;
        } else {
            i++;
        }
    }
    console.log(count);
}

if (process.env.USER === "") {
    runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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