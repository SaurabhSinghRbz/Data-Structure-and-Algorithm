function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var names = [], marks = [];
    for (var i = 1; i <= n; i++) {
        var arr = input[i].split(" ")
        names.push(arr[0])
        marks.push(Number(arr[1]))

    }
    //   console.log(names)
    //          console.log(marks)
    sortingArr(n, marks, names)
    printingRank(n, marks, names)
}
function sortingArr(n, marks, names) {
    for (var i = 0; i < n - 1; i++) {
        var max = i
        for (var j = i + 1; j < n; j++) {
            if ((marks[max] < marks[j]) || (marks[max] == marks[j] && names[max] > names[j])) {
                max = j
            }
        }
        var temp = marks[i]
        marks[i] = marks[max]
        marks[max] = temp;

        var temp = names[i]
        names[i] = names[max]
        names[max] = temp
    }
}
function printingRank(n, marks, names) {
    var rank = 1;
    var actual_rank = 1;
    console.log(rank + " " + names[0])
    actual_rank++;
    for (var i = 1; i < n; i++) {
        if (marks[i] != marks[i - 1]) {
            rank = actual_rank
        }
        actual_rank++;
        console.log(rank + " " + names[i])
    }

}
if (process.env.USER === "") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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