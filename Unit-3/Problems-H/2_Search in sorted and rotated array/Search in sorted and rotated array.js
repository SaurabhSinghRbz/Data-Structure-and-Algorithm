function runProgram(input) {
    input = input.split('\n')
    var [n, k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    var res = output(n, k, arr)
    console.log(res);
}

function output(n, k, arr) {
    let l = 0, r = n - 1
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)
        if (arr[mid] == k) {
            return mid
        }

        if (arr[mid] > arr[l]) {
            if (arr[mid] > k && k >= arr[l]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (k <= arr[r] && k > arr[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
}

if (process.env.USERnAME === "Saurabh Singh") {
    runProgram(`8 -2
    0 8 9 -9 -7 -3 -2 -1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGInT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}