function detectPalII(N, string) {
    var data = {};
    for (var i = 0; i < N; i++) {
        if (data[string[i]] == undefined) {
            data[string[i]] = 1
        } else {
            data[string[i]] += 1;
        }
    } if (N % 2 == 0) {
        var flag = 0;
        for (var key in data) {
            if (data[key] % 2 != 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            console.log("Possible!");
        } else {
            console.log("Not Possible!");
        }
    } else {
        var count = 0;
        for (var key in data) {
            if (data[key] % 2 != 0) {
                count++
            }
        } if (count == 1) {
            console.log("Possible!");
        } else {
            console.log("Not Possible!");
        }
    }
}
detectPalII()