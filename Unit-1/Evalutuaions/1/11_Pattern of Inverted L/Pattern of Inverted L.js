function invertedL(N) {
    for (var i = 1; i <= N; i++) {
        var count = "";
        for (var j = 1; j <= N; j++) {
            if (i == 1 || j == 1) {
                count += "* ";
            }
        } console.log(count);
    }
}
invertedL(8)