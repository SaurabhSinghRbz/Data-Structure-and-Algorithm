function zTraversal(N, arr) {
    var str = "";
    var i = 0;
    for (var j = 0; j < N; j++) {
        str += arr[i][j] + " ";
    }
    var di = 1;
    var dj = N - 2;
    while (di <= N - 1 && dj >= 0) {
        str += arr[di][dj] + " ";
        di++;
        dj--;
    }
    i = N - 1;

    for (var j = 1; j < N; j++) {
        str += arr[i][j] + " ";
    }

    console.log(str);
}
zTraversal()