function runProgram(input) {
    var input = input.split('\n');
    var n = +input[0]
    var arr = input[1].split(" ").map(Number);
    quick_sort(arr, 0, arr.length - 1)
    console.log(arr.join(" "))
}

function quick_sort(arr, l, r) {
    if (l < r) {
        var pivot_pos = quick_fix_pos(arr, l, r)
        quick_sort(arr, l, pivot_pos - 1)
        quick_sort(arr, pivot_pos + 1, r)
    }
}

function quick_fix_pos(arr, l, r) {
    var p = arr[r];
    var i = l;
    for (var j = l; j < r; j++) {
        if (arr[j] < p) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
    var temp = arr[r];
    arr[r] = arr[i];
    arr[i] = temp;
    return i;
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