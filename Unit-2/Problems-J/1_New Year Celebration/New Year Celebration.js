function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    var stack = [], queue = [];
    for (var i = 1; i <= t; i++) {
        var [x, r] = input[line].split(" ").map(Number);
        line++;



        if (x == 1 && r != undefined) {
            queue.push(r)
        } else if (x == 2 && r != undefined) {
            stack.push(r)
        } else if (x == 3 && r == undefined) {
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[0]);
            }

        } else if (x == 4 && r == undefined) {
            if (stack.length == 0) {
                console.log(-1);
            } else {
                console.log(stack[stack.length - 1]);
            }

        } else if (x == 5 && r == undefined) {
            var z = queue.shift()
            stack.push(z)
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