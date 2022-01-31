function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0];
    for (var i = 1; i <= t; i++) {
        var n = +input[i]
        if (rec(n, 1) == true) {
            console.log("Yes")
        } else {
            console.log("No")
        }
        // console.log(rec(n,1))
    }
}
function rec(n, i) {
    if (i == n) {
        return true;
    }
    if (i > n) {
        return false;
    }
    else {
        return rec(n, i * 10) || rec(n, i * 20)
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