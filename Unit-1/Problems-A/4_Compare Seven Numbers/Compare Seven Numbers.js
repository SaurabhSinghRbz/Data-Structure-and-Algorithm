function compareSevenNumbers(a, b, c, d, e, f, g) {
    var sum1 = ((a + b) * c);
    var sum2 = (d + e + f + g);
    if (sum1 > sum2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
compareSevenNumbers(1, 2, 3, 4, 5, 6, 7)