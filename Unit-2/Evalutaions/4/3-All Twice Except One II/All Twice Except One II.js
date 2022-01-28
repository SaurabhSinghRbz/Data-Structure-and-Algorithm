function runProgram(input) {
    var input = input.split("\n")
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++;
        var arr = input[line].split(" ").map(Number)
        line++
        console.log(output(n, arr));

    }
    function output(n, arr) {
        arr.sort(function (a, b) {
            return a - b;
        })
        var stk = [];
        stk.push(arr[0])
        for (var i = 1; i < 2 * n - 1; i++) {
            if (stk.length > 0) {
                if (stk[0] == arr[i]) {
                    stk.shift()
                } else {
                    stk.push(arr[i])
                    stk.reverse()
                }

            } else {
                stk.push(arr[i])
            }
        }

        return stk[0];

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