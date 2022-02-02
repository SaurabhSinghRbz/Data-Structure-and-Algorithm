function runProgram(input) {
    var n = +input
    var cur = []

    console.log(countPoss(n, cur))
}

function countPoss(n, cur) {
    if (!validBoard(cur)) {
        return 0;
    }
    if (cur.length == n) {
        return 1;
    }
    var row = []
    for (let j = 0; j < n; j++) {
        row.push("*")
    }
    var ans = 0;
    for (let i = 0; i < row.length; i++) {
        row[i] = "Q"
        cur.push(row)
        ans += countPoss(n, cur)
        cur.pop()
        row[i] = "*"
    }
    return ans;
}


function validBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == "Q") {

                var count = 0;

                for (let k = 0; k < board.length; k++) {
                    if (board[k][j] == 'Q') {
                        count++
                    }
                }
                if (count > 1) {
                    return false;
                }
                count = 0;
                var ti = i, tj = j;
                while (ti < board.length && tj < board.length) {
                    if (board[ti][tj] == "Q") {
                        count++;
                    }
                    ti++;
                    tj++;
                }
                if (count > 1) {
                    return false;
                }
                count = 0;
                ti = i, tj = j;
                while (ti >= 0 && tj >= 0) {
                    if (board[ti][tj] == "Q") {
                        count++;
                    }
                    ti--;
                    tj--;
                }
                if (count > 1) {
                    return false;
                }

                count = 0;
                ti = i, tj = j;
                while (ti >= 0 && tj < board.length) {
                    if (board[ti][tj] == "Q") {
                        count++;
                    }
                    ti--;
                    tj++;
                }
                if (count > 1) {
                    return false;
                }

                count = 0;
                ti = i, tj = j;
                while (ti < board.length && tj >= 0) {
                    if (board[ti][tj] == "Q") {
                        count++;
                    }
                    ti++;
                    tj--;
                }
                if (count > 1) {
                    return false;
                }
            }
        }
    }
    return true;
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