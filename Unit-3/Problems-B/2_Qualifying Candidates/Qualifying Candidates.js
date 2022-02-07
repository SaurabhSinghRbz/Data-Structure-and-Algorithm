function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        output(n, k, arr)
    }
}
function output(n, k, arr) {
    var cur_rank = 1
    var count = 1
    arr.sort(function (a, b) {
        return b - a;
    });

    for (var i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1]) {
            if (cur_rank < k) {
                count++
            }
        } else {
            cur_rank = i + 1
            if (cur_rank < k) {
                count++
            }
        }
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