function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].split(" ").map(Number)
    rec(n, arr)
    console.log(arr.join(" "))
}
function rec(n, arr) {
    if (n == 1) {
        return
    }
    for (var i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    return rec(n - 1, arr)
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