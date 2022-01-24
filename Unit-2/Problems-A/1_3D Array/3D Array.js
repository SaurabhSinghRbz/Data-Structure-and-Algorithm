function Array3D(N, M, K, array) {
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
            var str = ""
            for (var l = 0; l < K; l++) {
                str += array[i][j][l] + " ";
            } console.log(str)
        }
    }
}
Array3D(2, 2, 2,
    [1, 2, 3, 4, 5, 6, 7, 8])