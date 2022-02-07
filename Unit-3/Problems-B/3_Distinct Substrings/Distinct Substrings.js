function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1
    for (var i = 0; i < t; i++) {
        var n = +input[line]
        line++;
        var str = input[line].trim()
        line++;
        output(n, str);
    }
}
function output(n, str) {
    var data = {};
    for (var i = 0; i < n; i++) {
        var sub_str = ""
        for (var j = i; j < n; j++) {
            sub_str += str[j]
            if (!data[sub_str]) {
                data[sub_str] = 1;
            } else {
                data[sub_str] += 1
            }
        }
    }
    var count = 0;
    for (key in data) {
        count++
    }
    console.log(count)
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