function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++;
        var arr = [];
        for (var j = 0; j < n; j++) {
            arr.push(input[line].split(" ").map(Number))
            line++
        }
        output(n, arr)
    }
}
function output(n, arr) {
    var top = 0, bottom = n - 1, left = 0, right = n - 1;
    var newArr = []
    for (var i = bottom; i >= 0; i--) {
        newArr.push(arr[i][top])
    }
    left++;
    for (var i = left; i < n; i++) {
        newArr.push(arr[top][i])
    }
    top++;
    for (var i = top; i < n; i++) {
        newArr.push(arr[i][right])
    }
    right--;
    for (var i = right; i > 0; i--) {
        newArr.push(arr[bottom][i])
    }

    console.log(newArr.join(" "));
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