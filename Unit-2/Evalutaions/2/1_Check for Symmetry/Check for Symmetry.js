function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1
    for (var i = 0; i < t; i++) {
        var n = +input[line];
        line++;
        var arr = [];
        for (var j = 0; j < n; j++) {
            arr.push(input[line].split(" "));
            line++
        }
        // console.log(1);
        // console.log(arr[0][0].length);
        array1(n, arr);
        array2(n, arr);

        // console.log(arr[0]);

        if (array1(n, arr) == true && array2(n, arr) == true) {
            console.log("BOTH");
        } else if (array1(n, arr) != true && array2(n, arr) != true) {
            console.log("NO");
        } else if (array1(n, arr) == true && array2(n, arr) != true) {
            console.log("HORIZONTAL");
        } else if (array1(n, arr) != true && array2(n, arr) == true) {
            console.log("VERTICAL");
        }
    }
}
function array1(n, arr) {
    var res1 = ""
    var res2 = ""
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < arr[i][0].length - 1; j++) {
            res1 += arr[i][0][j]
        }
    }
    for (var i = n - 1; i >= 0; i--) {

        for (var j = 0; j < arr[i][0].length - 1; j++) {
            res2 += arr[i][0][j]
        }
    }

    if (res1 == res2) {
        return true;
    } else {
        return false;
    }
}

function array2(n, arr) {
    var res1 = ""
    var res2 = ""
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < arr[i][0].length - 1; j++) {
            res1 += arr[j][0][i]
        }
    }
    for (var i = n - 1; i >= 0; i--) {

        for (var j = 0; j < arr[i][0].length - 1; j++) {
            res2 += arr[j][0][i]
        }
    }

    if (res1 == res2) {
        return true;
    } else {
        return false;
    }
}
if (process.env.USER === "") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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