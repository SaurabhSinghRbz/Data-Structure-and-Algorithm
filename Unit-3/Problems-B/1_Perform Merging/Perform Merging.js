var ans = [];
function runProgram(input) {
    var input = input.split('\n');
    var n = +input[0];
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    output(n, arr1, arr2)
}
function output(n, arr1, arr2) {
    var j = 0, i = 0;
    while (j < n && i < n) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++;
        }
        else {
            ans.push(arr2[j])
            j++;
        }
    }
    while (i < n) {
        ans.push(arr1[i])
        i++
    }
    while (j < n) {
        ans.push(arr2[j])
        j++;
    }
    console.log(ans.join(" "))
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