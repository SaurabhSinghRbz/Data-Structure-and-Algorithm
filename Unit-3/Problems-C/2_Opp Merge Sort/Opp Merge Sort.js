function runProgram(input) {
    var input = input.split('\n');
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);

    var res = merge_sort(arr)
    console.log(res.join(" "))

}
function merge_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var m = parseInt(arr.length / 2)
    var leftArr = merge_sort(arr.slice(0, m))
    var rightArr = merge_sort(arr.slice(m))

    return sorting_arr(leftArr, rightArr);
}

function sorting_arr(leftArr, rightArr) {
    var sorted_arr = []
    var li = 0, ri = 0;
    while (li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] > rightArr[ri]) {
            sorted_arr.push(leftArr[li])
            li++
        } else {
            sorted_arr.push(rightArr[ri])
            ri++
        }
    }

    while (li < leftArr.length) {
        sorted_arr.push(leftArr[li])
        li++
    }

    while (ri < rightArr.length) {
        sorted_arr.push(rightArr[ri])
        ri++;
    }
    return sorted_arr;
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