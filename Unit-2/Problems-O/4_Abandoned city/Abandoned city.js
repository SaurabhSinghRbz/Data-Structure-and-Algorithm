function runProgram(input) {
    var input = input.split('\n')
    var t = +input[0]
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        output(arr, n, k)
    }
}
function output(arr, n, k) {
    var left = 0, right = 0, sum = arr[0];
    var min_len = 100005;
    while (left < n && right < n) {
        if (sum >= k) {
            if (right - left + 1 < min_len) {
                min_len = right - left + 1
            }
            sum -= arr[left]
            left++
            if (left > right) {
                right = left
                if (left < n) {
                    sum = arr[left]
                }
            }
        } else {
            right++
            if (right < n) {
                sum += arr[right]
            }
        }
    }

    if (min_len == 100005) {
        console.log(-1)
    } else {
        console.log(min_len)
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