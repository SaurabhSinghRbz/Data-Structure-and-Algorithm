function runProgram(input) {
    var input = input.split(" ")
    var str = input[0]
    var n = +input[1]
    var newStr = 0;
    for (var i = 0; i < str.length; i++) {
        newStr += +str[i];
    }
    var N = n * newStr
    console.log(recursiveSum(N));

}
function recursiveSum(N) {
    var ans = 0;
    if (N < 10) {
        return N;
    } else {
        while (N > 0) {
            ans += N % 10
            N = Math.floor(N / 10);
        }
    }
    return recursiveSum(ans)
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