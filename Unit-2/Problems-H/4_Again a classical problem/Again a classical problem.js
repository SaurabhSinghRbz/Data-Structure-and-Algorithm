function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (var i = 1; i <= t; i++) {
        var str = input[i]
        var n = str.length;
        output(n, str);
        if (output(n, str) == true) {
            console.log("balanced");
        } else {
            console.log("not balanced");
        }
    }
}
function output(n, str) {
    var stack = [];
    for (var i = 0; i < n; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i])
        } else {
            if (stack.length == 0) {
                return false;
            } else {
                var x = stack.pop();
                if ((str[i] == ')' || str[i] == '}') && x == '[') {
                    return false;
                    break;
                }
                else if ((str[i] == ')' || str[i] == ']') && x == '{') {
                    return false;
                    break;
                } else if ((str[i] == ']' || str[i] == '}') && x == '(') {
                    return false;
                    break;
                }
            }

        }

    } return (stack.length == 0)
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
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}