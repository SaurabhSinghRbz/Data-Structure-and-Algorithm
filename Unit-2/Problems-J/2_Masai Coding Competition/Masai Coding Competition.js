function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    var queue = [];
    var q1 = [], q2 = [], q3 = [], q4 = [];
    for (var i = 0; i < t; i++) {
        var [x, a, b] = input[line].split(" ")
        line++;
        if (x == 'E') {
            if (a == '1') {
                if (queue.length == 0 || !queue.includes(1)) {
                    queue.push(1)
                }
                q1.push(b)
            } else if (a == '2') {
                if (queue.length == 0 || !queue.includes(2)) {
                    queue.push(2)
                }
                q2.push(b)
            } else if (a == '3') {
                if (queue.length == 0 || !queue.includes(3)) {
                    queue.push(3)
                }
                q3.push(b)
            } else if (a == '4') {
                if (queue.length == 0 || !queue.includes(4)) {
                    queue.push(4)
                }
                q4.push(b)
            }
        } else {
            if (queue[0] == 1) {
                if (q1.length !== 0) {
                    var z1 = q1.shift()
                    console.log('1 ' + z1);
                    if (q1.length == 0) {
                        queue.shift();
                    }
                }


            } else if (queue[0] == 2) {
                if (q2.length !== 0) {
                    var z2 = q2.shift()
                    console.log('2 ' + z2);
                    if (q2.length == 0) {
                        queue.shift();
                    }
                }
            } else if (queue[0] == 3) {
                if (q3.length !== 0) {
                    var z3 = q3.shift()
                    console.log('3 ' + z3);
                    if (q3.length == 0) {
                        queue.shift();
                    }
                }
            } else if (queue[0] == 4) {
                if (q4.length !== 0) {
                    var z4 = q4.shift()
                    console.log('4 ' + z4);
                    if (q4.length == 0) {
                        queue.shift();
                    }
                }
            }
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