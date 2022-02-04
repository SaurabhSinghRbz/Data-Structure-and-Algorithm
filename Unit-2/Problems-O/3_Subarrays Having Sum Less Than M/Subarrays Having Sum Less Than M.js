function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0]
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, m] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        output(arr, n, m)
    }
}
function output(arr, n, m) {
    var left = 0
    var right = 0
    var sum = arr[0]
    var count = 0
    while (left < n && right < n) {
        if (sum < m && right < n) {
            count += (right - left + 1)
            right++
            if (right < n) {
                sum += arr[right]
            }
        } else {
            sum -= arr[left]
            left++
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