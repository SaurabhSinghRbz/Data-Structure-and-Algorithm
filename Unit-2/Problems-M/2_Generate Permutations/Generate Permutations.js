let ans = []
function runProgram(input) {
    var input = input.split('\n')
    var arr = input[1].split(" ").map(Number);
    generatePermutaions(arr, 0)
    ans.sort()
    ans.forEach(function (ele) {
        console.log(ele)
    })
}
function generatePermutaions(arr, current) {
    if (current == arr.length) {
        ans.push(arr.join(" "))
        return;
    }
    for (let i = current; i < arr.length; i++) {
        swap(arr, i, current)
        generatePermutaions(arr, current + 1)
        swap(arr, i, current)
    }
}

function swap(arr, i, current) {
    let temp = arr[i]
    arr[i] = arr[current]
    arr[current] = temp
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