function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0].trim()
    function output(idx, data) {
        console.log(data.join(" "))
        for (var i = idx; i <= n; i++) {
            data.push(i)
            output(i + 1, data)
            data.pop();
        }

    }
    output(1, [])
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