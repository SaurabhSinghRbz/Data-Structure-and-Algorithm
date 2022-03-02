function runProgram(input) {
    input = input.split('\n')
    var n = +input[0]
    var line = 1;
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(+input[line])
        line++;
    }
    let q = +input[line]
    line++;
    for (let i = 0; i < q; i++) {
        let q1 = +input[line]
        line++;
        output(n, arr, q1)
    }
}

function output(n, arr, q) {
    var sum = 0, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= q) {
            count++;
            sum += arr[i]
        }
    }
    console.log(count, sum);
}

if (process.env.USERnAME === "Saurabh Singh") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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