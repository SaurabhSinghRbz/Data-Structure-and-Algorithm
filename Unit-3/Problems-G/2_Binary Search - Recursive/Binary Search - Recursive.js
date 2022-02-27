function runProgram(input) {
    var input = input.split('\n')
    var [n, k] = input[0].split(" ").map(Number)
    var arr = input[1].split(" ").map(Number)
    arr.sort(function (a, b) {
        return a - b;
    });
    var res = output(0, arr.length - 1, arr, k)
    console.log(res)
}

function output(low, high, arr, k) {
    if (low <= high) {
        var mid = parseInt((high + low) / 2)
        if (arr[mid] == k) {
            return 1
        } else {
            if (arr[mid] > k) {
                return output(low, mid - 1, arr, k)
            } else {
                return output(mid + 1, high, arr, k)
            }
        }
    }
    return -1
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