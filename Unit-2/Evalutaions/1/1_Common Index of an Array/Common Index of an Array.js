function runProgram(input) {
    var input = input.split('\n');
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var n1 = +input[line];
        line++;
        var arr1 = input[line].split(" ").map(Number)
        line++
        var n2 = +input[line];
        line++;
        var arr2 = input[line].split(" ").map(Number);
        line++;
        output(n1, arr1, n2, arr2);
    }
}
function output(n1, arr1, n2, arr2) {
    var data = [];
    arr1.sort(function (a, b) { return a - b; })
    arr2.sort(function (a, b) { return a - b; })
    var i = 0, j = 0
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            data.push(arr1[i])
            i++;
            j++;
        }
    }
    if (data.length > 0) {
        console.log(data.join(" "));
    } else {
        console.log(-1);
    }
}

if (process.env.USERNAME === "Saurabh Singh") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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