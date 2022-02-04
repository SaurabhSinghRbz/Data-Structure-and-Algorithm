function runProgram(input) {
    var input = input.split('\n')
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    output(n, k, arr)
}
function output(n, k, arr) {
    var r = 1, count = 0;
    for (var l = 0; l < n; l++) {
        while (r < n && arr[r] - arr[l] <= k) {
            r++;
        }
        var choose = r - l - 1
        count += (choose * (choose - 1)) / 2
    }
    console.log(count);
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