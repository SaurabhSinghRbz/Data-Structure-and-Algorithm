function solve(N, arr) {
    var res = "";
    for (var i = 0; i < N - 1; i++) {
        var min = i
        for (var j = i + 1; j < N; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        } var temp = arr[i];
        arr[i] = arr[min]
        arr[min] = temp
    }
    for (var i = 0; i < N; i++) {
        res += arr[i] + " "
    } console.log(res)
}
solve()