function solve(N, arr) {
    var res = ""
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    } for (var i = 0; i < N; i++) {
        res += arr[i] + " "
    } console.log(res)
}
solve()