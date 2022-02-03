function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0];
    var queue = [];
    for (var i = 1; i <= n; i++) {
        var [a, b] = input[i].split(" ");
        if (a === 'E') {
            queue.push(b);
            console.log(queue.length);
        } else {
            if (queue.length == 0) {
                console.log(-1 + ' 0');
            } else {
                var x = queue.shift();
                var y = queue.length;
                console.log(x + ' ' + y)
            }
        }
    }
}
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