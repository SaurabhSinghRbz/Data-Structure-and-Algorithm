function dotsAndDashesII(N) {

    for (var i = 1; i <= N; i++) {
        var count = "";
        for (var j = 1; j <= N; j++) {
            if (i % 2 == 1) {
                count += "_";
            } else {
                count += "*";
            }
        } console.log(count);
    }

}
dotsAndDashesII(8)