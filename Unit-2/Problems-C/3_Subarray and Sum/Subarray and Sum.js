function runProgram(input) {
    var input = input.split("\n");
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    maxLength(n, arr, k);

}
function maxLength(n, arr, k) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    } if (sum % k != 0) {
        console.log(1);
    } else {
        var left = -1, right = -1;
        for (var i = 0; i < n; i++) {
            if (arr[i] % k != 0) {
                left = i;
                break;
            }
        } for (var i = n - 1; i >= 0; i--) {
            if (arr[i] % k != 0) {
                right = i;
                break;
            }
        } if (left == -1) {
            console.log("-1");
        } else {
            var left_length = left + 1;
            var right_length = n - right;
            if (left_length > right_length) {
                var length = n - right_length;
            } else {
                var length = n - left_length;
            }
        }
    }


    var sum = 0, count = 0;
    for (var i = 0; i < length; i++) {
        sum += arr[i]
    } if (sum % k != 0) {
        count++;
    } for (var i = length; i < n; i++) {
        sum += arr[i];
        sum -= arr[i - length];
        if (sum % k != 0) {
            count++;
        }
    } if (count != 0) {
        console.log(count);
    }
}

if (process.env.USER === "") {
    runProgram(`4 3
2 3 4 6`);
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