var count = 0;
function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0].trim()
    var arr = []
    for (var i = 1; i <= n; i++) {
        arr.push(i)
    }
    var [l, r] = input[1].split(" ").map(Number);

    function output(idx) {
        if (idx == arr.length) {
            var sum = 0;
            for (var j = l; j <= r; j++) {
                sum += +arr[j]
            }
            if (sum % 2 == 1) {
                count++;
            }
            return;
        }
        for (var i = idx; i < arr.length; i++) {
            var temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
            output(idx + 1)
            var temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
        }
    }
    output(0)
    console.log(count)
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
