function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line]
        line++
        var arr = input[line].split(" ");
        line++;
        output(n, arr);
    }
}
function output(n, arr) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var sum = 0;
        for (var j = 0; j < arr[i].length; j++) {
            sum += +(arr[i][j]);
        }
        res += sum + " "
    } console.log(res);
}

if (process.env.USER === "") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
