function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2]
    var ans = [];

    function isSubsetExist(curr, idx) {
        if (idx === n) {
            if (curr.length >= k) {
                var flag = 0;
                for (var i = 1; i < curr.length; i++) {
                    if (curr[0] !== curr[i]) {
                        flag = 1;
                    }
                }
                if (flag == 0) {
                    ans.push(curr.join(""))
                }

            }

            return;
        }
        isSubsetExist(curr, idx + 1)
        isSubsetExist([...curr, arr[idx]], idx + 1)


    }

    isSubsetExist([], 0)
    if (ans.length !== 0) {
        console.log("True")
    } else {
        console.log("False")
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