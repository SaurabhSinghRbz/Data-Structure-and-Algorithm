function runProgram(input) {
    var input = input.split('\n')
    var [n, k] = input[0].split(" ").map(Number)
    var arr = input[1].split(" ").map(Number)
    arr.sort(function (a, b) {
        return a - b;
    });
    let l = 0, r = n - 1, f = -1;
    while (l <= r) {
        var mid = l + parseInt((r - l) / 2)
        if (arr[mid] == k) {
            f = 1
            break;
        } else if (arr[mid] > k) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    console.log(f)
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