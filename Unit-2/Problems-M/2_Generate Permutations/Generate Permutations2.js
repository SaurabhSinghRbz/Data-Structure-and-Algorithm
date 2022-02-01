var ans = []
function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].split(" ").map(Number);

    function output(idx) {
        if (idx == arr.length) {
            ans.push(arr.join(" "))
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
    ans.sort()
    for (var i = 0; i < ans.length; i++) {
        console.log(ans[i])
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