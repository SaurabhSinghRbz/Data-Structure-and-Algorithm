function runProgram(input) {
    var input = input.split('\n')
    var [n, d] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    var count = 0, newCount = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] <= d) {
            count++
        } else {
            newCount++;
        }
        if (newCount == 2) {
            break;
        }
    } console.log(count);

}
if (process.env.USER === "") {
    runProgram(`7 6
    4 3 7 6 7 2 2
    `);
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