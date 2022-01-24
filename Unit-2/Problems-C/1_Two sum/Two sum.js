function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, k] = input[line].split(" ").map(Number);
        line++
        var arr = input[line].split(" ").map(Number);
        line++;
        output(n, k, arr);
    }
    function output(n, k, arr) {
        var x = -1, y = -1;
        var i = 0, j = n - 1;
        while (i < j) {
            if (arr[i] + arr[j] == k) {
                x = i;
                y = j;
                break;
            } else if (arr[i] + arr[j] > k) {
                j--
            } else {
                i++;
            }
        }
        console.log(x + " " + y);
    }
}

if (process.env.USER === "") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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