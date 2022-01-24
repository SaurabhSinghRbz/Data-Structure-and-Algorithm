function sumAndCompare(one, two, three, four, five) {
    var sum1 = (one + two + three);
    var sum2 = (four + five);
    if (sum1 > sum2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
sumAndCompare(1, 2, 3, 4, 5)