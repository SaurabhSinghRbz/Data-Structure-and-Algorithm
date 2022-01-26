function runProgram(input) {

    var input = input.split("\n");
    var [n, m] = input[0].split(" ").map(Number);
    var line = 1;
    var flag = 0;
    for (var i = 0; i < n; i++) {
        var arr = input[line].split(" ").map(Number);

        line++;
        for (var j = 0; j < m; j++) {
            var count = 0;
            for (var k = 2; k <= arr[j]; k++) {
                if (arr[j] % k == 0) {
                    count++;
                }
            } if (count != 1) {
                flag++
            }
        }

    }
    console.log(flag);

}
if (process.env.USER === "") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9 `);
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
