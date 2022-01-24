function masaiTraversalAndQueries(N, M, q, arr) {
    if ((q == 1)) {
        var str = "";
        for (var i = 0; i < N; i++) {
            if (i % 2 == 0) {
                var j = 0;
                while (j < M) {
                    str += arr[i][j] + " ";
                    j++;
                }
            } else {
                var j = M - 1;
                while (j >= 0) {
                    str += arr[i][j] + " ";
                    j--;
                }
            }
        }
        console.log(str);
    } else if (q == 2) {
        var str = "";

        for (var i = 0; i < N; i++) {
            if (i % 2 == 0) {
                var j = M - 1;
                while (j >= 0) {
                    str += arr[i][j] + " ";
                    j--;
                }
            } else {
                var j = 0;
                while (j < M) {
                    str += arr[i][j] + " ";
                    j++;
                }
            }
        }
        console.log(str);

    }

}
masaiTraversalAndQueries()