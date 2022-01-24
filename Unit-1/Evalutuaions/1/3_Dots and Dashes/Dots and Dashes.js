function dotsAndDashes(N) {

    for (var i = 1; i <= N; i++) {
        var count = "";
        for (var j = 1; j <= N; j++) {
            if (i % 2 == 1 && j == 1) {
                count += "_";
            } else if (i % 2 == 0) {
                count += "*";
            }
        } console.log(count);
    }

}
dotsAndDashes(5)