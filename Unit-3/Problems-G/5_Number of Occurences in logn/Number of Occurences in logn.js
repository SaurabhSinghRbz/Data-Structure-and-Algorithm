var count = 0;
function runProgram(input) {
    var input = input.split("\n");
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    arr.sort(function (a, b) {
        return a - b;
    });
    output(0, arr.length - 1, arr, k);
    console.log(count);
}

function output(low, high, arr, k) {
    if (low <= high) {
        var mid = parseInt((high + low) / 2);
        if (arr[mid] == k) {
            count++;
        }
        if (count == 0) {
            if (arr[mid] > k) {
                return output(low, mid - 1, arr, k);
            } else {
                return output(mid + 1, high, arr, k);
            }
        } else {
            if (arr[mid - 1] == k) {
                output(low, mid - 1, arr, k);
            }
            if (arr[mid + 1] == k) {
                output(mid + 1, high, arr, k);
            }
        }
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