function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line]
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        output(n, arr);
    }
    function output(n, arr) {
        var data = {};
        for (var i = 0; i < n; i++) {
            if (!data[arr[i]]) {
                data[arr[i]] = 1;
            } else {
                data[arr[i]] += 1
            }
        }
        for (key in data) {
            if (data[key] == 1) {
                console.log(key);
            }
        }
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