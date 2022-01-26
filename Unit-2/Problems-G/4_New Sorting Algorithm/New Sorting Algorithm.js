function runProgram(input) {
    var input = input.split('\n')
    var [N, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    var data = [];
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - 1 - i; j++) {
            if (arr[j] % k > arr[j + 1] % k) {
                var temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr.join(' '))
}

if (process.env.USER === "") {
    runProgram(`5 6
    12 18 17 65 46`);
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