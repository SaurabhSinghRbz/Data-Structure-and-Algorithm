function maximumOccuringElement(A, N) {
    var data = {};
    for (var i = 0; i < N; i++) {
        if (data[A[i]] === undefined) {
            data[A[i]] = 1;
        } else {
            data[A[i]] += 1;
        }
    } var highestValue = 0, highestOccEle = -Infinity;
    for (var key in data) {
        if (data[key] > highestValue) {
            highestValue = data[key];
            highestOccEle = key;
        }
    }
    console.log(highestOccEle);
}
maximumOccuringElement()