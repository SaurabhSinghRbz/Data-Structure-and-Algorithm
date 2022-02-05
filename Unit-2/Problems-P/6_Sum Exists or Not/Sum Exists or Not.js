function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2]
    var flag = 0
    function isSubsetExist(curr, idx) {
        if (idx === n) {
            var sum = 0;
            for (var i = 0; i < curr.length; i++) {
                sum += curr[i]
            }
            if (sum == k) {
                flag = 1
            }
            return;
        }
        isSubsetExist(curr, idx + 1)
        isSubsetExist([...curr, arr[idx]], idx + 1)


    }

    isSubsetExist([], 0)
    if (flag == 1) {
        console.log("yes")
    } else {
        console.log("no")
    }
}

if (process.env.USERNAME === "Saurabh Singh") {
    runProgram(`3
    1 2 1
    2`);
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