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
}
function output(n, arr) {
    var l = 0, r = n - 1, turn = 1, ans = [];
    while (l <= r) {
        if (turn == 1) {
            ans.push(arr[l])
            l++;
        } else {
            ans.push(arr[r])
            r--;
        }
        turn *= -1;
    }
    console.log(ans.join(" "))
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