function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++;
        var str = input[line]
        line++
        console.log(output(str));
    }
}
function output(str) {
    if (str == "") {
        return "";
    } if (str.length == 1) {
        return str;
    } else {
        var mid = Math.floor((str.length - 1) / 2)
        return str[mid] + output(str.slice(0, mid)) + output(str.slice(mid + 1))
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
