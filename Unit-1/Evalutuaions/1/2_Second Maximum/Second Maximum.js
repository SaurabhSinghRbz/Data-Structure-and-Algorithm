function secondMaximum(a, b, c) {
    if (((a > b && c > a) || (a > c && a < b)) && a !== b && b !== c) {
        console.log(a);
    } else if (((c > b && c < a) || (c < b && c > a)) && a !== b && b !== c) {
        console.log(c);
    } else if (((b > a && c > b) || (b < a && b > c)) && a !== b && b !== c) {
        console.log(b)
    }
}
secondMaximum(45, 85, 98)