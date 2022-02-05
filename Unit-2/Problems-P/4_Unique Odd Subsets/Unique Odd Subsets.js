function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2]
    var ans = [];

    function isSubsetExist(curr, idx) {
        if (idx === n) {
            if (curr.length >= k) {
                if (curr.length == 1) {
                    if (curr[0] % 2 == 1) {
                        ans.push(curr)
                    }

                } else {
                    var count = 0;
                    for (var i = 0; i < curr.length; i++) {
                        var flag = 0
                        for (var j = i + 1; j < curr.length; j++) {
                            if (curr[j] === curr[i]) {
                                flag = 1;
                            }
                        }
                        if (flag == 0) {
                            count++
                        }
                    }
                    // console.log(count)
                    if (count === k) {
                        var sum = 0
                        for (var i = 0; i < curr.length; i++) {
                            sum += +curr[i]
                        }
                        if (sum % 2 == 1) {
                            ans.push(curr)
                        }
                    }
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