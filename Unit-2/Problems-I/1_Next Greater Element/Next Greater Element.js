function runProgram(input) {
    var newInput = input.split("\n");
    var t = +newInput[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n = +newInput[line];
        line++;
        var arr = newInput[line].split(" ").map(Number);
        arr.reverse();
        line++;
        output(n, arr);
    }

}
function output(n, arr) {
    var stack = [],
        ans = [];
    for (var i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans.push(-1)
        } else {
            ans.push(stack[stack.length - 1])
        }

        stack.push(arr[i]);
    }
    console.log(ans.reverse().join(" "))
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
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}