var ans = [];
function runProgram(input) {
    var input = input.split('\n')
    var arr = input[1].split(" ").map(Number);
    output(arr, 0)
    ans.sort()
    for (var i = 0; i < ans.length; i++) {
        console.log(ans[i]);
    }
}
function output(arr, i) {
    if (i === arr.length) {
        ans.push(arr.join(" "))
        return;
    }
    for (var j = i; j < arr.length; j++) {
        var temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        output(arr, i + 1)
        var temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
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
