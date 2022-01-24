function updateAndCompare(num1, num2, num3) {
    if (num1 > num2) {
        console.log(true);
    } else {
        console.log(false);
    }
    num1 = num1 + num3;
    if (num1 > num2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
updateAndCompare(4, 8, 5)